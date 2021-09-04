import { Component, OnInit } from '@angular/core';
import { ProfileManagementService } from 'src/app/dashboard/profileManagement/profile-management.service';

@Component({
  selector: 'app-my-follow',
  templateUrl: './my-follow.component.html',
  styleUrls: ['./my-follow.component.scss']
})
export class MyFollowComponent implements OnInit {

  get user() { return this._profileService.profile; }

  constructor(
    private _profileService: ProfileManagementService,
  ) { }

  ngOnInit(): void {
  }

}
