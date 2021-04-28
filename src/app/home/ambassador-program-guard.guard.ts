import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUserDetail } from '../models/user-detail';

@Injectable({
  providedIn: 'root'
})
export class AmbassadorProgramGuardGuard implements CanActivate {
  constructor(
    private _router: Router,
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    const user: IUserDetail = JSON.parse(localStorage.getItem('user'));
    if(user && user.roles == 'U') {
      this._router.navigate(['/']);
      return false;
    }else{
      return true;
    }
  }
  
}
