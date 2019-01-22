import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-add-room-welcome',
  templateUrl: 'add-room-welcome.html',
})
export class AddRoomWelcomePage {

  public progressList: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad(){
    this.progressList = [
      {
        title: "Location",
        icon_pack: "ionicons",
        name: "ios-pin",
        done: true
      },
      {
        title: "Title and Description",
        icon_pack: "ionicons",
        name: "ios-paper",
        done: true
      }
      ,
      {
        title: "Available Rooms",
        icon_pack: "ionicons",
        name: "ios-home",
        done: false
      }
      ,
      {
        title: "Pricing",
        icon_pack: "ionicons",
        name: "logo-usd",
        done: false
      }
      ,
      {
        title: "Amenities",
        icon_pack: "ionicons",
        name: "ios-trophy",
        done: false
      }
      ,
      {
        title: "Availability",
        icon_pack: "ionicons",
        name: "ios-calendar",
        done: false
      }
      ,
      {
        title: "Photos",
        icon_pack: "ionicons",
        name: "ios-photos",
        done: false
      }
      ,
      {
        title: "Preview",
        icon_pack: "ionicons",
        name: "ios-phone-portrait",
        done: false
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRoomWelcomePage');
  }

  beginAdding(){
    this.navCtrl.push("AddRoomsPage");
  }

}
