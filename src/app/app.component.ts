import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wellness-frontend';
  constructor() {

  navigator.geolocation.getCurrentPosition(position => {
    localStorage.setItem('ipLat', position.coords.latitude.toString());
    localStorage.setItem('ipLong', position.coords.longitude.toString());
  });
}
}
