import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GigsPage } from './gigs';

@NgModule({
  declarations: [
    GigsPage,
  ],
  imports: [
    IonicPageModule.forChild(GigsPage),
  ],
  exports: [
    GigsPage
  ]
})
export class GigsPageModule {}
