import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JwtHelper, AuthHttp } from "angular2-jwt";
import { SERVER_URL } from "../../environment/config"


/**
 * Generated class for the FindFriendsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-find-friends',
  templateUrl: 'find-friends.html',
})
export class FindFriendsPage {

  users: Array<any> = [];
  userID: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authHttp: AuthHttp) {
    this.userID = this.navParams.get("id");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad  FindFriendsPage');
  }


  ionViewWillEnter() {
    this.authHttp.get(SERVER_URL + `users/` + this.userID).map((data) => data.json())
      .subscribe(
      data => {
        this.displayusers(data);
      },
      err => console.log(err)
      );
  }

  displayusers(user) {
    this.users = user;
  }

  itemTapped(event, user) {

    let values = {};
    values["userID"] = this.userID;
    values["friendID"] = user.userID;
    console.log(values);
    this.authHttp.post(SERVER_URL + 'connection/', values).map((data) => data.json())
      .subscribe(
      data => {
      },
      err => console.log(err)
      );
  }

}
