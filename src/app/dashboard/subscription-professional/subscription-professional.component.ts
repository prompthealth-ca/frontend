import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
import { NgForm } from "@angular/forms";
import { AngularStripeService } from '@fireflysemantics/angular-stripe-service';
import { ToastrService } from 'ngx-toastr';
declare var jQuery: any;

@Component({
  selector: 'app-subscription-professional',
  templateUrl: './subscription-professional.component.html',
  styleUrls: ['./subscription-professional.component.scss']
})
export class SubscriptionProfessionalComponent implements AfterViewInit, OnDestroy {

  subData: [];
  @ViewChild('cardInfo', { static: false }) cardInfo: ElementRef;

  stripe;
  loading = false;
  confirmation;
  plan: any;
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  token: any;

  public checkout = {
    email: "this.userEmail.email",
    token: "this.token"
  }

  // public buyPlan = {
  //   customer_id: "this.userEmail.email",
  //   token: "this.token",
  //   subscription_id: ""
  // }

  user1 = {
    paymentMethod: []
  };

  userEmail: any;
  cardNumber: [];
  selectedCard: any;
  errMessage: any;
  selectedPlan: any;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _sharedService: SharedService,
    private cd: ChangeDetectorRef,
    private stripeService: AngularStripeService,
    private toastr: ToastrService, ) { }

  ngOnInit() {
    this.userEmail = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user"))
      : {};
    this.checkout.email = this.userEmail.email;
    this.getSubscriptionPlan();
    this.getUserDetails();
  }

  /*Get all Users */
  getSubscriptionPlan() {
    this._sharedService.loader('show');
    this._sharedService.getSubscriptionPlan().subscribe((res: any) => {
      this._sharedService.loader('hide');

      if (res.success) {
        this.subData = res.data.subscribepackage;
      } else {
        // this._commanService.checkAccessToken(res.error);
      }
    }, err => {
      this._sharedService.loader('hide');

    });
  }

  ngAfterViewInit() {
    // const key = 'pk_live_51HMSVQHzvKsIv7FclCIgEYNrD4tlvjzZRTDx43Y54pVY3vjQ8MhFuOntQMY094MZ49bDzOdFf2A2tkYdTwSag9ij00xDUu4xnU'
    const key = 'pk_test_zqD7pwcCCzFTnYdL8NhZeIl600rcJJW5dU'
    this.stripeService.setPublishableKey(key).then(
      stripe => {
        this.stripe = stripe;
        const elements = stripe.elements();
        this.card = elements.create('card');
        this.card.mount(this.cardInfo.nativeElement);
        this.card.addEventListener('change', this.cardHandler);
      });
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit(form: NgForm) {
    const { token, error } = await this.stripe.createToken(this.card);

    if (error) {
    } else {
      this.token = token.id;
      this.checkout.token = this.token;
      let data = JSON.parse(JSON.stringify(this.checkout));
      this._sharedService.loader('Show');
      this._sharedService.token(data).subscribe((res: any) => {
        this._sharedService.loader('hide');
        if (res.success) {

          this.toastr.success('Your card has been add successfully');
          jQuery('.modal').click()
        } else {
          this.toastr.error(res.error.message);
        }
      }, (error) => {
        this.toastr.error("There are some error please try after some time.")
        this._sharedService.loader('hide');
      });

    }
  }
  getUserDetails() {
    this._sharedService.loader('show');
    this._sharedService.getUserDetails().subscribe((res: any) => {
      this._sharedService.loader('hide');

      if (res.success) {
        this.user1 = res.data.user;

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

  save() {
    this.errMessage = '';

    if (!this.selectedCard) {
      this.errMessage = "Please Select Card."
      return
    }

    let body = {
      customer_id: this.selectedCard['customer_id'],
      token: this.selectedCard['card_id'],
      subscription_id: this.selectedPlan['id']
    }
    this._sharedService.loader('show');
    this._sharedService.post(body, 'chargePayment').subscribe((res: any) => {
      if (res.success) {
        // this.fetchPlan();
        jQuery('#closeModal').click()
        // this.openModal()
        this.toastr.success('Your payment has been successfully done');
        this._router.navigate(['/dashboard/userdetails']);
        jQuery('.modal').click()
        this._sharedService.loader('hide');
        jQuery('.modal').click()
      } else {
        this.toastr.error("There are some error please try after some time.")
        this._sharedService.loader('hide');
      }
    }, err => {
      let body = JSON.parse(err._body)
      this._sharedService.loader('hide');
      this.errMessage = body.err.message
    });
  }

  goToContactPage() {
    this._router.navigate(['/contact-us']);
  }

}

// end section


