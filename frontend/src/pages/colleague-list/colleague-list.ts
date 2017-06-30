import { Component } from '@angular/core';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get("item"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColleagueListPage');
  }

}
