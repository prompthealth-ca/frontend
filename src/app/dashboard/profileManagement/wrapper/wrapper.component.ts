import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';
import { ProfileManagementService } from '../profile-management.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  public profile;
  public isPremium: boolean = false; /** if the user is vip or subscribe plans, true. */

  userInfo;
  listing = [
    {
      title: 'Profile',
      link: 'my-profile',
      active: true,
    },
    {
      title: 'Password',
      link: 'my-password',
      active: true
    }
  ];
  uListing = [
    {
      title: 'Booking',
      link: 'my-booking',
      active: true,
    },
    {
      title: 'Favourite',
      link: 'my-favourites',
      active: true,
    },
    {
      title: 'Review and Rating',
      link: 'reviews-ratings',
      active: true,
    }
  ];
  cPlan: [];
  spPlan: [];
  constructor(
    private _sharedService: SharedService,
    private _managementService: ProfileManagementService,
  ) { }

  ngOnDestroy(){ this._managementService.destroyProfileDetail(); }

  ngOnInit(): void {
    this.getProfileDetails();
    // this.getSubscriptionPlan('user/get-plans');
  }
  getProfileDetails() {
    this.userInfo = JSON.parse(localStorage.getItem('user'));
    const path = `user/get-profile/${this.userInfo._id}`;
    this._sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.profile = res.data[0];
        this.setUserPremiumStatus();
        if (this.profile) { this.setListing(this.profile); }
      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }

  setUserPremiumStatus(){
    let isPremium = false;
    if(this.profile){
      if(this.profile.isVipAffiliateUser){ isPremium = true; }
      else if(this.profile.plan && this.profile.plan.name.toLowerCase() !== 'basic'){ isPremium = true; }  
    }
    this.isPremium = isPremium;
  }

  getSubscriptionPlan(path) {
    this._sharedService.loader('show');
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      this._sharedService.loader('hide');

      if (res.statusCode === 200) {
        res.data.forEach(element => {
          if (element.userType.length === 1 && element.userType[0] === 'C') {
            this.cPlan = element;
          }
          if (element.userType.length === 1 && element.userType[0] === 'SP') {
            this.spPlan = element;
          }
        });
      } else {
        // this._commanService.checkAccessToken(res.error);
      }
    }, err => {
      this._sharedService.loader('hide');

    });
  }

  addMenuItem(title: string, isActive: boolean){
    switch(title){
      case 'social': this.listing.push({title: 'Social', link: 'my-social', active: isActive}); break;
    }
  }

  setListing(profile) {
    if (profile) {
      if(profile.roles !== 'U'){
        this.listing.push(
          {
            title: 'Service',
            link: 'my-service',
            active: true,
          }
        );
      }

      if (profile.isVipAffiliateUser) {
        if (profile.roles === 'SP') {
          this.addMenuItem('social', true); 

          this.listing.push({
            title: 'Subscription',
            link: 'my-subscription',
            active: true,
          });
          this.listing.push({
            title: 'Booking',
            link: 'my-booking',
            active: true,
          });
          this.listing.push({
            title: 'Payment',
            link: 'my-payment',
            active: true,
          });
          this.listing.push({
            title: 'Videos',
            link: 'videos-blogs',
            active: true,
          });
          this.listing.push({
            title: 'Review and Rating',
            link: 'reviews-ratings',
            active: true,
          });
          this.listing.push({
            title: 'Affiliate',
            link: 'my-affiliate',
            active: true,
          });


        } else if (profile.roles === 'C') {
          this.addMenuItem('social', true); 

          this.listing.push({
            title: 'Booking',
            link: 'my-booking',
            active: true,
          });
          this.listing.push({
            title: 'Amenities',
            link: 'my-amenities',
            active: true,
          });
          this.listing.push({
            title: 'Professionals',
            link: 'add-professionals',
            active: true,
          });
          this.listing.push({
            title: 'Products',
            link: 'my-product',
            active: true,
          });
          this.listing.push({
            title: 'Videos',
            link: 'videos-blogs',
            active: true,
          });
          this.listing.push({
            title: 'Subscription',
            link: 'my-subscription',
            active: true
          });
          this.listing.push({
            title: 'Payment',
            link: 'my-payment',
            active: true,
          });
          this.listing.push({
            title: 'Affiliate',
            link: 'my-affiliate',
            active: true,
          });
        }
      } else {
        if (profile.roles === 'SP') {
          if(!profile.plan || profile.plan.name.toLowerCase() == 'basic'){
            this.listing.push({
              title: 'Subscription',
              link: 'my-subscription',
              active: true,
            });
            this.listing.push({
              title: 'Payment',
              link: 'my-payment',
              active: true,
            });
            this.addMenuItem('social', false); 

            this.listing.push({
              title: 'Booking',
              link: 'my-booking',
              active: false,
            });
            this.listing.push({
              title: 'Videos',
              link: 'videos-blogs',
              active: false,
            });
            this.listing.push({
              title: 'Review and Rating',
              link: 'reviews-ratings',
              active: false,
            });
          } else {
            this.addMenuItem('social', true); 

            this.listing.push({
              title: 'Booking',
              link: 'my-booking',
              active: true,
            }),
              this.listing.push({
                title: 'Payment',
                link: 'my-payment',
                active: true,
              });
            this.listing.push({
              title: 'Subscription',
              link: 'my-subscription',
              active: true,
            });
            this.listing.push({
              title: 'Videos',
              link: 'videos-blogs',
              active: true,
            });

            this.listing.push({
              title: 'Review and Rating',
              link: 'reviews-ratings',
              active: true,
            });
          }
        }
      }

      if (profile.roles === 'U') {
        this.listing.push(...this.uListing);
      }
      if (profile.roles === 'C' && !profile.isVipAffiliateUser) {
        if(!profile.plan || profile.plan.name.toLowerCase() == 'basic'){
          this.listing.push({
            title: 'Subscription',
            link: 'my-subscription',
            active: true,
          });
          this.listing.push({
            title: 'Payment',
            link: 'my-payment',
            active: true,
          });
          this.addMenuItem('social', false); 

          this.listing.push({
            title: 'Booking',
            link: 'my-booking',
            active: false,
          });
          // this.listing.push({
          //   title: 'Affiliate',
          //   link: 'my-affiliate',
          //   active: false,
          // });

          this.listing.push({
            title: 'Review and Rating',
            link: 'reviews-ratings',
            active: false,
          });
        } else {
          this.addMenuItem('social', true); 

          this.listing.push({
            title: 'Booking',
            link: 'my-booking',
            active: true,
          });

          this.listing.push({
            title: 'Payment',
            link: 'my-payment',
            active: true,
          });
          this.listing.push({
            title: 'Subscription',
            link: 'my-subscription',
            active: true,
          });
          // this.listing.push({
          //   title: 'Affiliate',
          //   link: 'my-affiliate',
          //   active: true,
          // });
          this.listing.push({
            title: 'Review and Rating',
            link: 'reviews-ratings',
            active: true,
          });
        }
        if (profile.plan && profile.plan.ListAmenities === true) {
          this.listing.push({
            title: 'Amenities',
            link: 'my-amenities',
            active: true,
          });

        } else {
          this.listing.push({
            title: 'Amenities',
            link: 'my-amenities',
            active: false,
          });
        }

        if (profile?.plan?.ListOfProviders === true) {
          this.listing.push({
            title: 'Professionals',
            link: 'add-professionals',
            active: true,
          });
        } else {
          this.listing.push({
            title: 'Professionals',
            link: 'add-professionals',
            active: false,
          });
        }

        if (profile?.plan?.ListProductsOption === true) {
          this.listing.push({
            title: 'Products',
            link: 'my-product',
            active: true,
          });
        } else {
          this.listing.push({
            title: 'Products',
            link: 'my-product',
            active: false,
          });
        }

        if (profile?.plan?.videoUpload === true) {
          this.listing.push({
            title: 'Videos',
            link: 'videos-blogs',
            active: true,
          });
        } else {
          this.listing.push({
            title: 'Videos',
            link: 'videos-blogs',
            active: false,
          });
        }
      }
    }
  }
}
