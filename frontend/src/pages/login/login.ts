import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
// import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: any;
  loginData = { username: '', password: '' };
  data: any;
  user: any;
  email: any;
  password: any;

  constructor(public navCtrl: NavController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController, public http: Http) { }

  doLogin() {
    // this.showLoader();
    // this.authService.login(this.loginData).then((result) => {
    //   this.loading.dismiss();
    //   this.data = result;
    //   localStorage.setItem('token', this.data.access_token);
    //   // this.navCtrl.setRoot(TabsPage);
    // }, (err) => {
    //   this.loading.dismiss();
    //   this.presentToast(err);
    // });
  }





  getdata() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allow-Origin', '*');



    //console.log(data);
    this.http.post('http://localhost:8080/v1/user?username=' + this.email + '&password=' + this.password, headers).
      map(res => res.json()).subscribe(data => {
        this.user = data;
        console.log(data);
      });
  }


  register() {
    this.navCtrl.push(RegisterPage);
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}