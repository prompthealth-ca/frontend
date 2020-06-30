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
  description: any;

  constructor(private _router: Router,
    private _sharedService: SharedService) {
    this._sharedService.loader('show');
    this._sharedService.get("Pages/fixTitle/loyality-program").subscribe((res: any) => {

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
