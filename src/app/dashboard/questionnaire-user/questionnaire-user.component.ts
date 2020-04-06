import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-questionnaire-user',
  templateUrl: './questionnaire-user.component.html',
  styleUrls: ['./questionnaire-user.component.scss']
})
export class QuestionnaireUserComponent implements OnInit {

  public type = '';
  public data = [];
  public itemsTotal = 0;
  treatment: any;
  constructor
    (
      private _router: Router,
      private _route: ActivatedRoute,
      private _sharedService: SharedService, ) { }

  ngOnInit(): void {
    this.getSelectedSkill();
  }

  getSelectedSkill() {
    // alert("hiiii");
    // console.log(this.type="U")
    this.type="U"

    // this._sharedService.loader('show');
    this._sharedService.getlistViaFilter(this.type).subscribe((res: any) => {
      // this._sharedService.loader('hide');

      if (res.success) {
        this.data = res.questionare;
        // this.treatment = res.questionare[0].treatment;
        console.log('sandeep console.', this.data)
        
      } else {
        this._sharedService.checkAccessToken(res.error);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }

}
