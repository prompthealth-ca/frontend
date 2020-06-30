import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  activeTab = 'payment';
  questionType="age";
  myForm: any;
  public questionnaire: any;
  public type = window.localStorage.getItem('roles');
  public itemsTotal = 0;
  public selectedItems = [];
  typical_hours = [];
  isVipAffiliateUser = false;
  userSavePayload;
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
      private toastr: ToastrService,
      private _router: Router,
      private _sharedService: SharedService, ) { }

  ngOnInit(): void {

    this.userSavePayload = {
      _id: localStorage.getItem('loginID'),
      answers: [],
      
    }
    this.type = localStorage.getItem('roles');
    if(JSON.parse(localStorage.getItem('isVipAffiliateUser')) === true) {
      this.isVipAffiliateUser = true
    }
    
    localStorage.removeItem('typical_hours');
    this.getSelectedSkill();
  }

  getSelectedSkill() {
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
  getUserQuestionnaire() {
    let path = `questionare/get-questions?type=${this.type}&filter=${this.questionType}`;
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
    this._sharedService.loader('show');
    let payload;
      payload = {
        _id: localStorage.getItem('loginID'),
        services: this.selectedItems,
      }
    
    let path = 'user/updateServices';
    this._sharedService.post(payload, path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        localStorage.setItem('typical_hours', this.typical_hours.toString());
        this.toastr.success(res.message);
      } else {
        this.toastr.error(res.message);

      }
    }, err => {
      this._sharedService.loader('hide');
    });
    if(this.isVipAffiliateUser) {
      if(this.type === 'U') {
        this._router.navigate(['/dashboard/listing']);
      } else {
        this._router.navigate(['/dashboard/profilemanagement/my-profile']);
      }
    } else {
      if(this.type === 'U') {
      this._router.navigate(['/dashboard/listing']);
      } else {
      this.ActiveNextTab.emit(this.activeTab); 
      }
    }
  }
  getSubAns(evt, subOption, questType) {
    const parentId = evt.target.id;
    
    if(this.selectedItems.indexOf(parentId) === -1) {
      if(questType === 'availability') {
        this.typical_hours.push(parentId);
      }
      else {
        this.selectedItems.push(parentId);
      }
    }
    if(evt.target.checked && subOption) {
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
  getSubSubAns(evt, subans) {
    const parentId = evt.target.id;
    if(this.selectedItems.indexOf(parentId) === -1) {
      this.selectedItems.push(parentId);
    }
    if(evt.target.checked && subans) {
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
  nextTabEvent() {
    switch(this.questionType) {
      case 'age': {
        this.questionType = 'health';
        break;
      }
      case 'health': {
        this.questionType = 'goal';
        break;
      }
      case 'goal': {
        this.questionType = 'availability';
        break;
      }
    }
    this.getUserQuestionnaire();

  }
  addQuestion(question_id, ansID) {
    this.userSavePayload.answers.push({
      question_id,
      ans_id: [ansID],
    });
  }
  getMultiAns(question_id, ansID) {
    const ansId = []
    ansId.push(ansID)
    this.userSavePayload.answers.push({
      question_id,
      ans_id: [ansID],
    });
  }
  // previousTabEvent() {
  //   if (this.questionType === 'availability') {
  //     this.questionType = 'goal'
  //   }
  //   if (this.questionType === 'goal') {
  //     this.questionType = 'health'
  //   }
  //   if (this.questionType === 'health') {
  //     this.questionType = 'age'
  //   }
  // }
}
