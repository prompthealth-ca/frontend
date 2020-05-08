import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  activeTab = 'payment';
  public questionnaire = [];
  public type = window.localStorage.getItem('roles');
  public itemsTotal = 0;
  public selectedItems = [];
  subRes = {
    question: '',
    quesId: '',
    options: []
  };

  showlevel2SubAns = false
  sublevel2Res = {
    question: '',
    quesId: '',
    options: []
  };

  @Output() ActiveNextTab = new EventEmitter<string>();
  constructor
    (
      private _router: Router,
      private _sharedService: SharedService, ) { }

  ngOnInit(): void {
    this.getSelectedSkill();
  }

  getSelectedSkill() {
    this.type = localStorage.getItem('roles');
    let path = `questionare/get-questions?type=${this.type}`;
    this._sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.questionnaire = res.data;
        
      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }

  saveQuestionnaire() {

    this.ActiveNextTab.emit(this.activeTab);  // TODO: To be added to after form submission
    // TODO: Call the API to save questions
    console.log('type comes here', this.type);
    // this.type === 'U' ? this._router.navigate(['/dashboard/listing']) : this._router.navigate(['/dashboard/professional']);

  }
  getSubAns(evt) {
    if(evt.target.checked) {
      const parentId = evt.target.id;
      this.subRes.question = evt.target.name
      this.subRes.quesId =  parentId;
      const path = `questionare/get-answer/${evt.target.id}`;
      this._sharedService.get(path).subscribe((res: any) => {
        if (res.statusCode = 200) {
            this.subRes.options =  res.data;
        } else {
          this._sharedService.checkAccessToken(res.message);
        }
      }, err => {

        this._sharedService.checkAccessToken(err);
      });
    }
    else {

      this.subRes.question = '';
      this.subRes.quesId = '';
      this.subRes.options = [];
    }

  }
  getSubSubAns(evt) {
    if(evt.target.checked) {
      const parentId = evt.target.id;
      this.sublevel2Res.question = evt.target.name
      this.sublevel2Res.quesId =  parentId;
      const path  = `questionare/get-sub-answer/${parentId}`;
      this._sharedService.get(path).subscribe((res: any) => {
        if (res.statusCode = 200) {
          this.sublevel2Res.options =  res.data;
        } else {
          this._sharedService.checkAccessToken(res.message);
        }
      }, err => {

        this._sharedService.checkAccessToken(err);
      });
    }
    else {
      this.sublevel2Res.question = '';
      this.sublevel2Res.quesId = '';
      this.sublevel2Res.options = [];

    }
  }
}
