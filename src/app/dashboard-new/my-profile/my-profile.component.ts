import { Component, OnInit } from '@angular/core';
import { ProfileManagementService } from 'src/app/dashboard/profileManagement/profile-management.service';
import { Profile } from 'src/app/models/profile';
import { IUserDetail } from 'src/app/models/user-detail';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  public user: Profile;
  public isUploading = false;



  constructor(
    private _profileService: ProfileManagementService,
  ) { }

  ngOnInit(): void {
    this.user = this._profileService.profile;
    console.log(this.user.isU)
  }

  onSubmit(e) {

  }
}
