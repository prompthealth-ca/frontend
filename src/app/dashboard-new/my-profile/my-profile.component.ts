import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProfileManagementService } from 'src/app/dashboard/profileManagement/profile-management.service';
import { Profile } from 'src/app/models/profile';
import { IUserDetail } from 'src/app/models/user-detail';
import { SharedService } from 'src/app/shared/services/shared.service';

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
    private _sharedService: SharedService,
    private _toastr: ToastrService,
    private _changeDetector: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.user = this._profileService.profile;
  }

  onSubmit(data: IUserDetail) {
    this.isUploading = true;
    this._sharedService.post(data, 'user/updateProfile').subscribe((res: any) => {
      this.isUploading = false;
      if (res.statusCode === 200) {
        this._toastr.success('Updated successfully');
        this._profileService.update(data);
      } else {
        this._toastr.error(res.message);
      }
    }, error => {
      console.log(error);
      this.isUploading = false;
      this._toastr.error('Something went wrong. Please try again');
    }, () => {
      this._changeDetector.detectChanges();
    });
  }
}
