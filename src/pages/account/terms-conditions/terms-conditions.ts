import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the TermsConditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms-conditions',
  templateUrl: 'terms-conditions.html',
})
export class TermsConditionsPage {
  page_name: string;
  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams) {
    let page = navParams.get("open");
    if(page)
      this.page_name = page;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsConditionsPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
