import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';@Component({
  selector: 'app-user-questionaire',
  templateUrl: './user-questionaire.component.html',
  styleUrls: ['./user-questionaire.component.scss']
})
export class UserQuestionaireComponent implements OnInit {
  questionType="age";
  
ansIDs = [];
  myForm: any;
  public questionnaire: any;
  public type = window.localStorage.getItem('roles');
  typical_hours = [];
  public selectedItems = [];
  userSavePayload;
  subRes = {
    question: '',
    quesId: '',
    options: []
  };

  showlevel2SubAns = false
  ageQuestion
  profile

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
    
    localStorage.removeItem('typical_hours');
    this.getProfileDetails()
    this.getUserQuestionnaire();
  }
  setAnsChecked(){
    this.questionnaire.forEach(element => {
      if(element.c_question === "What is your age range?" && this.profile.customer_age_group) {
        element.answers.forEach(ele => {
          if(ele._id === this.profile.customer_age_group) {
            ele.active = true;
          }
        
        });
      }
        
      if(element.c_question === "Are you looking for your loved one?" && this.profile.customer_loved) {
        element.answers.forEach(el => {
          if(el._id === this.profile.customer_loved) {
            el.active = true;
          }
        });
      }

      if(element.c_question === "Check the status of your health" && this.profile.customer_health.length) {
        element.answers.forEach(el => {
          this.profile.customer_health.forEach(save => {
            if(el._id === save) {
              el.active = true;
            } 
          });
        });
      }
    });
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
  getUserQuestionnaire() {
    let path = `questionare/get-questions?type=${this.type}&filter=${this.questionType}`;
    this._sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.questionnaire = res.data;
        for(var i in this.questionnaire) {
          this.questionnaire[i].answers.forEach(obj=> { obj['active'] = false })
        }
        this.setAnsChecked();
      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }
  getProfileDetails() {
    let path = `user/get-profile/${localStorage.getItem('loginID')}`;
    this._sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.profile = res.data[0];
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
   
    this._router.navigate(['/dashboard/listing']);
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
  addQuestion(question, ansID) {
    let data;
    if(question === "What is your age range?") {
      data = {
        customer_age_group: ansID
      }
    }
    if(question === "Are you looking for your loved one?") {
      data = {
        customer_loved: ansID
      }
    }
    else {
      
    }
    this.updateProfile(data);
  }
  getMultiAns(question_id,event) {
    let data;
    if(event.target.checked) {
      if(this.ansIDs.indexOf(event.target.id) === -1) {
        this.ansIDs.push(event.target.id);
      }
    }
    else {
      const find = this.ansIDs.indexOf(event.target.id)
      if(find > -1) {
        this.ansIDs.splice(find, 1);
      }
    }
    if(question_id == "CHECK THE STATUS OF YOUR HEALTH") {
      data = {
        customer_health: this.ansIDs
      }
    }
    this.updateProfile(data);
  }
  updateProfile(data) {
    const payload = {
      _id:  localStorage.getItem('loginID'),
      ...data,
    }

      this._sharedService.post(payload, 'user/updateProfile').subscribe((res: any) => {
        if (res.statusCode === 200) {
          this.profile = res.data;
        } else {
          this.toastr.error(res.message);
  
        }
      }, err => {
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
}
