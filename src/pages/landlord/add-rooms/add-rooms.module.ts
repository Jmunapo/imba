import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRoomsPage } from './add-rooms';

@NgModule({
  declarations: [
    AddRoomsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddRoomsPage),
  ],
})
export class AddRoomsPageModule {}
