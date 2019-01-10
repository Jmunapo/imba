import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-house-details',
  templateUrl: 'house-details.html',
})
export class HouseDetailsPage {

  images = ['1.jpg', '2.jpeg', '3.jpeg', '4.jpeg'];
  curr: string = "details"

  roomSelected: Array<boolean> = [false, false];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cf: ChangeDetectorRef) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HouseDetailsPage');
  }

  segmentChanged(what: boolean = false, index: number = 0)
  {
    this.cf.detectChanges();

    if(what){
      this.roomSelected = [false, false];
      this.roomSelected[index] = what;
    }
  }

}
