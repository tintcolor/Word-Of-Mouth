import { Component } from '@angular/core';
import { JwtHelper, AuthHttp } from "angular2-jwt";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ColleagueListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-colleague-list',
  templateUrl: 'colleague-list.html',
})
export class ColleagueListPage {

  userID: any;
  userObject: any;
  connections: Array<any>=[];
  jobSoughtFor: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public authHttp: AuthHttp) {
    console.log(this.navParams.get("item"));
    this.userObject = this.navParams.get("item");
    this.jobSoughtFor = this.userObject.seeking;
    console.log(this.userObject.userid);
    this.userID = this.userObject.userid;
  }



  ionViewWillEnter() {
    this.authHttp.get(`http://localhost:8080/connection/` + this.userID).map((data) => data.json())
      .subscribe(
      data => {
        // console.log(data);
        this.displayConnections(data);
        // this.connections = data;
        // console.log(this.connections);
      },//
      err => console.log(err)
      );
  }

  itemTapped(event, job) {
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(ViewOneGigPage,  {
    //   item: job
    // });
  }

  displayConnections(user) {

    console.log(this.jobSoughtFor);

    // var str = str.replace(/\s+/g, '');

    for (let entry of user) {

      // entry.mainJob
      console.log();
      if (this.jobSoughtFor == entry.mainJob.replace(/\s/g, '').toLowerCase()) {
        console.log("Yes");
        // this.connections.push(5,4,3);
        this.connections.push(entry);
      }
    }
    // console.log(user);


    // this.connections = user;
    // for (let gig of gigs) {
    //   console.log(gig);
    //   this.jobs = gig.seeking;
    //   console.log("Above me");
    // }
  }

}
