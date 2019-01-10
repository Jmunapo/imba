import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRoomWelcomePage } from './add-room-welcome';

@NgModule({
  declarations: [
    AddRoomWelcomePage,
  ],
  imports: [
    IonicPageModule.forChild(AddRoomWelcomePage),
  ],
})
export class AddRoomWelcomePageModule {}
