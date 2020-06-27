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
  ru
  defaultImage = 'assets/img/man-testimonial.jpg';
  imageBaseURL = 'http://3.12.81.245:3000/public/images/users/';
  earnedPoint = 0
  constructor(
    private _sharedService: SharedService,
  ) { }

  ngOnInit(): void {
  
  this.userInfo = JSON.parse(localStorage.getItem('user'));

  // this. s = localStorage.getItem('roles');
  this.getProfileDetails();
  }
  getProfileDetails() {
    let path = `booking/get-all-review?userId=${this.userInfo._id }&count=10&page=1&search=/`;
    this._sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.rating = res.data.data;
        console.log('this.rating', this.rating);
        this.earnedPoint = Math.max.apply(Math, this.rating.map(function(o) { return o.rating; }))
      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }
}
