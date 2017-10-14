import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { DatesPage } from '../dates/dates';
import { RecruitmentPage } from '../recruitment/recruitment';
import { DomainsPage } from '../domains/domains';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  domain(){
    this.navCtrl.push(DomainsPage);
  }
  dates(){
    this.navCtrl.push(DatesPage);
  }
  rec(){
    this.navCtrl.push(RecruitmentPage);
  }
  about(){
    this.navCtrl.push(AboutPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
