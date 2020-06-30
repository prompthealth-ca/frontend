import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricvacy-policy',
  templateUrl: './pricvacy-policy.component.html',
  styleUrls: ['./pricvacy-policy.component.scss']
})
export class PricvacyPolicyComponent implements OnInit {
  result: any;
  title: any;
  description: any;

  constructor(private _router: Router,
    private _sharedService: SharedService) {
    this._sharedService.loader('show');
    this._sharedService.get("Pages/fixTitle/privacy-policy").subscribe((res: any) => {

      if (res.success) {
        this._sharedService.loader('hide');
        this.title = res.data.title
        this.description = res.data.description
      }
    },
      (error) => { });
  }

  ngOnInit() {

  }

}
