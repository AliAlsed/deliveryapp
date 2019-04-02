import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the OrdersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrdersProvider {
  fireorder = firebase.database().ref(`orders/delivery/${this.auth.auth.currentUser.uid}/order`);

  constructor(public auth:AngularFireAuth) {
    console.log('Hello OrdersProvider Provider');
  }
  getOrders():firebase.database.Reference{
    return this.fireorder;
  }
  remove(index: any){
     this.fireorder.child(`${index}`).remove();
  }

}
