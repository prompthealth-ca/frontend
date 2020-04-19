import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { tap } from 'rxjs/operators';

import { SharedService } from '../../shared/services/shared.service';
import {
    AuthActionTypes,
    LogIn, LogInSuccess, LogInFailure,
  } from '../actions/auth.actions';


@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private sharedService: SharedService,
    private router: Router,
  ) {}

  // effects go here
  @Effect()
LogIn: Observable<any> = this.actions
  .ofType(AuthActionTypes.LOGIN)
  .map((action: LogIn) => action.data)
  .switchMap(data => {
    return this.sharedService.login(data.email, data.password)
      .map((user) => {
        console.log(user);
        return new LogInSuccess({token: user.access_token, email: data.email});
      })
      .catch((error) => {
        console.log(error);
        return Observable.of(new LogInFailure({ error: error }));
      });
  });

}