import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ScheduleViewPage } from './../schedule-view/schedule-view';
import { DummyData } from './../../providers/dummy-data';

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
  currentSegment = "posts"
  posts: String[]
  drafts: String[]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dummyData: DummyData) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
    this.posts = this.dummyData.getPosts();
    this.drafts = this.dummyData.getDrafts();
  }
  
  scheduleClicked(schedule) {
    this.navCtrl.push(ScheduleViewPage, {
      "schedule": schedule
    });
  }

}
