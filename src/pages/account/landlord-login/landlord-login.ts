import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LandlordRegisterPage } from '../landlord-register/landlord-register';
import { AuthenticationProvider } from '../../../providers/authentication/authentication';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-landlord-login',
  templateUrl: 'landlord-login.html',
})
export class LandlordLoginPage {
  

  constructor(public navCtrl: NavController,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    private auth: AuthenticationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandlordLoginPage');
  }

  landlordLogin(){
    console.log("Landlord do login")
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <img width="150px" src="../../assets/loader/loader.svg">
        </div>`,
      duration: 3500
    });
  
    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
      this.auth.landlordLogin({});
      
    });
  
    loading.present();
  }

  passwordRecovery(){
    console.log("To password recovery page")
  }

  termsConditions(){
    console.log("To terms page")
  }

  landlordCreate(){
    this.navCtrl.push(LandlordRegisterPage);
  }

  closeLogin(){
    this.storage.remove("OTS");
    this.navCtrl.pop();

  }

}
