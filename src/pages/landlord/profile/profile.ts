import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthenticationProvider } from '../../../providers/authentication/authentication';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController,
    private auth: AuthenticationProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout(){
    //this.appCtrl.getRootNav().setRoot(WelcomePage);
    this.auth.landlordLogout();
  }

  editimage(){
    console.log("Editing Image");
  }
  
  editText(what, val = ""){
    const prompt = this.alertCtrl.create({
      message: `Editing ${what}`,
      inputs: [
        {
          name: 'edit',
          placeholder: 'Enter Text',
          value: val
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            console.log(data);
          }
        }
      ]
    });
    prompt.present();
  }

}
