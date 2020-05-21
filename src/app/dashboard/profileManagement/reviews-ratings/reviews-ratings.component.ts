import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../../shared/services/shared.service';
@Component({
  selector: 'app-reviews-ratings',
  templateUrl: './reviews-ratings.component.html',
  styleUrls: ['./reviews-ratings.component.scss']
})
export class ReviewsRatingsComponent implements OnInit {
  userInfo;
  rating;
  constructor(
    private _sharedService: SharedService,
  ) { }

  ngOnInit(): void {
  
  this.userInfo = JSON.parse(localStorage.getItem('user'));

  // this. s = localStorage.getItem('roles');
  this.getProfileDetails();
  }
  getProfileDetails() {
    let path = `user/get-profile/${this.userInfo._id }`;
    this._sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.rating = res.data[0];
        console.log('this.rating', this.rating);
      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }
}
