import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-my-subscription',
  templateUrl: './my-subscription.component.html',
  styleUrls: ['./my-subscription.component.scss']
})
export class MySubscriptionComponent implements OnInit {
  public profile
  constructor(
    private sharedService: SharedService,) { }

  ngOnInit(): void {
    this.getProfileDetails();
  }
  getProfileDetails() {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    let path = `user/get-profile/${userInfo._id}`;
    this.sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.profile = res.data[0].plan;
      } else {
        this.sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this.sharedService.checkAccessToken(err);
    });
  }
}
