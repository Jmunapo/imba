import { Component, ViewChild } from '@angular/core';
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

  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;

  period: string = "monthly";

  text: string = "Reading room, Wi-Fi, Hi security and ever clean bath & toilet"

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private auth: AuthenticationProvider,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
      type: 'line',
      data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
              {
                  label: "Income",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: [65, 59, 80, 81, 56, 55, 40, 77, 78, 49, 68, 100],
                  spanGaps: false,
              },
              {
                label: "Expenses",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(192, 75, 75, 0.4)",
                borderColor: "rgb(192, 79, 75)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgb(192, 79, 75)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgb(192, 79, 75)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [44, 30, 90, 22, 19, 77, 40, 44, 54, 98, 14, 44, 12],
                spanGaps: false,
            }
          ]
      }

  });
  }

  SweetAlert(){
    swal({
      content: {
        element: "input",
        attributes: {
          placeholder: "Re-enter your password",
          type: "password",
        },
      },
    }).then(v => {
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

  viewHouse(houseId: any){
    this.navCtrl.push("ViewHousePage", {
       role: this.auth.isAuthenticated().role,
       houseId
    });
  }
  //setRoot(pageOrViewCtrl, params, opts, done)
}
