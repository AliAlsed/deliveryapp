import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { OrdersPage } from '../orders/orders';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email ="";
  password ="";
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth:AuthProvider) {
  }

  ionViewDidLoad() {
  }

  signin(){
    this.auth.login(this.email,this.password).then((res)=>{
      console.dir(res);
      this.navCtrl.setRoot(OrdersPage);
    },(err)=>{
      console.dir(err);
    });
  }

}
