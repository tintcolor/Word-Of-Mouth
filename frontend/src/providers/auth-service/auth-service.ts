import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { ReplaySubject, Observable } from "rxjs";
import { Storage } from "@ionic/storage";
import { JwtHelper, AuthHttp } from "angular2-jwt";
// import {SERVER_URL} from "../../../config";
import { NavController } from 'ionic-angular';
import { CreateprofilePage } from "../../pages/createprofile/createprofile"
import { SignupPage } from "../../pages/signup/signup"


@Injectable()
export class AuthService {

  authUser = new ReplaySubject<any>(1);
  isNewAccount: boolean = true;
  newAccountInfo: any;



  constructor(private readonly http: Http,
    private readonly authHttp: AuthHttp,
    private readonly storage: Storage,
    private readonly jwtHelper: JwtHelper) {
  }

  checkLogin() {
    this.storage.get('jwt').then(jwt => {

      if (jwt && !this.jwtHelper.isTokenExpired(jwt)) {
        this.authHttp.get(`http://localhost:8080/authenticate`)
          .subscribe(() => this.authUser.next(jwt),
          (err) => this.storage.remove('jwt').then(() => this.authUser.next(null)));
        // OR
        // this.authUser.next(jwt);
      }
      else {
        this.storage.remove('jwt').then(() => this.authUser.next(null));
      }
    });
  }

  login(values: any): Observable<any> {
    return this.http.post(`http://localhost:8080/login`, values)
      .map(response => response.text())
      .map(jwt => this.handleJwtResponse(jwt));
  }

  logout() {
    this.storage.remove('jwt').then(() => this.authUser.next(null));
  }

  signup(values: any): Observable<any> {
    return this.http.post(`http://localhost:8080/signup`, values)
      .map(response => response.text())
      .map(jwt => {
        if (jwt !== 'EXISTS') {
          this.newAccountInfo = values;
          // this.http.post(`http://localhost:8080/createuser`, values)
          //You call handleJwtResponse to then set the new rootpage
          this.isNewAccount = true;
          return this.handleJwtResponse(jwt);
        }
        else {
          return jwt;
        }
      });
  }

  private handleJwtResponse(jwt: string) {
    return this.storage.set('jwt', jwt)
      .then(() => 
        this.authUser.next(jwt))
      .then(() => jwt);
  }

}