import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, MenuController } from 'ionic-angular';
import { SignupPage } from "../signup/signup";
import { AuthService } from "../../providers/auth-service/auth-service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(private readonly navCtrl: NavController,
    private readonly loadingCtrl: LoadingController,
    private readonly authService: AuthService,
    private readonly toastCtrl: ToastController, private menu: MenuController) {
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  login(value: any) {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Logging in ...'
    });

    loading.present();

    this.authService
      .login(value)
      .finally(() => loading.dismiss())
      .subscribe(
      () => { },
      err => this.handleError(err));
  }

  handleError(error: any) {
    let message: string;
    if (error.status && error.status === 401) {
      message = 'Login failed';
    }
    else {
      message = `Unexpected error: ${error.statusText}`;
    }

    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }


  ionViewWillEnter() {
    this.menu.enable(false);
    this.menu.swipeEnable(false)

  }


  ionViewWillLeave() {
    this.menu.enable(true);
    this.menu.swipeEnable(true)

  }

}