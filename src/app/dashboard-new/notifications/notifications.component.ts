import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ProfileManagementService } from 'src/app/dashboard/profileManagement/profile-management.service';
import { SocialNotification } from 'src/app/models/notification';
import { IResponseData } from 'src/app/models/response-data';
import { SharedService } from 'src/app/shared/services/shared.service';
import { UniversalService } from 'src/app/shared/services/universal.service';
import { SocialService } from 'src/app/social/social.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  get user() { return this._profileService.profile; }

  get doneInitNotification() { return this._socialService.doneInitNotification; }
  get notifications(): SocialNotification[] { return this._socialService.doneInitNotification ? this._socialService.notifications : []; }

  public isUploading = false;


  constructor(
    private _router: Router,
    private _location: Location,
    private _uService: UniversalService,
    private _profileService: ProfileManagementService,
    private _socialService: SocialService,
    private _sharedService: SharedService,
    private _toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this._uService.setMeta(this._router.url, {
      title: 'Notifications | PromptHealth Community'
    });
  }

  archiveAllNotifications() {
    this.isUploading = true;
    this._sharedService.post(null, 'notification/clear-all').subscribe((res: IResponseData) => {
      this.isUploading = false;
      if(res.statusCode == 200) {
        this._socialService.removeNotificationsAll();
      } else {
        console.log(res.message);
        this._toastr.error('Something went wrong. Please try again');
      }
    }, error => {
      this.isUploading = false;
      console.log(error);
      this._toastr.error('Something went wrong');
    });
  }
}
