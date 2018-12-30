import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import swal from 'sweetalert';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  SweetAlert(){
    swal("Good job!", "You clicked the button!", "info");
  }
 

}
