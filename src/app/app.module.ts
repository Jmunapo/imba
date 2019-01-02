import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/account/welcome/welcome';
import { LandlordLoginPage } from '../pages/account/landlord-login/landlord-login';
import { LandlordRegisterPage } from '../pages/account/landlord-register/landlord-register';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { IonicStorageModule } from "@ionic/storage";
import { ChatServiceProvider } from '../providers/chat-service/chat-service';
import { EmojiProvider } from '../providers/emoji/emoji';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    LandlordLoginPage,
    LandlordRegisterPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true,
      preloadModules: true
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    LandlordLoginPage,
    LandlordRegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider,
    ChatServiceProvider,
    EmojiProvider
  ]
})
export class AppModule {}
