import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPostedGigPage } from './view-posted-gig';

@NgModule({
  declarations: [
    ViewPostedGigPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewPostedGigPage),
  ],
  exports: [
    ViewPostedGigPage
  ]
})
export class ViewPostedGigPageModule {}
