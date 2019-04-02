import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from '@ionic-native/google-maps';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') element: any;
  constructor(public navCtrl: NavController,public googleMaps: GoogleMaps,
    public plt: Platform, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log(this.navParams.get('lat'));
    console.log(this.navParams.get('long'));
  }
  ngAfterViewInit() {
    this.plt.ready().then(() => {
      this.initMap();
    });
  }
  initMap() {

    let map: GoogleMap = this.googleMaps.create(this.element.nativeElement);

    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {

      let coordinates: LatLng = new LatLng(this.navParams.get('lat'), this.navParams.get('long'));

      let position = {
        target: coordinates,
        zoom: 17
      };

      map.animateCamera(position);

      let markerOptions: MarkerOptions = {
        position: coordinates,
        title: 'delivery'
      };

      const marker = map.addMarker(markerOptions)
        .then((marker: Marker) => {
          marker.showInfoWindow();
      });
    })
  }

}
