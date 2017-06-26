import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { JwtHelper, AuthHttp } from "angular2-jwt";
// import {SERVER_URL} from "../../../config";
import { AuthService } from "../../providers/auth-service/auth-service";
import { GigsPage } from "../../pages/gigs/gigs"
import { PostgigPage } from "../../pages/postgig/postgig"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: string;
  username: string;
  pageData:any;
  name:any;
  email:any;
  firstName:any;
  lastName:any;
  mainJob:any;
  rating:any;
  photo:any;

  constructor(private readonly authService: AuthService,
    private readonly jwtHelper: JwtHelper,
    private readonly authHttp: AuthHttp,
    private navCtrl: NavController) {

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
      data => {
        // console.log(data.json())
        
        this.displayPage(data);
      },//this.message = data.text() 
      err => console.log(err)
    );

  }

  displayPage(info) {
    this.username = info.json().username;
    this.rating = info.json().rating;
    this.firstName = info.json().firstName;
    // console.log(info);
  }

  logout() {
    this.authService.logout();
  }

  showGigs() {
    this.navCtrl.push(GigsPage);
    console.log("asdfads");
  }

  createGig() {
    this.navCtrl.push(PostgigPage);

  }





}