import { Component } from '@angular/core';
import { JwtHelper, AuthHttp } from "angular2-jwt";
import { GigsPage } from '../gigs/gigs';
import { FindFriendsPage } from '../find-friends/find-friends';
import { PostgigPage } from '../postgig/postgig';
import { SERVER_URL } from "../../environment/config"
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  userID: any;
  friends = {};
  postGig={};
  tab1Root = HomePage;
  tab2Root = GigsPage;
  tab3Root = FindFriendsPage;
  tab4Root = PostgigPage;



  constructor(private readonly authHttp: AuthHttp) {
    this.authHttp.get(SERVER_URL + `user`).subscribe(
      data => {
        this.userID = data.json().userID;

        this.friends = {
          id: this.userID
        };

         this.postGig = {
          id: this.userID
        };

     
      },
      err => console.log(err)
    );

   console.log(this.userID);

  }

  ionViewDidLoad() {

  }


}
