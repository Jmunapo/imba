import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Platform } from 'ionic-angular';

import { timer } from "rxjs/observable/timer";

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  //https://magicmockups.com/media/screen/guest/96/7503dd4c83a14580a6ec658c4f660785_10_1600.jpg
  //https://material.io/tools/color/#!/?view.left=0&view.right=1&primary.color=b22b1c&secondary.color=bdbdbd&primary.text.color=d8dbcd&secondary.text.color=1c1910

  notAvailable: boolean = false;

  newsItems = [
    {title: 'Lorem ipsum dolor sit amet', text: 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'},
    {title: 'Lorem ipsum dolor sit amet', text: 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'},
    {title: 'Lorem ipsum dolor sit amet', text: 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'},
    {title: 'Lorem ipsum dolor sit amet', text: 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'}
  ];

  scrnWidth: number;
 

  constructor(public navCtrl: NavController,
    public plt: Platform,
    private events: Events,
    public navParams: NavParams) {
      this.scrnWidth = plt.width();

      console.log(this.scrnWidth);
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
