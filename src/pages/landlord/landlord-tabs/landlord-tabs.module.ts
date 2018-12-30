import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandlordTabsPage } from './landlord-tabs';

@NgModule({
  declarations: [
    LandlordTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(LandlordTabsPage),
  ]
})
export class LandlordTabsPageModule {}
