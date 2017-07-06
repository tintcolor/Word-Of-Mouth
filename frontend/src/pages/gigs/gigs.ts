import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JwtHelper, AuthHttp } from "angular2-jwt";
import { HomeService } from "../home/homeService"
import { ViewOneGigPage } from "../view-one-gig/view-one-gig"
import {SERVER_URL} from "../../environment/config"

/**
 * Generated class for the GigsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gigs',
  templateUrl: 'gigs.html',
})
export class GigsPage {


  mainJob: any;
  isAllGigs: boolean;
  jobs: Array<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public authHttp: AuthHttp,
    public homeService: HomeService) {
    this.mainJob = this.navParams.get("mainPosition");
    this.isAllGigs = this.navParams.get("isAllGigs");

  }

  ionViewWillEnter() {

    if (this.isAllGigs == true) {
      this.authHttp.get(SERVER_URL+`gigs/`).map((data) => data.json())
        .subscribe(
        data => {
          //console.log(data.json());
          this.displayGigs(data);
          this.jobs = data;
        },//
        err => console.log(err)
        );
    } else {
      this.authHttp.get(SERVER_URL+`mygigs/` + this.mainJob).map((data) => data.json())
        .subscribe(
        data => {
          //console.log(data.json());
          this.displayGigs(data);
          this.jobs = data;
        },//
        err => console.log(err)
        );
    }

  }

  itemTapped(event, job) { 
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ViewOneGigPage, {
      item: job
    });
  }


  displayGigs(gigs) {
    console.log(this.jobs==null);
    this.jobs = gigs;
    // for (let gig of gigs) {
    //   console.log(gig);
    //   this.jobs = gig.seeking;
    //   console.log("Above me");
    // }
  }

}
