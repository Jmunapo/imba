import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController } from 'ionic-angular';

import swal from 'sweetalert';

import { Chart } from 'chart.js';
import { AuthenticationProvider } from '../../../providers/authentication/authentication';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  text: string = "Reading room, Wi-Fi, Hi security and ever clean bath & toilet"

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private auth: AuthenticationProvider,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public navParams: NavParams) {
  }

  ionViewWillLoad() {
    
  }

  SweetAlert(){
    swal({
      text: "Edit",
      content: {
        element: "input",
        attributes: {
          placeholder: "Re-enter your password",
          type: "password",
        },
      },
    }).then(v => {
      console.log(v);
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
        
      });
    
      loading.present();
    })
  }

  SweetAlert1(){
    const toast = this.toastCtrl.create({
      message: 'User was added successfully!',
      duration: 3000
    });
    toast.present();
  }

  SweetAlert2(){
    swal({
      icon: "success",
    });
  }

  addHouse(){
    console.log("Adding house");
    let toast = this.toastCtrl.create({
      message: 'Coming Soon',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  addRooms(){
    this.navCtrl.push("AddRoomWelcomePage", {
      role: this.auth.isAuthenticated().role
    })
  }

  viewHouse(houseId: any){
    this.navCtrl.push("HouseDetailsPage", {
       role: this.auth.isAuthenticated().role,
       houseId
    });
  }
  //setRoot(pageOrViewCtrl, params, opts, done)
}
