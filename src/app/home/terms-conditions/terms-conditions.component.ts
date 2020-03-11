import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {

  result: any;
  title: any;
  description: any;

  constructor(private _router: Router,
    private _sharedService: SharedService) {
    this._sharedService.loader('show');
    this._sharedService.get("Pages/fixTitle/t-c").subscribe((res: any) => {

      if (res.success) {
        this._sharedService.loader('hide');
        this.title = res.data.title
        this.description = res.data.description

        console.log('this.resultLoyalty', this.result)
      }
    },
      (error) => { });
  }

  ngOnInit() {

  }

}
