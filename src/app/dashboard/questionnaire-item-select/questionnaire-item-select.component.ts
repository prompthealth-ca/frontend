import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';

import{ QuestionnaireService } from '../questionnaire.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questionnaire-item-select',
  templateUrl: './questionnaire-item-select.component.html',
  styleUrls: ['./questionnaire-item-select.component.scss']
})
export class QuestionnaireItemSelectComponent implements OnInit {


  public questionnaire: any;

  public isSelectionsVisible: boolean = false;
  public idxOptionFocused: number;

  public isInvalid: boolean = false;
  public isFirstQuestion: boolean = true;
  public isLastQuestion: boolean = false;
  
  private type: string;
  private subscription: Subscription = null;

  constructor(
    private _qService: QuestionnaireService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
  }

  ngDestroy(){ if(!!this.subscription){ this.subscription.unsubscribe(); } }

  ngOnInit(): void {
    this._route.data.subscribe(data=>{
      this.type = data.q;
      this._qService.setCurrentQuestionnaireType(this.type);
      this.isFirstQuestion = this._qService.isFirstQuestion();
      this.isLastQuestion = this._qService.isLastQuestion();

      this.questionnaire = this._qService.getQuestionnaire();
      if(!this.questionnaire){
        this.subscription = this._qService.observeQuestionnaire().subscribe((q: any)=>{
          this.questionnaire = q;
        });  
      }
    });
  } 

  toggleSelectionVisibility(state: 'hide' | 'show' = null){
    if(state == 'hide'){ this.isSelectionsVisible = false; }
    else if(state == 'show'){ this.isSelectionsVisible = true; }
    else{ this.isSelectionsVisible = !this.isSelectionsVisible; }

    if(this.isSelectionsVisible && !this.idxOptionFocused){ this.idxOptionFocused = 0;}
  }

  isOptionFocused(i: number){ return (this.idxOptionFocused === i); }
  
  focusNextOption(e: KeyboardEvent){
    switch(e.key){
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        this.idxOptionFocused = this.idxOptionFocused + this.questionnaire.answers.length - 1;
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        this.idxOptionFocused ++;
        break;
    }

    this.idxOptionFocused = this.idxOptionFocused % this.questionnaire.answers.length;
  }

  select(idx: number){
    this.questionnaire.answers.forEach((a,i)=>{ a.active = (idx == i)? true : false; })
    this.isSelectionsVisible = false;
    this.isInvalid = false;
  }

  getSelectedText(){
    var text = 'Select';
    if(!this.questionnaire){ return text; }
    
    for(var i=0; i<this.questionnaire.answers.length; i++){
      var a = this.questionnaire.answers[i];
      if(a.active){ text = a.item_text; break; }
    }
    return text;
  }

  cancel(){
    this.isInvalid = false;

    var preRoute = this._qService.getQuestionnaireTypePre();
    if(preRoute){ this.goto(preRoute, true); }
  }

  submit(){
    var isInvalid = true;
    for(var i=0; i<this.questionnaire.answers.length; i++){
      var q = this.questionnaire.answers[i];
      if(q.active){ isInvalid = false; break; }
    }

    this.isInvalid = isInvalid;
    if(isInvalid){ return; }

    var nextRoute = this._qService.getQuestionnaireTypeNext();
    if(nextRoute){ this.goto(nextRoute); }
    else{ this._qService.emitSubmit(); }

    return;
  }

  goto(route: string, replaceUrl: boolean = false){
    this._router.navigate(['../', route], {relativeTo: this._route, replaceUrl: replaceUrl});
  }
}
