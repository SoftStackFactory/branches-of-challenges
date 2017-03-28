import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Our Pages
import { LobbyPage } from '../pages/lobby/lobby';
import { ScheduleViewPage } from '../pages/schedule-view/schedule-view';

// Our Providers
import { DummyData } from './../../providers/dummy-data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

let injections = [
  MyApp,
  LobbyPage,
  ScheduleViewPage
]

@NgModule({
  declarations: injections,
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //our providers
    DummyData
  ]
})
export class AppModule {}
