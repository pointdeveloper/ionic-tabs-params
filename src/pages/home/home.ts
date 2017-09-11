import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public data:DataProvider) {
  }
  goToAbout() {
    this.data.paramData = "data tobe passed";
    this.navCtrl.parent.select(1);
  }
}
