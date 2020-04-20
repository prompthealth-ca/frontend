import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  public questionnaire = [];

  public type = window.localStorage.getItem('roles');
  public itemsTotal = 0;

  public selectedItems = [];
  treatment: any;
  public dropdownSettings = {};
  constructor
    (
      private _router: Router,
      private _sharedService: SharedService, ) { }

  ngOnInit(): void {
    this.getSelectedSkill();
  }

  getSelectedSkill() {

    // this._sharedService.loader('show');
    console.log('This.type', this._router.url)
    if(this._router.url.includes('SP')) {
      this.type = 'SP';
    }
    else if(this._router.url.includes('C')) {
      this.type = 'C';
    }
    else {
      this.type = 'U';
    }
    let path = `questionare?type=${this.type}`;
    this._sharedService.get(path).subscribe((res: any) => {
      // this._sharedService.loader('hide');
      if (res.success) {
        this.questionnaire = res.questionare;
        
      } else {
        this._sharedService.checkAccessToken(res.error);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }

  saveQuestionnaire() {
    // TODO: Call the API to save questions
    console.log('type comes here', this.type);
    this.type === 'U' ? this._router.navigate(['/dashboard/listing']) : this._router.navigate(['/dashboard/professional']);

  }
}
