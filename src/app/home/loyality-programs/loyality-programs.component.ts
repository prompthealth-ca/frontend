import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loyality-programs',
  templateUrl: './loyality-programs.component.html',
  styleUrls: ['./loyality-programs.component.scss']
})
export class LoyalityProgramsComponent implements OnInit {
  result: any;
  title: any;

  constructor(private _router: Router,
    private _sharedService: SharedService) { }

  ngOnInit() {
    this.loyaltyProgram();
  }
  loyaltyProgram() {
    // alert("here");

    this._sharedService.get("Pages/fixTitle/loyality-program").subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.success) {
        this.title = res.data.title
        console.log('this.resultLoyalty', this.result)
      }
    },
      (error) => { });



  }
}
