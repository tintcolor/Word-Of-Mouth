import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation'
import { Storage, IonicStorageModule } from "@ionic/storage";
import { JwtHelper, AuthConfig, AuthHttp } from "angular2-jwt";
import { Http, HttpModule, RequestOptions } from "@angular/http";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';
import { AutoCompleteModule } from 'ionic2-auto-complete';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { GigsPage } from "../pages/gigs/gigs"
import { PostgigPage } from "../pages/postgig/postgig"
import { CreateprofilePage } from "../pages/createprofile/createprofile"
import { ViewOneGigPage } from "../pages/view-one-gig/view-one-gig"
import { ColleagueListPage } from "../pages/colleague-list/colleague-list"
import { MyGigsPage } from '../pages/mygigs/mygigs';





import { HomeService } from "../pages/home/homeService"
import { AuthService } from "../providers/auth-service/auth-service";
import { CompleteTestService } from '../pages/postgig/CompleteTestService';


export function authHttpServiceFactory(http: Http, options: RequestOptions, storage: Storage) {
  const authConfig = new AuthConfig({
    tokenGetter: (() => storage.get('jwt')),
  });
  return new AuthHttp(authConfig, http, options);
}



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage }
];

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    GigsPage,
    PostgigPage,
    CreateprofilePage,
    ColleagueListPage,
    MyGigsPage,
    ViewOneGigPage
    // RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AutoCompleteModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'myapp',
      driverOrder: ['sqlite', 'indexeddb', 'websql']
    }),
    CustomFormsModule
  ], exports: [RouterModule],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    GigsPage,
    PostgigPage,
    ViewOneGigPage,
    CreateprofilePage,
    MyGigsPage,
    ColleagueListPage
    // RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    CompleteTestService,
    HomeService,
    JwtHelper, {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions, Storage]
    }]
})
export class AppModule {
}