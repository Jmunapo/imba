import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Navbar, LoadingController } from 'ionic-angular';

import { timer } from "rxjs/observable/timer";
import { Platform } from 'ionic-angular/platform/platform';

@IonicPage()
@Component({
  selector: 'page-add-rooms',
  templateUrl: 'add-rooms.html',
})
export class AddRoomsPage {

  @ViewChild(Slides) slides: Slides;
  @ViewChild('navbar') navBar: Navbar;

  public unregisterBackButtonAction: any;

  step: number = 1;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private platform: Platform,
    public navParams: NavParams) {
      
  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    this.initializeBackButtonCustomHandler();
    console.log('ionViewDidLoad AddRoomsPage');
  }

  ionViewWillLeave() {
    // Unregister the custom back button action for this page
    //this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }

initializeBackButtonCustomHandler(): void {
  // this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function(event){
  //     console.log('Prevent Back Button Page Change');
  //     this.backButtonClick()
  // }, 101);
  this.navBar.backButtonClick = () => {
    this.backButtonClick();
  }
}  

  backButtonClick() {
    if(this.step > 1){
      this.slides.lockSwipes(false);
      this.slides.slidePrev(200)
      this.slides.lockSwipes(true);
    }else{
      this.navCtrl.pop();
    }
}

  ionViewDidEnter() {

  }

  getItems(e){
    console.log(e);
  }

  nextStep(){
    if(this.step < 5){
      this.slides.lockSwipes(false);
      this.slides.slideNext(200);
      this.slides.lockSwipes(true);
    }else{
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
        this.navCtrl.pop();
      });
    
      loading.present();
    }
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    let prevIndex = this.slides.getPreviousIndex();
    (currentIndex > prevIndex)? this.step++  : this.step--;
  }



}
