import { Injectable, Optional, RendererFactory2, ViewEncapsulation, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FlashMessagesService } from 'ngx-flash-messages';
import { NgxSpinnerService } from 'ngx-spinner';
import { PreviousRouteService } from './previousUrl.service'

// import { SocialAuthService } from 'angularx-social-login';

import { Observable } from 'rxjs';

// import 'rxjs/add/operator/toPromise';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { DOCUMENT } from '@angular/common';

declare var jQuery: any;

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

@Injectable()
export class SharedService {
  rootUrl: string = environment.config.BASE_URL;
  //baseUrl: string = environment.config.API_URL;
  type:any
  personalMatch
  constructor(
    // private authService: SocialAuthService,
    private _router: Router,
    private rendererFactory: RendererFactory2,
    private _flashMessagesService: FlashMessagesService,
    private spinner: NgxSpinnerService,
    private previousRouteService: PreviousRouteService,

    @Inject(DOCUMENT) private document,
    private http: HttpClient) { 
      this.type = localStorage.getItem('roles');
   
    }


  logout() {

    localStorage.removeItem('token');
    localStorage.removeItem('loginID');
    // localStorage.removeItem('isPayment');
    localStorage.removeItem('user');
    localStorage.removeItem('roles');
    localStorage.removeItem('isVipAffiliateUser');
    // this.authService.signOut();
    this.showAlert("Logout Sucessfully", "alert-success");

    this._router.navigate(["/auth/login", "u"]);
  }

  get(path, setParams = {}) {
    if(!this.type){
      const url = this.rootUrl + path;
      return this.http.get(url);
    }else{
 const headers = this.getAuthorizationHeader();
 const url = this.rootUrl + path;
 return this.http.get(url,{headers});
    }
   
  }
  getNoAuth(path, setParams = {}) {
    const url = this.rootUrl + path;
    return this.http.get(url );
  }
  post(body, path) {
    let headers = this.getAuthorizationHeader();
    return this.http.post(this.rootUrl + path, body, { headers });
  }
  postNoAuth(body, path) {
    return this.http.post(this.rootUrl + path, body);
  }
  imgUpload(body, path) {
    // let headers = this.getAuthorizationHeader();
    return this.http.post(this.rootUrl + path, body);
  }
  put(body, path) {
    let headers = this.getAuthorizationHeader();
    return this.http.put(this.rootUrl + path, body, { headers });
  }
  login(body) {
    let headers = this.getDefaultHeader();
    return this.http.post(this.rootUrl + 'user/signinUser', body, { headers });
  }
  register(body) {
    let headers = this.getDefaultHeader();
    return this.http.post(this.rootUrl + 'user/register', body, { headers });
  }
  socialRegister(body) {
    
    let headers = this.getDefaultHeader();
    return this.http.post(this.rootUrl + 'user/social-login', body, { headers });
  }
  logingOut() {
    let headers = this.getAuthorizationHeader();
    return this.http.delete(this.rootUrl + 'user/logout', { headers });
  }
  getSubscriptionPlan() {
    let date = new Date().getTime().toString();
    let url = this.rootUrl + 'subscribepackage';

    let headers = this.getAuthorizationHeader();
    return this.http.get(url, { headers });
  }
  getUserDetails() {
    let date = new Date().getTime().toString();
    let url = this.rootUrl + 'getuserdetail';

    let headers = this.getAuthorizationHeader();
    return this.http.get(url, { headers });
  }
  token(body) {
    let headers = this.getAuthorizationHeader();
    return this.http.post(this.rootUrl + 'createcustomer', body, { headers });
  }
  deleteContent(path) {
    let headers = this.getAuthorizationHeader();
    return this.http.delete(this.rootUrl + path, { headers });

  }

  sendEmailSubscribers(data){
    return this.http.post(this.rootUrl + '/user/subscribe', data);
  }

  delete(id, model) {

    let headers = this.getAuthorizationHeader();
    let url = this.rootUrl + 'delete?id=' + id + '&model=' + model;
    return this.http.delete(url, { headers });
  }
  removeFav(id) {
    let headers = this.getAuthorizationHeader();
    let url = this.rootUrl + `user/remove-favorite/${id}`;
    return this.http.delete(url, { headers });
  }
  contactus(body) {
    return this.http.post(this.rootUrl + 'user/contactus', body);
  }
  uploadImage(object) {
    let headers = this.getAuthorizationHeader();
    return this.http.post(this.rootUrl + 'upload', object, { headers });
  }
  uploadImage1(object) {
    let headers = this.getAuthorizationHeader();
    return this.http.post(this.rootUrl + 'upload', object, { headers });
  }
  sendTop() {
    window.scrollTo(500, 0);
  }
  /*This function is use to remove user session if Access token expired. */
  checkAccessToken(err): void {
    let code = err.code;
    let message = err.message;

    if ((code == 401 && message == "authorization")) {
      localStorage.removeItem('token');
      // this.showAlert('Session Expired.', 'alert-danger')
      // this._router.navigate(['/auth/business']);
    } else {

    }
  }

  setPersonalMatch(personalMatch) {
    this.personalMatch = personalMatch;
  }
  getPersonalMatch() {
    return this.personalMatch;
  }
  /*This function is use to get access token from cookie. */
  getAccessToken(): string {
    let token = localStorage.getItem('token');
    return token;
  }

  /*This function is use to get header with Authorization or without Authorization. */
  getAuthorizationHeader(access = true) {
    let token = this.getAccessToken();
    let headers = {}

    if (access) {
      headers = new HttpHeaders()
        .set('Authorization', token)
        .set('Content-Type','application/json');
    }


    return headers;
  }
  getDefaultHeader() {
    
    let headers = new HttpHeaders()
    .set('Content-Type','application/json');
    return headers
  }
  addCookie(key, value) {
    localStorage.setItem(key, value);
  }

  getCookie(key) {
    let item = localStorage.getItem(key);
    return item;
  }
  addCookieObject(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  getCookieObject(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  loginID() {
    return localStorage.getItem('loginID');
  }

  loader(key) {
    if (key == 'show') this.spinner.show();
    if (key == 'hide') this.spinner.hide();
  }

  showAlert(message, alertClass) {
    // window.scrollTo(0, 0);
    let obj = {
      classes: ['alert', alertClass],
      timeout: 1800
    }
    this._flashMessagesService.show(message, obj);
  }


  loginUser(res, type) {
    if (res.data.roles === 'U') {
      this._router.navigate(['home']);
    } 
    let route
    if(type === 'reg') {
      route =  res.data.roles === 'U' ? '/dashboard/questions/User' : '/dashboard/professional-info';
    }
    else {
      if(this.previousRouteService.getPreviousUrl() === '') {

      } else {
        route =  res.data.roles === 'U' ? '/' : '/dashboard/profilemanagement/my-profile';
      }
    }
    this.showAlert(res.message, 'alert-success');
    this.addCookie('token', res.data.loginToken);
    this.addCookie('roles', res.data.roles);
    this.addCookie('loginID', res.data._id);
    this.addCookie('isVipAffiliateUser', res.data.isVipAffiliateUser);
    this.addCookieObject('user', res.data);
    this._router.navigate([route]);
  }

  removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });

  }

}

export declare type LinkDefinition = {
  charset?: string;
  crossorigin?: string;
  href?: string;
  hreflang?: string;
  media?: string;
  rel?: string;
  rev?: string;
  sizes?: string;
  target?: string;
  type?: string;
} & {
  [prop: string]: string;
};
