import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { NgModel } from "@angular/forms";
import { Storage } from "@ionic/storage";
import { JwtHelper, AuthHttp } from "angular2-jwt";



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
  @ViewChild('username')
  usernameModel: NgModel;
  authUser = new ReplaySubject<any>(1);
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private readonly authHttp: AuthHttp,
    private readonly jwtHelper: JwtHelper,
    public http: Http,
    private readonly storage: Storage, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostgigPage');
  }


  sendJson(values: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    // let myHeaders: Headers = new Headers
    // myHeaders.append('Content-type', 'application/json; charset=UTF-8')

    // console.log("ouch")
    console.log(values);
    return this.http.post('http://localhost:8080/postgig', values, options)
      .map(res => res.text())
      .subscribe(data => {
        //   console.log(data);
        //    console.log("data");
      });
  }




}
