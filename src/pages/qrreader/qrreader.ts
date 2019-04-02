import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

/**
 * Generated class for the QrreaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-qrreader',
  templateUrl: 'qrreader.html',
})
export class QrreaderPage {
  scanData : {};
  options :BarcodeScannerOptions;
  constructor(private ptf:Platform,public navCtrl: NavController, public navParams: NavParams,
    private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrreaderPage');
  }
  async read(){
    return await this.ptf.ready().then(()=>{
      this.options = {
        prompt : "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {

        console.log(barcodeData);
        this.scanData = barcodeData;
    }, (err) => {
        console.log("Error occured : " + err);
    });   
    });
   
  }
}
