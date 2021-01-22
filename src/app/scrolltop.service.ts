
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, ActivationStart } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class ScrollTopService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router) {
  }

  private isInitial: boolean = true; 

  setScrollTop() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event: NavigationEnd) => {
        if(event instanceof ActivationStart){ this.isInitial = false; }
        
        if(event instanceof NavigationEnd && event.url.match(/#addon/)){
          var timer = this.isInitial? 1000 : 300;
          var el = document.querySelector('#addon');
          
          setTimeout(()=>{
            window.scroll(0, el.getBoundingClientRect().top - 100)
          }, timer)

        }
        else{ window.scroll(0, 0); }
      });
    }
  }
}
