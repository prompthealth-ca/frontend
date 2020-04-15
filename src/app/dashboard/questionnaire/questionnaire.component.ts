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

  public type = "SP";
  public itemsTotal = 0;

  public selectedItems = [];
  treatment: any;
  public dropdownSettings = {};
  constructor
    (
      private _router: Router,
      private _route: ActivatedRoute,
      private _sharedService: SharedService, ) { }

  ngOnInit(): void {
    this.getSelectedSkill();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  
  }

  getSelectedSkill() {
    // this._sharedService.loader('show');
    let path = `questionare?type=${this.type}`;
    this._sharedService.get(path).subscribe((res: any) => {
      // this._sharedService.loader('hide');
      if (res.success) {
        this.questionnaire = res.questionare;
        console.log('this.questionnaire', this.questionnaire);
        
      } else {
        this._sharedService.checkAccessToken(res.error);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
