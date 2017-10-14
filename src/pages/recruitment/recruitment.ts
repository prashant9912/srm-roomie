import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
/**
 * Generated class for the RecruitmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recruitment',
  templateUrl: 'recruitment.html',
})
export class RecruitmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushh(){
    this.navCtrl.push(RegistrationPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecruitmentPage');
  }

}
