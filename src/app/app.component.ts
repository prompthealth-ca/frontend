import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wellness-frontend';
  constructor() {

    console.log('App component', navigator.geolocation)

    // navigator.geolocation.getCurrentPosition(position => {
    //   console.log('App component', position)
    
    //   localStorage.setItem('ipLat', position.coords.latitude.toString());
    //   localStorage.setItem('ipLong', position.coords.longitude.toString());
    // },
    // (err) => {
    //   console.log('err', err);
    // }, {enableHighAccuracy: true,maximumAge:60000, timeout: 10000});
}

ngOnInit() {
  this.getPosition()
}

getPosition(): Promise<any> {
  return new Promise((resolve, reject) => {

    navigator.geolocation.getCurrentPosition(resp => {
      resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });

    
      localStorage.setItem('ipLat', resp.coords.latitude.toString());
      localStorage.setItem('ipLong', resp.coords.longitude.toString());
    },
    err => {
      reject(err);
      console.log('App err', err)
    }, {enableHighAccuracy: true, maximumAge:0, timeout: 1000000});
  });

}
}
