import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import swal from 'sweetalert';

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  toUser : {toUserId: string, toUserName: string};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'Joemags'
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

}
