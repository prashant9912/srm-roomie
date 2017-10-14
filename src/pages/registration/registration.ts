import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ThankyouPage } from '../thankyou/thankyou';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
 
  thank(){
    this.navCtrl.push(ThankyouPage);
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }


}
