import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from '@angular/fire/auth';
import { OrdersPage } from '../pages/orders/orders';
import { QrreaderPage } from '../pages/qrreader/qrreader';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  pages: Array<{title: string, component: any}>;
  @ViewChild(Nav) nav: Nav;
  constructor(afAuth: AngularFireAuth,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.pages = [
        { title: 'Order', component: OrdersPage },
        { title: 'QR Coder', component: QrreaderPage },

      ];
      const authObserver = afAuth.authState.subscribe(user => {
        if (user) {
          this.rootPage = OrdersPage;
          authObserver.unsubscribe();
        } else {
          this.rootPage = 'LoginPage';
          authObserver.unsubscribe();
        }
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(p){
    this.nav.setRoot(p.component);
  }
}

