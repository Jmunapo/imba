import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { WelcomePage } from '../account/welcome/welcome';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
    private auth: AuthenticationProvider,
    public appCtrl: App) {

  }

  logout(){
    //this.appCtrl.getRootNav().setRoot(WelcomePage);
    this.auth.landlordLogout();
  }

}
