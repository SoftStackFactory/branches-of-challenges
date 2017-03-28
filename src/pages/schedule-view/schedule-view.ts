import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ScheduleView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-schedule-view',
  templateUrl: 'schedule-view.html'
})
export class ScheduleViewPage {
  schedule: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleViewPage');
    this.schedule = this.navParams.schedule;
  }

}
