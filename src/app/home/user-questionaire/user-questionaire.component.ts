import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { IUserDetail } from 'src/app/models/user-detail';
import { CategoryService } from 'src/app/shared/services/category.service';
import { QuestionnaireItemData, RegisterQuestionnaireService } from 'src/app/dashboard/register-questionnaire.service';
import { UniversalService } from 'src/app/shared/services/universal.service';

@Component({
  selector: 'app-user-questionaire',
  templateUrl: './user-questionaire.component.html',
  styleUrls: ['./user-questionaire.component.scss']
})
export class UserQuestionaireComponent implements OnInit {

  public data: QuestionnaireItemData[] = [
    {route: 'gender', label: 'Gender', isComplete: false},
    {route: 'age', label: 'Age', isComplete: false},
    {route: 'background', label: 'Health Background', isComplete: false},
    {route: 'goal', label: 'Goal', isComplete: false},
  ];
  public currentIdx = 0;

  private subscriptionIndex: Subscription;
  private subscriptionFinish: Subscription;

  constructor(
    private _toastr: ToastrService,
    private _router: Router,
    private _sharedService: SharedService,
    private _qService: RegisterQuestionnaireService,
    private _changeDetector: ChangeDetectorRef,
    private _catService: CategoryService,
    private _uService: UniversalService,
  ) {}

  ngOnDestroy() {
    if(this.subscriptionIndex) { this.subscriptionIndex.unsubscribe(); }
    if(this.subscriptionFinish) { this.subscriptionFinish.unsubscribe(); }
  }

  ngOnInit(): void {
    this._uService.setMeta(this._router.url);
    
    this._qService.init(this.data, {});

    /** get service list in advance so that goal tab in personal match can be rendered immediately */
    this._catService.getCategoryAsync(); 

    this.subscriptionIndex = this._qService.observeIndex().subscribe((i: number) => {
      this.currentIdx = i;
      this._changeDetector.detectChanges();
    });

    this.subscriptionFinish = this._qService.observeFinish().subscribe((isCompleteAll: boolean) => {
      if(!isCompleteAll){
        this._toastr.error('You haven\'t enter some sections. Please review from beginning.');
      }
      else{ 
        this._sharedService.loader('show');
        try{
          const personalMatch = this._qService.getUser();
          if(personalMatch.gender == 'Prefer Not To Say') { personalMatch.gender = null; }
          this._sharedService.setPersonalMatch(personalMatch);

          const data = this._qService.getUserTracking();

          const [ipLat, ipLng] = [localStorage.getItem('ipLat'), localStorage.getItem('ipLong')];
          if(ipLat && ipLng){ data.location = [Number(ipLat), Number(ipLng)]}

          const user:IUserDetail = JSON.parse(localStorage.getItem('user'));
          data.roles = user ? user.roles : 'U';

          this._router.navigate(['/practitioners']);          
        }catch(err){
          this._toastr.error(err);
        }finally{
          this._sharedService.loader('hide');
        }
      }
    });
  }

  onClickNavigation(type: string){ this._qService.navigateByParent(type); }
}
