import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyGigsPage } from './mygigs';

@NgModule({
  declarations: [
    MyGigsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyGigsPage),
  ],
  exports: [
    MyGigsPage
  ]
})
export class MyGigsPageModule {}
