import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompletedPostPage } from './completed-post';

@NgModule({
  declarations: [
    CompletedPostPage,
  ],
  imports: [
    IonicPageModule.forChild(CompletedPostPage),
  ],
  exports: [
    CompletedPostPage
  ]
})
export class CompletedPostPageModule {}
