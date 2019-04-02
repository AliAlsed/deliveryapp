import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthProvider } from '../providers/auth/auth';
import { OrdersPageModule } from '../pages/orders/orders.module';
import { GoogleMaps } from '@ionic-native/google-maps';
import { OrdersProvider } from '../providers/orders/orders';
import { DetailPage } from '../pages/detail/detail';
import { MapPage } from '../pages/map/map';
import { QrreaderPage } from '../pages/qrreader/qrreader';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


export const firebaseConfig = {
  apiKey: "AIzaSyBS9wIrhctcpabbJ_fQbWnL3bCH8W0_ZSg",
  authDomain: "fstorage-3cc1c.firebaseapp.com",
  databaseURL: "https://fstorage-3cc1c.firebaseio.com",
  projectId: "fstorage-3cc1c",
  storageBucket: "fstorage-3cc1c.appspot.com",
  messagingSenderId: "661870728831"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    DetailPage,
    QrreaderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    OrdersPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QrreaderPage,
    DetailPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    AngularFireDatabase,
    OrdersProvider,
    BarcodeScanner,
    
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
  ]
})
export class AppModule {}
