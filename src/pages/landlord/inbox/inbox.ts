import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import swal from 'sweetalert';

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

  sayHiMom(){
    swal("", "success", "success");
  }

}
