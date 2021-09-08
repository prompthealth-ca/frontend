import { Location } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { skip } from 'rxjs-compat/operator/skip';
import { ProfileManagementService } from 'src/app/dashboard/profileManagement/profile-management.service';
import { smoothHorizontalScrolling, smoothScrollHorizontalTo } from 'src/app/_helpers/smooth-scroll';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  get user() { return this._profileService.profile; }
  get sizeS() { return window && window.innerWidth < 768; }

  public menus: MenuItem[] = [];

  constructor(
    private _router: Router,
    private _location: Location,
    private _route: ActivatedRoute,
    private _profileService: ProfileManagementService,
  ) { }

  private subscriptionLoginStatus: Subscription;
  private subscriptionRouterEvent: Subscription;
  private timerResize: any;

  @ViewChild('dashboardContainer') private dashboardContainer: ElementRef;

  @HostListener('window:resize', ['$event']) windowResize() {
    if(this.timerResize) {
      clearTimeout(this.timerResize);
    }
    this.timerResize = setTimeout(() => {
      this.onResize();
    }, 300);
  } 

  ngOnDestroy() {
    if(this.subscriptionLoginStatus) {
      this.subscriptionLoginStatus.unsubscribe();
    }
    if(this.subscriptionRouterEvent) {
      this.subscriptionRouterEvent.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.onUrlChange(false);
    this.subscriptionRouterEvent = this._router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.onUrlChange();  
      }
    });
  }

  ngOnInit(): void {
    this.observeLoginStatus();
    
  }

  observeLoginStatus() {
    const status = this._profileService.loginStatus;
    if(status == 'loggedIn') {
      this.initMenu();
    }
    this.subscriptionLoginStatus = this._profileService.loginStatusChanged().subscribe(status => {
      if(status == 'notLoggedIn') {
        this._router.navigate(['/community/feed'], {replaceUrl: true});
      } else if(status == 'loggedIn') {
        this.initMenu();
      }
    });
  }

  onUrlChange(smooth = true) {
    const url = this._location.path();
    const regexRoot = /dashboard\/?$/;
    if(this.sizeS) {
      this.changeScrollPosition(url.match(regexRoot) ? 0 : 1,smooth);
    } else if (url.match(regexRoot)) {
      this._router.navigate(['/dashboard/profile'], {replaceUrl: true});
    }
  }

  onResize() {
    const url = this._location.path();
    const regexRoot = /dashboard\/?$/;
    const regexSub = /dashboard\/.+/;
    if(this.sizeS) {
      this.changeScrollPosition(url.match(regexSub) ? 1 : 0, false);
    } else {
      if(url.match(regexRoot)) {
        this._router.navigate(['/dashboard/profile']), {replaceUrl: true};
      }
    }
  }


  initMenu(){
    switch(this.user.role) {
      case 'U' :
        this.menus = [ menuGeneral, menuFollow, menuBook, menuBookmark, menuNotification, menuPassword ];
        break;
      case 'SP':
    }
  }

  changeScrollPosition(i: number, smooth: boolean = true) {
    const el: HTMLDivElement = this.dashboardContainer ? this.dashboardContainer.nativeElement : null;
    if(el) {
      const wEl = el.getBoundingClientRect().width;
      const xCurrent = el.scrollLeft;
      
      if(smooth) {
        smoothScrollHorizontalTo(el, wEl * i);
      } else {
        el.scrollTo({left: wEl * i});
      }
    }
  }
}

const menuGeneral: MenuItem = {
  id: 'profile',
  title: 'Personal Data',
  icon: 'user-square',
};

const menuFollow: MenuItem = {
  id: 'follow',
  title: 'My Following',
  icon: 'verified',
};

const menuBook: MenuItem = {
  id: 'book',
  title: 'My Booking',
  icon: 'inbox-filled',
};

const menuBookmark: MenuItem = {
  id: 'bookmark',
  title: 'Bookmarks',
  icon: 'bookmark',
};

const menuNotification: MenuItem = {
  id: 'notification',
  title: 'Notifications',
  icon: 'bell',
};

const menuPassword: MenuItem = {
  id: 'password',
  title: 'Change Password',
  icon: 'lock-2-opened',
}


interface MenuItem {
  id: string;
  title: string;
  icon: string;
  
}
