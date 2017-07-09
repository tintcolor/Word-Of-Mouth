import { Component } from '@angular/core';
import { JwtHelper, AuthHttp } from "angular2-jwt";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SERVER_URL } from "../../environment/config"
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
  colleagues: Array<any> = [];
  jobSoughtFor: any;
  colleagueID: any;
  gigID: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public authHttp: AuthHttp) {
    // console.log(this.navParams.get("item"));
    this.userObject = this.navParams.get("item");
    this.jobSoughtFor = this.userObject.seeking;
    // console.log(this.userObject.userid);
    this.userID = this.userObject.userid;
    this.gigID = this.userObject.gigID;
    // console.log(this.userObject.gigID + " Constructor");
  }



  ionViewWillEnter() {

    this.authHttp.get(SERVER_URL + `connection/` + this.userID).map((data) => data.json())
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

  itemTapped(event, colleague) {
    this.colleagueID = colleague.userID;
    // That's right, we're pushing to ourselves!
    console.log(colleague);

    let values = {};

    values["userID"] = this.colleagueID;
    values["gigID"] = this.gigID;


    console.log(values);

    this.authHttp.post(SERVER_URL + `recommendgig/`, values).map((data) => data.json())
      .subscribe(
      data => {
        // console.log(data);
        // this.displayConnections(data);
        // this.connections = data;
        // console.log(this.connections);
      },//
      err => console.log(err)
      );
  }

  displayConnections(user) {
    this.colleagues = user;  
  }

}
