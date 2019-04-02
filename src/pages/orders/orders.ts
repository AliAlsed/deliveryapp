import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Platform, List } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import firebase, { auth } from 'firebase';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";
import { OrdersProvider } from "../../providers/orders/orders";
import { DetailPage } from "../detail/detail";


@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

  list =[];
  result:any;
  constructor(public auth:AngularFireAuth,public googleMaps: GoogleMaps, public plt: Platform,
    public nav: NavController, public order:OrdersProvider) {

}

  ionViewDidLoad() {
    this.list=[];
   this.order.getOrders().on("value",res=>{
     console.log(res.val());
     this.list.push(res.val());
     this.result=[];
     this.list[0].forEach((val)=>{
       this.result.push(val);

     })
     this.result[0].allorder.forEach(element => {
       console.log(element.name);
     });
   })
  }
  gotoDetail(i,j){
    this.nav.push(DetailPage,{'order':i,'index':j});
    console.log(j);
  }

  
}
