import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatesPage } from '../dates/dates';
/**
 * Generated class for the ThankyouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-thankyou',
  templateUrl: 'thankyou.html',
})
export class ThankyouPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 pushh(){
    this.navCtrl.push(DatesPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankyouPage');
  }

}
