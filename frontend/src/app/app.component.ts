import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { TabsPage } from '../pages/tabs/tabs';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { AuthService } from "../providers/auth-service/auth-service";
import { CreateprofilePage } from "../pages/createprofile/createprofile"

import { GigsPage } from "../pages/gigs/gigs"
import { PostgigPage } from "../pages/postgig/postgig"
import { ViewPostedGigPage } from '../pages/view-posted-gig/view-posted-gig';
import { MyGigsPage } from '../pages/mygigs/mygigs';
import { FindFriendsPage } from '../pages/find-friends/find-friends';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = null;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    private readonly authService: AuthService,
    public push: Push) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.initPushNotification();
    });

    this.authService.authUser.subscribe(jwt => {

      if (jwt && authService.isNewAccount == true) {

        //This is where it goes to the page after authentication
        authService.isNewAccount = false;
        this.rootPage = LoginPage; //CreateprofilePage
      } else if (jwt) {
        this.rootPage = TabsPage;
      }
      else {
        this.rootPage = LoginPage;
      }
    });

    this.authService.checkLogin();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Post Gig', component: PostgigPage },
      { title: 'Gigs', component: GigsPage }
    ];

  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title == "Home") {
      this.nav.setRoot(page.component);
    } else {
      console.log(page);
      this.nav.push(page.component);
    }

  }

  logout() {
    this.authService.logout();
  }


  initPushNotification() {
    if (!this.platform.is('cordova')) {
      console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
      return;
    }
    const options: PushOptions = {
      android: {
        senderID: '1083546129469'
      },
      ios: {
        alert: 'true',
        badge: false,
        sound: 'true'
      },
      windows: {}
    };
    const pushObject: PushObject = this.push.init(options);

    pushObject.on('registration').subscribe((data: any) => {
      console.log('device token -> ' + data.registrationId);
      //TODO - send device token to server
    });

    pushObject.on('notification').subscribe((data: any) => {
      console.log('message -> ' + data.message);
      //if user using app and push notification comes
      if (data.additionalData.foreground) {
        // if application open, show popup
        let confirmAlert = this.alertCtrl.create({
          title: 'New Notification',
          message: data.message,
          buttons: [{
            text: 'Ignore',
            role: 'cancel'
          }, {
            text: 'View',
            handler: () => {
              //TODO: Your logic here
              this.nav.push(HomePage, { message: data.message });
            }
          }]
        });
        confirmAlert.present();
      } else {
        //if user NOT using app and push notification comes
        //TODO: Your logic on click of push notification directly
        this.nav.push(HomePage, { message: data.message });
        console.log('Push notification clicked');
      }
    });

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin' + error));
  }

}

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   });
  // }



