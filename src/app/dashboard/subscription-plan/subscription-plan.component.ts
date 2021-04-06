import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { StripeService } from 'ngx-stripe';
import { SharedService } from '../../shared/services/shared.service';

import { PreviousRouteService } from '../../shared/services/previousUrl.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddonSelectCategoryComponent } from '../addon-select-category/addon-select-category.component';
import { CategoryService } from 'src/app/shared/services/category.service';
import { IAddonPlan } from '../../models/addon-plan';
import { IDefaultPlan } from 'src/app/models/default-plan';
// declare var jQuery: any;


@Component({
  selector: 'app-subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.scss']
})
export class SubscriptionPlanComponent implements OnInit {
  // elements: Elements;
  card: Element;
  subData: [];
  @ViewChild('cardInfo', { static: false }) cardInfo: ElementRef;
  @ViewChild('signin') signin: ElementRef;

  @ViewChild('closebutton') closebutton;
  centreYearly = false;
  finalPrice;
  spYearly = false;

  loading = false;
  confirmation;
  spPlan: IDefaultPlan;
  cPlan: IDefaultPlan;
  basicPlan: IDefaultPlan;
  error: string;
  token: any;
  roles: string;
  isLoggedIn = false;
  professionalOption = false;
  stripeTest: FormGroup;
  centreMonth = false;
  spMonth = false;
  discounttype: any;

  public isPriceMonthly = true;

  public addOnPlans: IAddonPlan[] = [];
  public addonNetworker: IAddonPlan;
  public addonSocialite: IAddonPlan;

  public checkout = {
    email: 'this.userEmail.email',
    token: 'this.token'
  };

  user = {
    paymentMethod: []
  };

  userEmail: any;
  cardNumber: [];
  selectedCard: any;
  errMessage: any;
  selectedPlan: any;
  profile;

  constructor(
    private previousRouteService: PreviousRouteService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _sharedService: SharedService,
    private cd: ChangeDetectorRef,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private stripeService: StripeService,
    private _modalService: NgbModal,
    public catService: CategoryService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('token')) { this.isLoggedIn = true; }
    this.userEmail = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))
      : {};
    this.roles = localStorage.getItem('roles');
    this.checkout.email = this.userEmail.email;

    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });

    this.getSubscriptionPlan('user/get-plans');
    this.getAddonPlan();

    // this.getUserDetails();
    if (this.isLoggedIn === true) {
      this.getProfileDetails();
    }
  }
  getSubscriptionPlan(path) {
    this._sharedService.loader('show');
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      this._sharedService.loader('hide');

      if (res.statusCode === 200) {
        //        console.log(res.data);
        res.data.forEach(element => {
          if (element.userType.length > 1 && element.name === 'Basic') {
            this.basicPlan = element;
          }
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
  getAddonPlan() {
    this._sharedService.loader('show');
    this._sharedService.getNoAuth('addonplans/get-all', { roles: ['SP', 'C'] }).subscribe((res: any) => {
      this._sharedService.loader('hide');

      if (res.statusCode === 200) {
        res.data.forEach((data: IAddonPlan) => {
          if(data.name == 'The Networker') { this.addonNetworker = data; }
          if(data.name == 'The Socialite') { this.addonSocialite = data; }
        });
        console.log(this.addonNetworker);
      } else {
        // this._commanService.checkAccessToken(res.error);
      }
    }, err => {
      this._sharedService.loader('hide');

    });
  }
  getProfileDetails() {
    const path = `user/get-profile/${this.userEmail._id}`;
    this._sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.profile = res.data[0];
      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }
  // setSelectedPlan(plan) {
  //   this.selectedPlan = plan;
  //   if (this.roles === 'SP') {
  //     this.selectedPlan.price = this.spYearly ? plan.yearlyPrice : plan.price;
  //     this.selectedPlan.monthly = this.spYearly ? false : true;
  //   }
  //   if (this.roles === 'C') {
  //     this.selectedPlan.price = this.centreYearly ? plan.yearlyPrice : plan.price;
  //     this.selectedPlan.monthly = this.centreYearly ? false : true;
  //   }
  //   if (this.profile.refererencePointEarned) {
  //     // const discountedPrice = this.selectedPlan.price - (this.selectedPlan.price * (this.profile.refererencePointEarned / 100));
  //     // this.discounttype = 'reference';
  //     // this.finalPrice = discountedPrice + (discountedPrice * (5 / 100));
  //   } else {
  //     // const sepDiscount = this.selectedPlan.price - (this.selectedPlan.price * (50 / 100)); // Undo this after sep discount
  //     // this.discounttype = 'sepdiscount';
  //     // this.finalPrice = sepDiscount + (sepDiscount * (5 / 100));  // Undo this after sep discount
  //     // this.finalPrice  = this.selectedPlan.price + (this.selectedPlan.price * (5/100));
  //   }
  //   this.buyDefaultPlan();
  // }
  // setSelectedFreePlan(plan) {
  //   this._router.navigate(['/']);
  //   if (this.roles === 'U') {
  //   } else {
  //     const payload = {
  //       _id: localStorage.getItem('loginID'),
  //       plan
  //     };

  //     this._sharedService.post(payload, 'user/updateProfile').subscribe((res: any) => {
  //       if (res.statusCode === 200) {
  //         this.toastr.success(res.message);

  //         this._router.navigate(['/dashboard/profilemanagement/my-subscription']);
  //       } else {
  //         this.toastr.error(res.message);

  //       }
  //     }, err => {
  //       this.toastr.error('There are some errors, please try again after some time !', 'Error');
  //     });

  //   }

  // }
  getUserDetails() {
    this._sharedService.loader('show');
    this._sharedService.getUserDetails().subscribe((res: any) => {
      this._sharedService.loader('hide');

      if (res.success) {
        this.user = res.data.roles;
      } else {
        // this._commanService.checkAccessToken(res.error);
      }
    }, err => {
      this._sharedService.loader('hide');

    });
  }

  // checkLogin(data) {
  //   this.selectedPlan = data;
  // }

  // goToContactPage() {
  //   this._router.navigate(['/contact-us']);
  // }

  // handleChange(url, type) {
  //   this._router.navigate([url, type]);
  //   if (url === '/auth/login') {
  //     this.signin.nativeElement.click();
  //   }
  // }


//   stripeCheckout(payload) {
//     const path = `user/checkoutSession`;
//     this._sharedService.loader('show');
//     this._sharedService.post(payload, path).subscribe((res: any) => {
//       console.log('there we go');
//       if (res.statusCode === 200) {
//         // this.closebutton.nativeElement.click();
//         // console.log(environment.config.stripeKey);
//         console.log(res);
//         this.stripeService.changeKey(environment.config.stripeKey);

//         if (res.data.type === 'checkout') {
//           this.toastr.success('Checking out...');

//           this.stripeService.redirectToCheckout({ sessionId: res.data.sessionId }).subscribe(stripeResult => {
//             console.log('success!');
//           }, error => {
//             this.toastr.error(error);
//             console.log(error);
//           });
//         }
//         if (res.data.type === 'portal') {
//           this.toastr.success('You already have this plan. Redirecting to billing portal');
//           console.log(res.data);
//           location.href = res.data.url;
//         }


//       } else {
//         this.toastr.error(res.message, 'Error');
//       }

//       this._sharedService.loader('hide');
//     }, (error) => {
//       this.toastr.error(error);
//       this._sharedService.loader('hide');
//     });
//   }
//   buyDefaultPlan() {
//     // this._sharedService.loader('show');
//     const payload = {
//       cancel_url: location.href,
//       success_url: location.origin + '/dashboard/profilemanagement/my-subscription',
//       userId: localStorage.getItem('loginID'),
//       userType: localStorage.getItem('roles'),
//       email: JSON.parse(localStorage.getItem('user')).email,
//       plan: this.selectedPlan,
//       isMonthly: this.isPriceMonthly,
//       type: 'default'
//     };
//     console.log(payload);

//     this.stripeCheckout(payload);
//   }

//   buyAddOnPlan(plan) {
//     console.log(plan);
//     console.log(this.profile);
//     if (plan.name === 'The Networker') {
//       const modalRef = this._modalService.open(AddonSelectCategoryComponent, {
//         centered: true
//       });
//       modalRef.componentInstance.categories = this.catService.categoryList;
//       modalRef.result.then(res => {
//         console.log(res);
//         const metadata = this.catService.categoryList[res];
//         delete metadata.subCategory;
//         metadata.userType = plan.userType;
//         console.log(metadata);
//         this.checkoutAddonPlan(plan, metadata);
//       }).catch(error => {
//         console.log(error);
//       });
//     } else {
//       this.checkoutAddonPlan(plan);
//     }

//   }
//   checkoutAddonPlan(plan, metadata = {}) {
//     const payload = {
//       cancel_url: location.href,
//       success_url: location.origin + '/dashboard/profilemanagement/my-subscription',
//       userId: localStorage.getItem('loginID'),
//       userType: localStorage.getItem('roles'),
//       email: JSON.parse(localStorage.getItem('user')).email,
//       plan,
//       isMonthly: this.isPriceMonthly,
//       type: 'addon',
//       metadata
//     };
//     console.log(payload);
//     this.stripeCheckout(payload);
//   }
  changePriceRange(isMonthly: boolean) {
    this.isPriceMonthly = isMonthly;
  }


}
// end section