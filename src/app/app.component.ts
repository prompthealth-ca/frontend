import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUserDetail } from './models/user-detail';
import { ScrollTopService } from './scrolltop.service';
import { SharedService } from './shared/services/shared.service';
import { UniversalService } from './shared/services/universal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wellness-frontend';
  constructor(
    private scrollTopService: ScrollTopService,
    private _uService: UniversalService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _location: Location,
    ) {
}

async ngOnInit() {
  this.scrollTopService.setScrollTop();
  if(!this._uService.isServer){
    try { await this.getPosition(); }
    catch(error){ console.log(error); }  
  }

  this._route.queryParams.subscribe((params: IAppQueryParams) => {
    console.log(params);
    if(params && params.message) {
      switch(params.message) {
        case 'stripe-success': this._toastr.success('Thank you for subscribing our premium plan!'); break;
        case 'stripe-cancel': 
          const uStr = this._uService.localStorage.getItem('user');
          if(uStr) {
            const user: IUserDetail = JSON.parse(uStr);
            if(!user.plan || user.plan.price == 0) {
              this._toastr.error('You haven\'t subscribed plan yet. You cannot access full feature unless you subscribe plan.'); 
            }
          }
          break;
      }
    }
    if(params && params.action) {
      switch(params.action) {
        case 'remove-plan': this._uService.sessionStorage.removeItem('selectedPlan'); break;
      }
    }

    setTimeout(() => {
      const copyParams = JSON.parse(JSON.stringify(params));
      copyParams.message = null;
      let queryList = [];
      for(let key in copyParams) {
        if(copyParams[key]){
          queryList.push(key + '=' + copyParams[key]);
        }
      }
      this._location.replaceState(location.pathname, '?'+queryList.join('&'));
    }, 1000);
  });
}

getPosition(): Promise<any> {
  return new Promise((resolve, reject) => {

    navigator.geolocation.getCurrentPosition(resp => {
      resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });

      localStorage.setItem('ipLat', resp.coords.latitude.toString());
      localStorage.setItem('ipLong', resp.coords.longitude.toString());
    },
    err => {
      reject(err);
    }, {enableHighAccuracy: true, maximumAge:0, timeout: 1000000});
  });

}
}


interface IAppQueryParams {
  message?: 'stripe-cancel' | 'stripe-success';
  action?: 'remove-plan';
}