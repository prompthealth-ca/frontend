import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserDetail } from 'src/app/models/user-detail';
import { UniversalService } from 'src/app/shared/services/universal.service';

@Component({
  selector: 'app-register-questionnaire-complete',
  templateUrl: './register-questionnaire-complete.component.html',
  styleUrls: ['./register-questionnaire-complete.component.scss']
})
export class RegisterQuestionnaireCompleteComponent implements OnInit {

  constructor(
    private _router: Router,
    private _uService: UniversalService,
  ) { }

  public routePlan: string[];

  ngOnInit(): void {
    this._uService.setMeta(this._router.url, {
      title: 'Registration complete | PromptHealth',
    });

    const routePlan = ['/plans'];
    const userStr = this._uService.localStorage.getItem('user');
    if(userStr) {
      const user: IUserDetail = JSON.parse(userStr);
      if(user.roles == 'P') {
        routePlan.push('product');
      }
    }
    this.routePlan = routePlan;
  }
}

