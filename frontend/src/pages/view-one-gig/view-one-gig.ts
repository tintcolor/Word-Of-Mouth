import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ColleagueListPage } from "../colleague-list/colleague-list"
import { JwtHelper, AuthHttp } from "angular2-jwt";
import { SERVER_URL } from "../../environment/config"

@IonicPage()
@Component({
  selector: 'page-view-one-gig',
  templateUrl: 'view-one-gig.html',
})
export class ViewOneGigPage {
  item: any;
  description: any;
  seeking: any;
  location: any;
  date: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public authHttp: AuthHttp, ) {
    this.item = this.navParams.get("item");
  }

  ionViewWillEnter() {
    this.objectParser();
  }

  objectParser() {
    this.seeking = this.item.seeking;
    this.description = this.item.description;
    this.location = this.item.location;
    this.date = this.item.date;
  }

  recommend() {
    //send this object aka item to next page, the next page should display all friends, 
    //and once clicked it should alter the post and add the person
    this.navCtrl.push(ColleagueListPage, { item: this.item })
  }

}
