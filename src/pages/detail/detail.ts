import { Component } from '@angular/core';
import {  NavController, NavParams, AlertController } from 'ionic-angular';
import { MapPage } from '../map/map';
import { OrdersProvider } from '../../providers/orders/orders';
import { OrdersPage } from '../orders/orders';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  data:any=[];

  allorder:any=[];
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public order:OrdersProvider, public alertController:AlertController) {
  }

  ionViewDidLoad() {
   console.log(this.navParams.get('order'));
   this.data = this.navParams.get('order');
   this.data.allorder.forEach(element => {
     this.allorder.push(element);
   });
   console.log(this.allorder);
  }
  loc(lat,long){
    console.log(lat,long);
    this.navCtrl.push(MapPage,{'lat':lat,'long':long});
  }
  rev(){
    this.order.remove(this.navParams.get('index'));
    this.alertPresent('Success', 'removed successfully');
    this.navCtrl.setRoot(OrdersPage);
  }

  alertPresent(header , message){
    const alert =  this.alertController.create({
      title: header,
      message:  message,
      buttons: ['OK']
    });
    alert.present();
  }

}
