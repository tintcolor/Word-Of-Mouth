import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {IonicStorageModule,Storage} from '@ionic/storage'


@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    IonicStorageModule.forRoot()
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule {}
