import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ColleagueListPage } from "../colleague-list/colleague-list"

/**
 * Generated class for the ViewOneGigPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
