import {Component} from '@angular/core';
import {JwtHelper, AuthHttp} from "angular2-jwt";
// import {SERVER_URL} from "../../../config";
import {AuthService} from "../../providers/auth-service/auth-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: string;
  message: string;

  constructor(private readonly authService: AuthService,
              private readonly jwtHelper: JwtHelper,
              private readonly  authHttp: AuthHttp) {

    this.authService.authUser.subscribe(jwt => {
      if (jwt) {
        const decoded = this.jwtHelper.decodeToken(jwt);
        this.user = decoded.sub
      }
      else {
        this.user = null;
      }
    });

  }


// Alter http for new user, it should direct them to another page to fill out form, and not call
//8080/user
//when this page is hit, it automatically loads up content
  ionViewWillEnter() {
    this.authHttp.get(`http://localhost:8080/user`).subscribe(
      data =>   console.log(data.json),//this.message = data.text()
      err => console.log(err)
    );
  
  }

  logout() {
    this.authService.logout();
  }

}