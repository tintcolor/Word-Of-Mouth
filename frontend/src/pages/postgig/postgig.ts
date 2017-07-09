import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { NgModel } from "@angular/forms";
import { Storage } from "@ionic/storage";
import { JwtHelper, AuthHttp } from "angular2-jwt";
import { CompleteTestService } from './CompleteTestService';
import { AutoCompleteComponent } from 'ionic2-auto-complete';
import { SERVER_URL } from "../../environment/config"
import { CompletedPostPage } from "../completed-post/completed-post";
import { HomePage } from '../home/home';



import { ReplaySubject, Observable } from "rxjs";

/**
 * Generated class for the PostgigPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-postgig',
  templateUrl: 'postgig.html',
})


export class PostgigPage {

  @ViewChild('searchbar')
  searchbar: AutoCompleteComponent;
  userID: any;
  @ViewChild('username')
  usernameModel: NgModel;
  authUser = new ReplaySubject<any>(1);


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private readonly authHttp: AuthHttp,
    private readonly jwtHelper: JwtHelper,
    public http: Http,
    private readonly storage: Storage,
    public navParam: NavParams,
    public completeTestService: CompleteTestService,
    myElement: ElementRef,
    public popoverCtrl: PopoverController) {


  }

  ionViewDidLoad() {
    this.userID = this.navParams.data;
    
  }

  presentAlert() {
    let popover = this.popoverCtrl.create(CompletedPostPage);
    popover.present();

    setTimeout(function () {
      popover.dismiss();

    }, 3000);

    setTimeout( () => {
      // this.navCtrl.pop();
      this.navCtrl.pop();
    }, 3500);

  }


  sendJson(values: any) {
    // console.log(this.userID);
    values["userid"] = this.userID;
    values["seeking"] = this.searchbar.getValue();

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    // console.log(this.searchbar.getValue());
    console.log(values);
    return this.http.post(SERVER_URL + 'postgig', values, options)
      .map(res => res.text())
      .subscribe(data => {
        //   console.log(data);
        //    console.log("data");
        // this.presentAlert();
        this.presentAlert();
       
      });


  }


  itemTapped() {
  
  }

}





