import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
}


export class LogIn implements Action {
    readonly type = AuthActionTypes.LOGIN;
    constructor(public data: any) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export type All =
  | LogIn
  | LogInSuccess;