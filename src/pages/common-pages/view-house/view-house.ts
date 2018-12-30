import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-view-house',
  templateUrl: 'view-house.html',
})
export class ViewHousePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const role = navParams.get("role");
    console.log(role);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewHousePage');
  }

}
