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
  match = false;
  subMatch = false

  public subRes;
  // public subRes1 = {
  //   questionare: 'Option 2',
  //   answer: [
  //     {
  //       id : 1,
  //       text: "Option 1",
  //       subans: false,
  //     },
  //     {
  //       id : 2,
  //       text: "Option 2",
  //       subans: false
  //     },
  //     {
  //       id : 3,
  //       text: "Option 3",
  //       subans: false
  //     },
  //     {
  //       id : 4,
  //       text: "Option 4",
  //       subans: true
  //     },
  //   ],
  //   choiceType: "multiple",
  //   questionType: "Age"
  // } 
  // public subRes2 = {
  //   questionare: 'Option 1',
  //   answer: [
  //     {
  //       id : 1,
  //       text: "Option 1",
  //       subans: false,
  //     },
  //     {
  //       id : 2,
  //       text: "Option 2",
  //       subans: false
  //     },
  //     {
  //       id : 3,
  //       text: "Option 3",
  //       subans: false
  //     },
  //     {
  //       id : 4,
  //       text: "Option 4",
  //       subans: true
  //     },
  //   ],
  //   choiceType: "multiple",
  //   questionType: "Age"
  // }
  // public subRes3 = {
  //   questionare: 'Option 3',
  //   answer: [
  //     {
  //       id : 1,
  //       text: "Option 1",
  //       subans: false,
  //     },
  //     {
  //       id : 2,
  //       text: "Option 2",
  //       subans: false
  //     },
  //     {
  //       id : 3,
  //       text: "Option 3",
  //       subans: false
  //     },
  //     {
  //       id : 4,
  //       text: "Option 4",
  //       subans: true
  //     },
  //   ],
  //   choiceType: "multiple",
  //   questionType: "Age"
  // }
  public res = {
    success: true,
    questionare: [{
      questions:"Question 1",
      answer: [
          {
            id : 1,
            text: "Option 1",
            subans: false,
          },
          {
            id : 2,
            text: "Option 2",
            subans: true
          },
          {
            id : 3,
            text: "Option 3",
            subans: false
          },
          {
            id : 4,
            text: "Option 4",
            subans: false
          },
      ],
      choiceType: "multiple",
      questionType: "Age"
    },
    {
      questions:"Question 2",
      answer:[
        {
          id : 1,
          text: "Option 1",
          subans: true,
        },
        {
          id : 2,
          text: "Option 2",
          subans: false,
        },
        {
            id : 3,
            text: "Option 3",
            subans: false,
        },

      ],
      choiceType: "multiple",
      questionType: "Age"
    },

    {
      questions:"Question 3",
      answer:[
        {
          id : 1,
          text: "Option 1",
          subans: false,
        },
        {
          id : 2,
          text: "Option 2",
          subans: false,
        },
        {
            id : 3,
            text: "Option 3",
            subans: true,
        },

      ],
      choiceType: "multiple",
      questionType: "Age"
    }
  ]
  };

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

      console.log('this.questionnaire-------', res.questionare);
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
  getSubAns(evt) {
  //   setTimeout(()=>{
  //     if(evt.target.name === 'Option 1') {
  //       this.subRes = this.subRes2
  //     }
  //     if(evt.target.name === 'Option 2') {
  //       this.subRes = this.subRes1
  //     }
  //     if(evt.target.name === 'Option 3') {
  //       this.subRes = this.subRes3
  //     }
  //     this.subRes = {
  //       questions: "Option 2",
  //       answer:[{
  //         id: 1,
  //         text: "Sub Option 1",
  //         subans: {
  //           questions: "Sub Option 1",
  //           answer:[
  //               {
  //                   id: 1,
  //                   text: "Sub Option Level Two A",
  //               },
  //               {
  //                   id: 2,
  //                   text: "Sub Option Level Two B",
  //               },
  //               {
  //                 id: 3,
  //                 text: "Sub Option Level Two C",
  //               },
  //               {
  //                   id: 4,
  //                   text: "Sub Option Level Two D",
  //               },
  //               {
  //                 id: 5,
  //                 text: "Sub Option Level Two E",
  //             },
  //             {
  //                 id: 6,
  //                 text: "Sub Option Level Two F",
  //             }
  //           ],
  //           choiceType: "multiple",
  //         },
  //       }, 
  //       {
  //         id: 2,
  //         text: "Sub Option 2",
  //         subans: false,
  //       },
  //       {
  //         id: 3,
  //         text: "Sub Option 3",
  //         subans: false,
  //       }],
  //       choiceType: "multiple",
  //     }
  //   }, 3000);


  //   console.log('subRes......', this.subRes)

  }
}
