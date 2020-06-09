import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  public profile;
  listing = [
    {
      title: 'My Profile',
      link: 'my-profile',
      active: true,
    },
    {
      title: 'My Booking',
      link: 'my-booking',
      active: true,
    },
  ];
  uListing = [
    {
      title: 'My Favourite',
      link: 'my-favourites',
      active: true,
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
      if (profile.plan) {
        this.listing.push({
          title: 'My Payment',
          link: 'my-payment',
          active: true,
        });
        this.listing.push({
          title: 'My Subscription',
          link: 'my-subscription',
          active: true,
        });
      } else {
        this.listing.push({
          title: 'My Payment',
          link: 'my-payment',
          active: false,
        });
        this.listing.push({
          title: 'My Subscription',
          link: 'my-subscription',
          active: false,
        });
      }
      if (profile.plan.professionalProfile === true) {
        this.listing.push({
          title: 'Professional Background',
          link: 'my-professional-info',
          active: true,
        });
      } else {
        this.listing.push({
          title: 'Professional Background',
          link: 'my-professional-info',
          active: false,
        });
      }

      this.listing.push({
        title: 'My Affiliate',
        link: 'my-affiliate',
        active: true,
      });
    }
    if(profile.roles === 'U') {
      this.listing.push(...this.uListing);
    }
    if (profile.roles === 'C') {
      if (profile.plan.professionalProfile === true) {
        this.listing.push({
          title: 'Professional Background',
          link: 'my-professional-info',
          active: true,
        });
      } else {
        this.listing.push({
          title: 'Professional Background',
          link: 'my-professional-info',
          active: false,
        });
      }
      if (profile.plan.ListAmenities === true) {
        this.listing.push({
          title: 'My Amenities',
          link: 'my-amenities',
          active: true,
        });
      } else {
        this.listing.push({
          title: 'My Amenities',
          link: 'my-amenities',
          active: false,
        });
      }

      if (profile.plan.ListOfProviders === true) {
        this.listing.push({
          title: 'My Doctors',
          link: 'add-professionals',
          active: true,
        });
      } else {
        this.listing.push({
          title: 'My Doctors',
          link: 'add-professionals',
          active: false,
        });
      }

      if (profile.plan.ListProductsOption === true) {
        this.listing.push({
          title: 'My Products',
          link: 'my-product',
          active: true,
        });
      } else {
        this.listing.push({
          title: 'My Products',
          link: 'my-product',
          active: false,
        });
      }

      if (profile.plan.videoUpload === true) {
        this.listing.push({
          title: 'My Videos',
          link: 'videos-blogs',
          active: true,
        });
      } else {
        this.listing.push({
          title: 'My Videos',
          link: 'videos-blogs',
          active: false,
        });
      }

      if (profile.plan._id) {
        this.listing.push({
          title: 'My Payment',
          link: 'my-payment',
          active: true,
        });
        this.listing.push({
          title: 'My Subscription',
          link: 'my-subscription',
          active: true,
        });
      } else {
        this.listing.push({
          title: 'My Payment',
          link: 'my-payment',
          active: false,
        });
        this.listing.push({
          title: 'My Subscription',
          link: 'my-subscription',
          active: false,
        });
      }


      this.listing.push({
        title: 'My Affiliate',
        link: 'my-affiliate',
        active: true,
      });
    }
    this.listing.push({
      title: 'Review and Rating',
      link: 'reviews-ratings',
      active: true,
    });
  }
  
}
