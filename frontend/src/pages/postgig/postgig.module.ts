import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostgigPage } from './postgig';

@NgModule({
  declarations: [
    PostgigPage,
  ],
  imports: [
    IonicPageModule.forChild(PostgigPage),
  ],
  exports: [
    PostgigPage
  ]
})
export class PostgigPageModule {}
