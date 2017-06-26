import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JwtHelper, AuthHttp } from "angular2-jwt";

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


  jobs: Array<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public authHttp: AuthHttp) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GigsPage');
  }

  ionViewWillEnter() {
    this.authHttp.get(`http://localhost:8080/gigs`).map((data) => data.json())
      .subscribe(
      data => {
        //console.log(data.json());
        //this.displayGigs(data);
        this.jobs = data;
      },//
      err => console.log(err)
      );

  }


  displayGigs(gigs) {
    this.jobs = gigs;
    // for (let gig of gigs) {
    //   console.log(gig);
    //   this.jobs = gig.seeking;
    //   console.log("Above me");
    // }
  }

}
