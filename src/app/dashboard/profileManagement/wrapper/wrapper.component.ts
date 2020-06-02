import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  public profile = {}
  listing = [
    {
      title: 'My Profile',
      link: 'my-profile'
    },
    {
      title: 'My Booking',
      link: 'my-booking'
    },
  ];
  spListing = [
    {
      title: 'My Videos',
      link: 'videos-blogs'
    },
  ];
  uListing = [
    {
      title: 'My Favourite',
      link: 'my-favourites'
    }
  ];
  constructor(
    private _sharedService: SharedService, ) { }

  ngOnInit(): void {
    this.getProfileDetails();
    
  }
  getProfileDetails() {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    let path = `user/get-profile/${userInfo._id }`;
    this._sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.profile = res.data[0];
        console.log('profile', this.profile);
        this.setListing(this.profile);
      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }
  setListing(profile){
    if (profile.roles === 'SP') {
      // this.listing.push(...this.spListing);
      this.listing.push({
        title: 'My Payment',
        link: 'my-payment'
      });
      this.listing.push({
        title: 'My Subscription',
        link: 'my-subscription'
      });
      if(profile.plan_id.professionalProfile) {
        this.listing.push({
          title: 'Professional Background',
          link: 'my-professional-info'
        });
      }
    }
    if(profile.roles === 'C') {
      console.log('profile.roles', profile.roles)
      if(profile.plan_id.ListAmenities) {
        this.listing.push({
          title: 'My Amenities',
          link: 'my-amenities'
        });
      }
      if(profile.plan_id.ListOfProviders) {
        this.listing.push({
          title: 'My Doctors',
          link: 'add-professionals'
        });
      }
      if(profile.plan_id.ListProductsOption) {
        this.listing.push({
          title: 'My Products',
          link: 'my-product'
        });
      }
      if(profile.plan_id.videoUpload) {
        this.listing.push({
          title: 'My Videos',
          link: 'videos-blogs'
        });
      }
      this.listing.push({
        title: 'My Payment',
        link: 'my-payment'
      });
    }
    if(profile.roles === 'U') {
      this.listing.push(...this.uListing);
    }
    this.listing.push(
      {
        title: 'Review and Rating',
        link: 'reviews-ratings'
      })
  }
  
}
