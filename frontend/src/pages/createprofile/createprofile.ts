import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgModel } from "@angular/forms";
import { Http, RequestOptions, Headers } from "@angular/http";
import { AuthService } from "../../providers/auth-service/auth-service";
import { HomePage } from "../home/home";

/**
 * Generated class for the CreateprofilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-createprofile',
  templateUrl: 'createprofile.html',
})
export class CreateprofilePage {

  newUserObject: any = this.authService.newAccountInfo;
  //Just get the field from authservice, the this.authService.newAccountInfo)
  @ViewChild('username')
  usernameModel: NgModel;
  main_job: any;
  side_job: any;
  photo: any;
  username: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public http: Http, ) {
  }

  ionViewDidLoad() {
    // console.log(this.navParams.data);
    console.log(this.newUserObject);
    this.authService.isNewAccount = false;
  }

  complete(values: any) {
    // this.newUserObject += values;
    values["rating"] = 4;
    values["first_name"] = "asdf";
    const merged = { ...this.newUserObject, ...values };

    merged["mainJob"] = "this.mainJob";
    // values["side_job"] = this.sideJob;


    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.username = merged["username"];
    console.log(this.username);
    console.log(merged);
    return this.http.put('http://localhost:8080/alteruser/', merged, options)
      .map(res => res.text())
      .subscribe(data => {
        // console.log(data);
        //    console.log("data");
        this.navCtrl.push(HomePage);
      });


  }



  logout() {
    this.authService.logout();
    console.log("joking");
  }

}
