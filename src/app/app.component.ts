import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LobbyPage } from '../pages/lobby/lobby';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LobbyPage;

  mainMenu: any;
  yourGroups: any[] = [{
    name: "SoftStack Factory"
  },{
    name: "Softbrew"
  },{
    name: "VR Toby"
  }];
  
  groupMenu: any;
  groupMembers: any[] = [{
      firstName: 'Harold', 
      lastName: 'Gottschalk',
      email: 'hgottschalk@softstackfactory.com',
      phone: undefined,
      role: 'owner'
    },
    { 
      firstName: 'John', 
      lastName: 'Brown',
      email: 'jpbrown@softstackfactory.org',
      phone: undefined,
      role: 'admin'
    },
    { 
      firstName: 'Zach', 
      lastName: 'Smith',
      email: 'zsmith@softstackfactory.org',
      phone: undefined,
      role: 'admin'
    }
  ];
  // groupMenuItems: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.mainMenu = [{
      header: "Your Groups",
      method: this.notDefined,
      content: []
    }, {
      header: "Settings",
      method: this.notDefined,
      content: [{
        title: 'Profile',
        method: undefined,
        content: {}
      },{
        title: 'Tutorial',
        method: undefined,
        content: {}
      },{
        title: 'Feedback',
        method: undefined,
        content: {}
      },{
        title: 'EULA',
        method: undefined,
        content: {}
      },{
        title: 'Sign Out',
        method: undefined,
        content: {}
      }]
    }];
    for(let category of this.mainMenu) {
      if(category.header == "Your Groups") {
        this.yourGroups.forEach(group => {
          category.content.push({
            title: group.name,
            // note: member.role,
            content: group
          })
        })
      }
    }
    
    this.groupMenu = [{
      header: "Admins",
      method: this.notDefined,
      content: []
    }, {
      header: "Settings",
      method: this.notDefined,
      content: [{
        title: 'Manage Group',
        method: undefined,
        content: {}
      },{
        title: 'Pending Invites',
        method: undefined,
        content: {}
      },{
        title: 'Invite Someone',
        method: undefined,
        content: {}
      },{
        title: 'Removed Members',
        method: undefined,
        content: {}
      }]
    }];
    for(let category of this.groupMenu) {
      if(category.header == "Admins") {
        this.groupMembers.forEach(member => {
          category.content.push({
            title: `${member.firstName} ${member.lastName}`,
            note: member.role,
            content: member
          })
        })
      }
    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  notDefined(a) {
    console.log('This method does not do anything, here is what I received: ', a);
  }
}
