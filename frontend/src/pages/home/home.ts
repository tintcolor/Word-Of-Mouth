import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { JwtHelper, AuthHttp } from "angular2-jwt";
// import {SERVER_URL} from "../../../config";
import { AuthService } from "../../providers/auth-service/auth-service";
import { GigsPage } from "../gigs/gigs"
import { PostgigPage } from "../../pages/postgig/postgig"
import { ViewOneGigPage } from "../view-one-gig/view-one-gig"
import { MyGigsPage } from '../mygigs/mygigs';
import {SERVER_URL} from "../../environment/config"




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: string;
  userID: any;
  username: string;
  pageData: any;
  name: any;
  email: any;
  firstName: any;
  lastName: any;
  mainJob: any;
  rating: any;
  photo: any;
  postedGigs: Array<any>;
  isAllGigs: boolean;

  constructor(private readonly authService: AuthService,
    private readonly jwtHelper: JwtHelper,
    private readonly authHttp: AuthHttp,
    private navCtrl: NavController, public navParam: NavParams) {

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
    this.authHttp.get(SERVER_URL+`user`).subscribe(
      data => {
        // console.log(data.json())

        this.displayPage(data);
        this.userID = data.json().userID;
        // console.log(this.userID);
        console.log(data);
      },//this.message = data.text() 
      err => console.log(err)
    );


  }

  displayPage(info) {
    this.username = info.json().username;
    this.rating = info.json().rating;
    this.firstName = info.json().firstName;
    this.name = info.json().name;
    this.mainJob = info.json().mainJob;
    this.photo = info.json().photo;
    this.postedGigs = info.json().gigPost;
    // console.log(info);
  }

  logout() {
    this.authService.logout();
  }



  createGig() {
    this.navCtrl.push(PostgigPage, this.userID);

  }

  sendMainJob() {
    return this.mainJob;
  }

  itemTapped(event, job) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ViewOneGigPage, {
      item: job
    });
  }

  showGigs() {
    this.isAllGigs = false;
    this.navCtrl.push(MyGigsPage, { id: this.userID, mainPosition: this.mainJob, isAllGigs: this.isAllGigs });

  }

  showAllGigs() {
    this.isAllGigs = true;
    this.navCtrl.push(GigsPage, { id: this.userID, mainPosition: this.mainJob, isAllGigs: this.isAllGigs });

  }



}