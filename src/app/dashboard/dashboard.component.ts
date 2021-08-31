import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfileManagementService } from './profileManagement/profile-management.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  get user() { return this._profileService.profile; }

  public menus: MenuItem[] = [];

  constructor(
    private _router: Router,
    private _profileService: ProfileManagementService,
  ) { }

  private subscriptionLoginStatus: Subscription;

  ngOnDestroy() {
    if(this.subscriptionLoginStatus) {
      this.subscriptionLoginStatus.unsubscribe();
    }
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

}

const menuGeneral: MenuItem = {
  id: 'general',
  title: 'Personal Data',
  icon: '',
};

const menuFollow: MenuItem = {
  id: 'follow',
  title: 'My Following',
  icon: '',
};

const menuBook: MenuItem = {
  id: 'book',
  title: 'My Booking',
  icon: '',
};

const menuBookmark: MenuItem = {
  id: 'bookmark',
  title: 'Bookmarks',
  icon: '',
};

const menuNotification: MenuItem = {
  id: 'notification',
  title: 'Notifications',
  icon: 'bell',
};

const menuPassword: MenuItem = {
  id: 'password',
  title: 'Change Password',
  icon: '',
}


interface MenuItem {
  id: string;
  title: string;
  icon: string;
  
}
