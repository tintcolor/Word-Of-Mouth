import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColleagueListPage } from './colleague-list';

@NgModule({
  declarations: [
    ColleagueListPage,
  ],
  imports: [
    IonicPageModule.forChild(ColleagueListPage),
  ],
  exports: [
    ColleagueListPage
  ]
})
export class ColleagueListPageModule {}
