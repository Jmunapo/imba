import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HouseDetailsPage } from './house-details';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { IonHeaderScrollOpacityModule } from 'ion-header-scroll-opacity';
import { StarRatingModule } from 'ionic3-star-rating';


@NgModule({
  declarations: [
    HouseDetailsPage
  ],
  imports: [
    IonicImageViewerModule,
    StarRatingModule,
    IonHeaderScrollOpacityModule,
    IonicPageModule.forChild(HouseDetailsPage),
  ],
})
export class HouseDetailsPageModule {}
