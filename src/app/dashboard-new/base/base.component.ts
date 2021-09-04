import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfileManagementService } from 'src/app/dashboard/profileManagement/profile-management.service';
import { smoothHorizontalScrolling } from 'src/app/_helpers/smooth-scroll';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  get user() { return this._profileService.profile; }

  public menus: MenuItem[] = [];

  constructor(
    private _router: Router,
    private _location: Location,
    private _route: ActivatedRoute,
    private _profileService: ProfileManagementService,
  ) { }

  private subscriptionLoginStatus: Subscription;

  @ViewChild('dashboardContainer') private dashboardContainer: ElementRef;

  ngOnDestroy() {
    if(this.subscriptionLoginStatus) {
      this.subscriptionLoginStatus.unsubscribe();
    }
  }

  ngAfterViewInit() {
    if (this._location.path().match(/dashboard\/.+/)) {
      this.changeScrollPosition(1, 'auto');
    }
    this._location.onUrlChange((url) => {
      this.changeScrollPosition( url.match(/dashboard\/.+/) ? 1 : 0);
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

  initMenu(){
    switch(this.user.role) {
      case 'U' :
        this.menus = [ menuGeneral, menuFollow, menuBook, menuBookmark, menuNotification, menuPassword ];
        break;
      case 'SP':
    }
  }

  changeScrollPosition(i: number, behavior = 'smooth') {
    const el: HTMLDivElement = this.dashboardContainer ? this.dashboardContainer.nativeElement : null;
    if(el) {
      const wEl = el.getBoundingClientRect().width;
      const xCurrent = el.scrollLeft;
      
      if(behavior == 'smooth') {
        smoothHorizontalScrolling(el, 200, (wEl * i - xCurrent), xCurrent);
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
