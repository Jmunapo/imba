import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HouseCoordinatesPage } from './house-coordinates';

@NgModule({
  declarations: [
    HouseCoordinatesPage,
  ],
  imports: [
    IonicPageModule.forChild(HouseCoordinatesPage),
  ],
})
export class HouseCoordinatesPageModule {}
