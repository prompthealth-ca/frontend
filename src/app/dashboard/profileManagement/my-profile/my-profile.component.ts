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
    gender: '',
    email: '',
    phone: '',
    address: '',
    state: '',
    city: '',
    zipcode: '',
    booking: '',
    bookingURL: '',
    profileImage: {},
    latitude: 0,
    longitude: 0,
  };

  public response: any;

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
    const payload = this.profile;
    payload['_id'] = localStorage.getItem('loginID');
    payload.phone.toString();

    let data = JSON.parse(JSON.stringify(this.profile));

      this._sharedService.post(data, 'user/updateProfile').subscribe((res: any) => {
        if (res.statusCode === 200) {
          this.response = res;
          this.toastr.success(res.message);
        } else {
          this.toastr.error(res.message);
  
        }
      }, err => {
        this.toastr.error('There are some errors, please try again after some time !', 'Error');
      });

  }


}
