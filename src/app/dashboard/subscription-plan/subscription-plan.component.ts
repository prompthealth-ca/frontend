import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.scss']
})
export class SubscriptionPlanComponent implements OnInit {
  subData: [];

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _sharedService: SharedService) { }

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



}

