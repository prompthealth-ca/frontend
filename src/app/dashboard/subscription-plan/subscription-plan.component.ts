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
import { AngularStripeService } from '@fireflysemantics/angular-stripe-service';
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
  stripe;
  loading = false;
  confirmation;
  plan: any;
  spPlans = []
  cPlans = []
  error: string;
  token: any;
  roles: string;
  isLoggedIn = false;
  professionalOption =false;
  stripeTest: FormGroup;

  public checkout = {
    email: "this.userEmail.email",
    token: "this.token"
  }

  // public buyPlan = {
  //   customer_id: "this.userEmail.email",
  //   token: "this.token",
  //   subscription_id: ""
  // }

  user = {
    paymentMethod: []
  };
  elementsOptions: ElementsOptions = {
    locale: 'es'
  };
 
  userEmail: any;
  cardNumber: [];
  selectedCard: any;
  errMessage: any;
  selectedPlan: any;

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
    console.log('this.isLoggedIn', this.isLoggedIn);
    console.log('this.previousRouteService', this.previousRouteService.getPreviousUrl());
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

    this.getSPSubscriptionPlan('user/get-plans?userType=SP');
    this.getCSubscriptionPlan('user/get-plans?userType=C');
    // this.getUserDetails();
  }
  getSPSubscriptionPlan(path) {
    this._sharedService.loader('show');
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      this._sharedService.loader('hide');

      if (res.statusCode === 200) {
        this.spPlans = res.data;
      // this.updateSubscriptionPlan(res.data)
      } else {
        // this._commanService.checkAccessToken(res.error);
      }
    }, err => {
      this._sharedService.loader('hide');

    });
  }

  setSelectedPlan(plan) {
    console.log('plan', plan)
    this.selectedPlan = plan
  }
  getCSubscriptionPlan(path) {
    this._sharedService.loader('show');
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      this._sharedService.loader('hide');

      if (res.statusCode === 200) {
        this.cPlans = res.data;
      // this.updateSubscriptionPlan(res.data)
      } else {
        // this._commanService.checkAccessToken(res.error);
      }
    }, err => {
      this._sharedService.loader('hide');

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
    // if(!this.isLogedIn) {
    // this._sharedService.showAlert("Please Login to purchase this plan",'alert-danger')
    // } else {
    // this.checkPlan();
    // let ID = this.isLogedIn ? 'productPayment' : 'buyPlan';
    // this.openModal(ID);
    // }
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
    this.stripeService
      .createToken(this.card, { name })
      .subscribe(result => {
        if (result.token) {
          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges


        const payload = {
          userId: localStorage.getItem('loginID'),
          userType: localStorage.getItem('roles'),
          email: JSON.parse(localStorage.getItem("user")).email,
          cardId: result.token.card.id,
          token: result.token.id,
          planId: this.selectedPlan._id,
          amount: this.selectedPlan.price
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
          console.log(result.error.message);
        }
      });
  }
}
// end section


