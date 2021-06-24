
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, ActivationStart } from '@angular/router';
import { isPlatformBrowser, Location } from '@angular/common';
import { environment } from 'src/environments/environment';

declare let gtag: Function;
declare let fbq: Function;

@Injectable()
export class ScrollTopService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _location: Location,
    private router: Router) {
  }

  private isInitial = true;
  private disableAnalytics: boolean = environment.config.disableAnalytics;

  setScrollTop() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event: NavigationEnd) => {
        if (event instanceof ActivationStart) { this.isInitial = false; }


        if (event instanceof NavigationEnd) {

          /** google analytics */
          if(!this.disableAnalytics){
            gtag('config', 'UA-192757039-1',{
              'page_path': event.urlAfterRedirects
            });

            /** fb pixel */
            if(!window.location.href.match(/keyword/)){
              /** remove queryparams becuase it may contain sensitive data */
              /** after sending url to FB pixel, put queryparams back to url */
              const path = this._location.path();
              const pathNoParam = path.replace(/\?.*$/, '');
              
              this._location.replaceState(pathNoParam);
              fbq('track', 'PageView');  

              this._location.replaceState(path);
            } else {
              fbq('track', 'PageView');  
            }
          }


          if (event.url.match(/#addon/)) {
            const timer = this.isInitial ? 1000 : 400;
            setTimeout(() => {
              const el = document.querySelector('#addon');
              window.scrollBy(0, el.getBoundingClientRect().top - 100);
            }, timer);
          } else { window.scroll(0, 0); }
        }
      });
    }
  }
}
