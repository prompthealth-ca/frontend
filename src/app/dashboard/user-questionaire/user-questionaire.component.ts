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
  userSavePayload;
  ageQuestion
  profile

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

    console.log( '---', this.profile)
    this.questionnaire.forEach(element => {
      console.log( 'element--->>>', element)
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
            console.log('customer_loved', el._id, '---', save)
            if(el._id === save) {
              el.active = true;
            } 
          });
        });
      }
    });
  }
  getUserQuestionnaire() {
    let path = `questionare/get-questions?type=${this.type}&filter=${this.questionType}`;
    this._sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.questionnaire = res.data;
        console.log('ageQuestion', this.questionnaire)
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
        console.log('profile', this.profile);
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
      // payload = {
      //   _id: localStorage.getItem('loginID'),
      //   services: this.selectedItems,
      //   typical_hours: this.typical_hours,
      // }
    
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
    this.updateProfile(data);
  }
  getMultiAns(question_id,event) {
    console.log('event', event);
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
    console.log('ansID', this.ansIDs);
    if(question_id == "CHECK THE STATUS OF YOUR HEALTH") {
      data = {
        customer_health: this.ansIDs
      }
    }
    this.updateProfile(data);
  }
  updateProfile(data) {
    console.log('data', data)
    const payload = {
      _id:  localStorage.getItem('loginID'),
      ...data,
    }

    console.log('data', payload)
      this._sharedService.post(payload, 'user/updateProfile').subscribe((res: any) => {
        if (res.statusCode === 200) {
          this.profile = res.data;
          console.log('profile', this.profile)
          this.toastr.success(res.message);
        } else {
          this.toastr.error(res.message);
  
        }
      }, err => {
        this.toastr.error('There are some errors, please try again after some time !', 'Error');
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
