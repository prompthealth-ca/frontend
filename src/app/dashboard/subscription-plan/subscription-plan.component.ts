import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";
import { SharedService } from '../../shared/services/shared.service';

import { PreviousRouteService } from '../../shared/services/previousUrl.service';
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
declare var jQuery: any;


@Component({
  selector: 'app-subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.scss']
})
export class SubscriptionPlanComponent {
  elements: Elements;
  card: StripeElement;
  subData: [];
  @ViewChild('cardInfo', { static: false }) cardInfo: ElementRef;
  @ViewChild('signin') signin:ElementRef;

  @ViewChild('closebutton') closebutton;
  centreYearly = true;
  finalPrice ;
  spYearly = true;
  stripe;
  loading = false;
  confirmation;
  spPlan;
  cPlan;
  basicPlan;
  error: string;
  token: any;
  roles: string;
  isLoggedIn = false;
  professionalOption =false;
  stripeTest: FormGroup;
  centreMonth=false;
  spMonth=false;

  public checkout = {
    email: "this.userEmail.email",
    token: "this.token"
  }

  user = {
    paymentMethod: []
  };
  elementsOptions: ElementsOptions = {
    locale: 'en'
  };
 
  userEmail: any;
  cardNumber: [];
  selectedCard: any;
  errMessage: any;
  selectedPlan: any;
  profile

  constructor(
    private previousRouteService: PreviousRouteService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _sharedService: SharedService,
    private cd: ChangeDetectorRef,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private stripeService: StripeService ) { }

  ngOnInit() {
    if (localStorage.getItem('token')) this.isLoggedIn = true;
    this.userEmail = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user"))
      : {};
    this.roles = localStorage.getItem("roles");
    this.checkout.email = this.userEmail.email;

    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });

    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });

    this.getSubscriptionPlan('user/get-plans');
    // this.getUserDetails();
    this.getProfileDetails();
  }
  getSubscriptionPlan(path) {
    this._sharedService.loader('show');
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      this._sharedService.loader('hide');

      if (res.statusCode === 200) {
        res.data.forEach(element => {         
          if (element.userType.length > 1 && element.name === 'Basic') {
            this.basicPlan = element;
          }
          if (element.userType.length == 1 && element.userType[0] === 'C') {
            this.cPlan = element;
          }
          if (element.userType.length == 1 && element.userType[0] === 'SP') {
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
  getProfileDetails() {
    let path = `user/get-profile/${this.userEmail._id }`;
    this._sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.profile = res.data[0];
      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }
  setSelectedPlan(plan) {
    this.selectedPlan = plan;
    if(this.profile.refererencePointEarned) {
      const discountedPrice = this.selectedPlan.price - (this.selectedPlan.price * (this.profile.refererencePointEarned/100));
      this.finalPrice = discountedPrice + (discountedPrice * (5/100)); 
    } else {
      this.finalPrice  = this.selectedPlan.price + (this.selectedPlan.price * (5/100)); 
    }
    this.finalPrice = this.finalPrice.toFixed(2)
  }
  setSelectedFreePlan(plan) {

    const payload = {
      _id: localStorage.getItem('loginID'),
      plan
    }

      this._sharedService.post(payload, 'user/updateProfile').subscribe((res: any) => {
        if (res.statusCode === 200) {
          this.toastr.success(res.message);

        this._router.navigate(['/']);
        } else {
          this.toastr.error(res.message);
  
        }
      }, err => {
        this.toastr.error('There are some errors, please try again after some time !', 'Error');
      });

  }
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

  checkLogin(data) {
    this.selectedPlan = data;
  }

  goToContactPage() {
    this._router.navigate(['/contact-us']);
  }

  handleChange(url, type){
    this._router.navigate([url, type]);
    if(url === '/auth/login') {
      this.signin.nativeElement.click();
    }
  }

  payment() {
    // localStorage.setItem('isPayment', 'true');
    // this._router.navigate(['/dashboard/profilemanagement', this.roles]);
  }
  buy() {
    const name = this.stripeTest.get('name').value;
  
    // const price = this.selectedPlan.price * (5/100) // Tax added
    this.stripeService
      .createToken(this.card, { name })
      .subscribe(result => {
        if (result.token) {
        const payload = {
          userId: localStorage.getItem('loginID'),
          userType: localStorage.getItem('roles'),
          email: JSON.parse(localStorage.getItem("user")).email,
          plan: this.selectedPlan,
          cardId: result.token.card.id,
          token: result.token.id,
          amount: this.finalPrice,
          discount: this.profile.refererencePointEarned,
        }

        this._sharedService.loader('show');
        const path = `user/buyPlan`;
        this._sharedService.post(payload, path).subscribe((res: any) => {
          this._sharedService.loader('hide');
            if (res.statusCode === 200) {
              this.toastr.success(res.message);
              this.closebutton.nativeElement.click();
              this._router.navigate(['/dashboard/profilemanagement/my-profile']);
            }
      
            else {
              this._sharedService.showAlert(res.message, 'alert-danger');
            }
          }, (error) => {
            this._sharedService.loader('hide');
          });
        } else if (result.error) {
          // Error creating the token
          this._sharedService.showAlert(result.error.message, 'alert-danger');
        }
      });
  }
}
// end section


