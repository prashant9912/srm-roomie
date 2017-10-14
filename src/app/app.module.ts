import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/registration/registration';
import { ThankyouPage } from '../pages/thankyou/thankyou';
import { MainPage } from '../pages/main/main';

import { AboutPage } from '../pages/about/about';
import { DatesPage } from '../pages/dates/dates';
import { RecruitmentPage } from '../pages/recruitment/recruitment';
import { DomainsPage } from '../pages/domains/domains';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
    ThankyouPage,MainPage,
    AboutPage,
    DatesPage,
    RecruitmentPage,
    DomainsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrationPage,
    ThankyouPage,
    MainPage,
    AboutPage,
    DatesPage,
    RecruitmentPage,
    DomainsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
