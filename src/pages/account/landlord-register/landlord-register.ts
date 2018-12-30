import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { timer } from "rxjs/observable/timer";
import { AuthenticationProvider } from '../../../providers/authentication/authentication';

@Component({
  selector: 'page-landlord-register',
  templateUrl: 'landlord-register.html',
})
export class LandlordRegisterPage {

  //welcome: boolean = false;

  constructor(public navCtrl: NavController, 
    public loadingCtrl: LoadingController,
    private auth: AuthenticationProvider) {
    //timer(3500).subscribe(()=> this.welcome = true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandlordRegisterPage');
  }

  landlordCreatAcc(){
    console.log("Creating account");
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <img width="150px" src="../../assets/loader/loader.svg">
        </div>`,
      duration: 5000
    });
  
    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
      this.auth.landlordLogin({});
      
    });
  
    loading.present();
  }

  closeCreate(){
    this.navCtrl.pop();
  }

}
