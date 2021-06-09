import { Component, OnInit } from '@angular/core';
import { ActivationStart, NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HeaderStatusService } from './shared/services/header-status.service';
import { UniversalService } from './shared/services/universal.service';


declare let gtag: Function;
declare let fbq: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private _uService: UniversalService,
    private _router: Router,
    private _headerService: HeaderStatusService,
  ) {}

  private isInitial = true;
  private disableAnalytics: boolean = environment.config.disableAnalytics;

  async ngOnInit() {
    if(!this._uService.isServer){
      this._router.events.subscribe((event: NavigationEnd) => {
        this.onRouteChanged(event);
      });
      
      try { await this.getPosition(); }
      catch(error){ console.log(error); }  
    }
  }

  onRouteChanged(event: NavigationEnd | ActivationStart) {
    if (event instanceof ActivationStart) { 
      this.isInitial = false; 
      this._headerService.showShadow();
    }

    if (event instanceof NavigationEnd) {
      this._headerService.showHeader();

      /** google analytics */
      if(!this.disableAnalytics){
        gtag('config', 'UA-192757039-1',{
          'page_path': event.urlAfterRedirects
        });
        fbq('track', 'PageView');  
      }

      if(event.url != '/') {
        setTimeout(()=> {
          this._headerService.showShadow();
        }, 0);
      }

      if (event.url.match(/#addon/)) {
        const timer = this.isInitial ? 1000 : 400;
        setTimeout(() => {
          const el = document.querySelector('#addon');
          window.scrollBy(0, el.getBoundingClientRect().top - 100);
        }, timer);
      } else { window.scroll(0, 0); }
    }
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
      }, {enableHighAccuracy: true, maximumAge:0, timeout: 1000000});
    });

  }
}
