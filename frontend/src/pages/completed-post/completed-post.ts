import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CompletedPostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-completed-post',
  templateUrl: 'completed-post.html',
})
export class CompletedPostPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletedPostPage');

  }

}
