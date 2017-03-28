import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Lobby page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html'
})
export class LobbyPage {
  currentSegment = "drafts"
  posts: String[] = [
    "2017-03-22T23:55:42.477Z",
    "2017-03-23T23:55:42.477Z",
    "2017-03-24T23:55:42.477Z",
    "2017-03-25T23:55:42.477Z",
    "2017-03-26T23:55:42.477Z",
    "2017-03-27T23:55:42.477Z"
  ]
  drafts: String[] = [
    "2017-03-28T23:55:42.477Z",
    "2017-03-29T23:55:42.477Z",
    "2017-03-30T23:55:42.477Z",
    "2017-03-31T23:55:42.477Z"
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }

}
