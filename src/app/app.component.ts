import { Component } from '@angular/core';
import { Platform, App, Events, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Location } from "@angular/common";

import { isCordovaAvailable } from '../common/is-cordova-available';

import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/account/welcome/welcome';

import { timer } from "rxjs/observable/timer";
import { AuthenticationProvider } from '../providers/authentication/authentication';

/**
 * @Packages
 * https://sweetalert2.github.io/
 * Transition https://ionicacademy.com/ionic-native-page-transitions/
 */

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;

  //rootPage:any = LandlordRegisterPage

  showSplash = true;
  showPageSplash = false;

  constructor(platform: Platform, 
    private appCtrl: App,
    private events: Events,
    private toastCtrl: ToastController,
    private auth: AuthenticationProvider,
    private loc: Location,
    statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      events.subscribe("splash", show=>{
        if(show){
          this.showSplash = true;
          timer(500).subscribe(()=>{
            this.showSplash = false;
          })
        }else{
          this.showSplash = false;
        }
      })

      events.subscribe("coming:soon", (show, timeOut = 3000)=>{
        if(show){
          let toast = this.toastCtrl.create({
            message: 'Coming Soon',
            duration: timeOut,
            position: 'middle'
          });
          toast.present();
        }
      })

      if (isCordovaAvailable()){
        splashScreen.hide();
        //Do cordova stuff here!
      }
      timer(3000).subscribe(() => {
        this.showSplash = false
        auth.authenticationState.subscribe(ev=>{
          console.log("Auth changed "+JSON.stringify(ev));
          if('state' in ev && ev.state) {
            this.showSplash = false
            this.appCtrl.getRootNav().setRoot("LandlordTabsPage");
          }else{
            this.loc.replaceState("/");
            this.appCtrl.getRootNav().setRoot(WelcomePage);
          }
        })
      });
    });
  }
}
