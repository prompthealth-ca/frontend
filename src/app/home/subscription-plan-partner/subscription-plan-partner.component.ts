import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-subscription-plan-partner',
  templateUrl: './subscription-plan-partner.component.html',
  styleUrls: ['./subscription-plan-partner.component.scss']
})
export class SubscriptionPlanPartnerComponent implements OnInit {

  public isPriceMonthly: boolean = true;
  public partnerPlan: any = null;

  public form: FormGroup;

  private isLoggedIn = false;

  constructor(
    private _sharedService: SharedService,
    _fb: FormBuilder
  ) {
    this.form = _fb.group({
      first: new FormControl('', Validators.required),
      last: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) { this.isLoggedIn = true; }

    /** enable to get usbscription plan after api is ready */
//    this.getSubscriptionPlan('user/get-plans');

if (this.isLoggedIn === true) {
//      this.getProfileDetails();
    }
  }

  getSubscriptionPlan(path) {
    this._sharedService.loader('show');
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      this._sharedService.loader('hide');

      if (res.statusCode === 200) {
        res.data.forEach(element => {
          if (element.userType.length > 1 && element.name === 'Basic') {
            this.partnerPlan = element;
          }
        });
      } else {
        // this._commanService.checkAccessToken(res.error);
      }
    }, err => {
      this._sharedService.loader('hide');
    });
  }


  changePriceRange(isMonthly: boolean){ this.isPriceMonthly = isMonthly; }

  public errorForm: string = null;
  onInputForm(){ if(this.errorForm){ this.errorForm = null; } }

  submitRegister(){    
    var f = this.form.controls;

    if(f.first.invalid || f.last.invalid || (f.email.invalid && f.email.errors.required)){
      this.errorForm = 'Please fill all items.';
    }else if( f.email.invalid && f.email.errors.email ){
      this.errorForm = 'Please input correct email address.';
    }else{
      this.errorForm = null;
    }
    
    if(this.errorForm){ return; }
    else{
      console.log(this.form.value)
    }
  }

}
