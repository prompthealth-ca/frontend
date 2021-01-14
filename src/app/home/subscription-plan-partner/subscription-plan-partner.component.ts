import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-subscription-plan-partner',
  templateUrl: './subscription-plan-partner.component.html',
  styleUrls: ['./subscription-plan-partner.component.scss']
})
export class SubscriptionPlanPartnerComponent implements OnInit {

  public isPriceMonthly: boolean = true;
  public partnerPlan: any = null;

  private isLoggedIn = false;

  constructor(
    private _sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) { this.isLoggedIn = true; }

    this.getSubscriptionPlan('user/get-plans');
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

}
