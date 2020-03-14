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

@Component({
  selector: 'app-subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.scss']
})
export class SubscriptionPlanComponent implements AfterViewInit, OnDestroy {
  subData: [];
  @ViewChild('cardInfo', { static: false }) cardInfo: ElementRef;

  stripe;
  loading = false;
  confirmation;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  token: any;

  public checkout = {
    email: 'abc@yopmail.com',
    token: 'this.token'
  }

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _sharedService: SharedService,
    private cd: ChangeDetectorRef,
    private stripeService: AngularStripeService,
    private toastr: ToastrService, ) { }

  ngOnInit() {
    this.getSubscriptionPlan();
  }

  /*Get all Users */
  getSubscriptionPlan() {
    this._sharedService.loader('show');
    this._sharedService.getSubscriptionPlan().subscribe((res: any) => {
      this._sharedService.loader('hide');

      if (res.success) {
        this.subData = res.data.subscribepackage;
        console.log(">>>>>>>>sandy>>", this.subData)
      } else {
        // this._commanService.checkAccessToken(res.error);
      }
    }, err => {
      this._sharedService.loader('hide');

    });
  }

  ngAfterViewInit() {
    this.stripeService.setPublishableKey('pk_test_2syov9fTMRwOxYG97AAXbOgt008X6NL46o').then(
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
      console.log('Error:', error);
    } else {
      console.log('Success!', token.id);
      this.token = token.id
      console.log('Sandeep', this.token);
      let data = JSON.parse(JSON.stringify(this.checkout));
      this._sharedService.loader('Show');
      this._sharedService.token(data).subscribe((res: any) => {
        this._sharedService.loader('hide');
        if (res.success) {

          this.toastr.success('Your card has been add successfully');

        } else {
          this.toastr.error(res.error.message);
        }
      }, (error) => {
        this.toastr.error("There are some error please try after some time.")
        this._sharedService.loader('hide');
      });

    }
  }
}




