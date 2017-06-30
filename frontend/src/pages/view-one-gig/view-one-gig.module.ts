import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewOneGigPage } from './view-one-gig';

@NgModule({
  declarations: [
    ViewOneGigPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewOneGigPage),
  ],
  exports: [
    ViewOneGigPage
  ]
})
export class ViewOneGigPageModule {}
