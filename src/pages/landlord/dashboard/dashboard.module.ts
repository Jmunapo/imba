import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';

import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    StarRatingModule,
    IonicPageModule.forChild(DashboardPage),
  ],
})
export class DashboardPageModule {}
