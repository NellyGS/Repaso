import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-favs',
  templateUrl: 'favs.html',
})
export class FavsPage {
  product= '';
  carrito= [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = this.navParams.get ('casa');
    this.carrito = this.navParams.get ('carrito')
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavsPage');
  }
 
}
