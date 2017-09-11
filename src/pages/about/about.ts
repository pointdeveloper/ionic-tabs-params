import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public localData: any;
  constructor(public navCtrl: NavController,public data:DataProvider) {
    this.localData = this.data.paramData;
  }
}
