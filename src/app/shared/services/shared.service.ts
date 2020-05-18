import { Injectable, Optional, RendererFactory2, ViewEncapsulation, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FlashMessagesService } from 'ngx-flash-messages';
import { NgxSpinnerService } from 'ngx-spinner';

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

  constructor(
    private _router: Router,
    private rendererFactory: RendererFactory2,
    private _flashMessagesService: FlashMessagesService,
    private spinner: NgxSpinnerService,

    @Inject(DOCUMENT) private document,
    private http: HttpClient) { }


  logout() {

    localStorage.removeItem('token');
    localStorage.removeItem('loginID');
    localStorage.removeItem('isPayment');
    localStorage.removeItem('user');
    localStorage.removeItem('roles');
    this.showAlert("Logout Sucessfully", "alert-success");
    this._router.navigate(["/auth/login", "u"]);
  }

  get(path, setParams = {}) {
    const headers = this.getAuthorizationHeader();
    const url = this.rootUrl + path;
    return this.http.get(url, { headers });
  }

  post(body, path) {
    let headers = this.getAuthorizationHeader();
    return this.http.post(this.rootUrl + path, body, { headers });
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

  logingOut() {
    let headers = this.getAuthorizationHeader();
    return this.http.delete(this.rootUrl + 'user/logout', { headers });
  }


  // addPromotion(body) {
  //   let headers = this.getAuthorizationHeader();
  //   return this.http.post(this.rootUrl + 'promotion', body, { headers });
  // }

  // changeStatus(id, model, status) {
  //   let headers = this.getAuthorizationHeader();
  //   let url = this.rootUrl + 'changestatus?id=' + id + '&model=' + model + '&status=' + status;
  //   return this.http.put(url, { headers });

  // }

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
  // delete(Id) {

  //   let headers = this.getAuthorizationHeader();
  //   return this.http.delete(this.rootUrl + 'delete/' + Id ++ '&model=' + model, { headers });
  // }

  delete(id, model) {

    let headers = this.getAuthorizationHeader();
    let url = this.rootUrl + 'delete?id=' + id + '&model=' + model;
    return this.http.delete(url, { headers });
  }

  contactus(body) {
    return this.http.post(this.rootUrl + 'subscribe', body);
  }


  // getView(userID) {

  //   const headers = this.getAuthorizationHeader();
  //   return this.http.get(this.rootUrl + 'promotion' + '?id=' + userID, { headers });

  // }

  // updateProfile(fileItem, extraData?:object, payload){
    
  //   const formData: FormData = new FormData();
  //   formData.append('fileItem', fileItem, fileItem.name);
  //   if (extraData) {
  //     for(let key in extraData){
  //         // iterate and set other form data
  //       formData.append(key, extraData[key])
  //     }
  //   }
  //   let headers = this.getAuthorizationHeader();
  //   return this.http.post(this.rootUrl + 'upload', payload, { headers, formData });
  // }

  uploadImage(object) {
    let headers = this.getAuthorizationHeader();
    return this.http.post(this.rootUrl + 'upload', object, { headers });
  }

  uploadImage1(object) {
    let headers = this.getAuthorizationHeader();
    return this.http.post(this.rootUrl + 'upload', object, { headers });
  }

  // queryParams(path, options) {
  //   let headers = this.getAuthorizationHeader();
  //   let params = new URLSearchParams();
  //   for (let key in options) {
  //     params.set(key, options[key])
  //   }
  //   return this.http.get(this.rootUrl + path + '?' + params.toString(), { headers: headers });
  // }

  // queryParamsDelete(path, options) {
  //   let headers = this.getAuthorizationHeader();
  //   let params = new URLSearchParams();
  //   for (let key in options) {
  //     params.set(key, options[key])
  //   }
  //   return this.http.delete(this.rootUrl + path + '?' + params.toString(), { headers: headers });
  // }

  // getRoles() {
  //   return localStorage.getItem('roles');
  // }

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
  // isLogin() {
  //   let token = localStorage.getItem('token');
  //   if (token) {
      
  //     this._router.navigate(['auth/login', 'u']);
  //     return true;
  //   } 
  //   else return false;
  // }

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
    } else {
      
      localStorage.setItem('isPayment', 'true');
    }

    let route
    if(type === 'reg') {
      route =  res.data.roles === 'U' ? '/dashboard/questionnaire/u' : '/dashboard/professional-info';
    }
    else {
      route =  res.data.roles === 'U' ? '/' : '/dashboard/profilemanagement/my-profile';
    }
    this.showAlert(res.message, 'alert-success');
    this.addCookie('token', res.data.loginToken);
    this.addCookie('roles', res.data.roles);
    this.addCookie('loginID', res.data._id);
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
