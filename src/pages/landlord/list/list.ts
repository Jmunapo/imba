import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Platform } from 'ionic-angular';

import { timer } from "rxjs/observable/timer";
import { House } from '../../../app/models/app.models';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  notAvailable: boolean = false;

  myListings: Array<House>;
 

  constructor(public navCtrl: NavController,
    private events: Events,
    public navParams: NavParams) {
      // timer(5000).subscribe(()=>{
      //   this.listingLoaded = true;
      // })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  addListing(){
    console.log("Add Listing")
    this.events.publish("coming:soon", true);
  }

  viewListing(){
    this.events.publish("coming:soon", true);
  }

}
