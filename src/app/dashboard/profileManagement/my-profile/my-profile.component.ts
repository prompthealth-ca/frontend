import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  editFields = false;
  userInfo;

  public profile = {
    firstName: '',
    lastName: '',
    email: '',
    designation: '',
    mobile: null,
    lat: null,
    lng: null,
    location: '',
  };

  constructor(
    private toastr: ToastrService,
    private _sharedService: SharedService, ) { }

  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem('user'));
    this.getProfileDetails();
  }

  getProfileDetails() {
    let path = `user/get-profile/${this.userInfo._id }`;

    console.log('path', path);

    this._sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        console.log('res', res.data);
        this.profile = res.data[0];
      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }


  save() {
    let data = JSON.parse(JSON.stringify(this.profile));

      this._sharedService.editProfile(data).subscribe((res: any) => {
        if (res.success) {
          this.toastr.success(res.data.message);
        } else {
          this.toastr.error(res.error.message, 'Error');
        }
      }, err => {
        this.toastr.error('There are some errors, please try again after some time !', 'Error');
      });

  }


}
