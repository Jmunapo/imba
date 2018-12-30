import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-landlord-tabs',
  templateUrl: 'landlord-tabs.html'
})
export class LandlordTabsPage {

  dashboardRoot = 'DashboardPage'
  listRoot = 'ListPage'
  inboxRoot = 'InboxPage'
  profileRoot = 'ProfilePage'


  constructor(public navCtrl: NavController) {}

}
