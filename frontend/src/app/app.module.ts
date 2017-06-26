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

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { GigsPage } from "../pages/gigs/gigs"
import { PostgigPage } from "../pages/postgig/postgig"



import { AuthService } from "../providers/auth-service/auth-service";


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
    PostgigPage
    // RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    PostgigPage
    // RegisterPage
  ],
  providers: [
   StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    JwtHelper, {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions, Storage]
    }]
})
export class AppModule {
}