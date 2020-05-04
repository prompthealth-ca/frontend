import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()

export class AuthService {

  public jwtHelper: JwtHelperService = new JwtHelperService();

  constructor() {}
  // ...
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token ?  true : false;
    // Check whether the token is expired and return
    // true or false
    // return !this.jwtHelper.isTokenExpired(token);
  }
}