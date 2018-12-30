import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';
import { LandlordLoginPage } from '../landlord-login/landlord-login';
import { Storage } from '@ionic/storage';
import { AuthenticationProvider } from '../../../providers/authentication/authentication';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage,
    private events: Events,
    private auth: AuthenticationProvider,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.events.publish("splash", true);
    console.log('ionViewDidLoad WelcomePage');
    this.storage.get("OTS").then(val => {
      if(val){
        try {
          this[val]();
        } catch (error) {
          console.error("Invalid function");
        }
      }
    })
  }

  iamStudent(){
    this.otsSelect("iamStudent");
    //this.navCtrl.setRoot(TabsPage);
  }

  iamLandlord(){
    this.otsSelect("iamLandlord");
    this.navCtrl.push(LandlordLoginPage);
  }

  openTerms(){
    const modal = this.modalCtrl.create("TermsConditionsPage", {
      open: "Terms of Use"
    });
    modal.present();
  }

  openPrivacy(){
    const modal = this.modalCtrl.create("TermsConditionsPage", {
      open: "Privacy Policy"
    });
    modal.present();
  }

  otsSelect(role){
    this.storage.set("OTS", role).then(()=> this.auth.checkToken(role));
  }

}
