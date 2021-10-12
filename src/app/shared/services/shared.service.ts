import { Injectable, Optional, RendererFactory2, ViewEncapsulation, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { PreviousRouteService } from './previousUrl.service';
import { BehaviorService } from './behavior.service';


// import { SocialAuthService } from 'angularx-social-login';

import { BehaviorSubject, throwError } from 'rxjs';

// import 'rxjs/add/operator/toPromise';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { PostManagerService } from 'src/app/post-manager/post-manager.service';
import { ProfileManagementService } from 'src/app/dashboard/profileManagement/profile-management.service';

import { DOCUMENT } from '@angular/common';
import { UniversalService } from './universal.service';
import { IStripeCheckoutData } from 'src/app/models/stripe-checkout-data';
import { StripeService } from 'ngx-stripe';
import { IUserDetail } from 'src/app/models/user-detail';
import { IDefaultPlan } from 'src/app/models/default-plan';
import { IAddonPlan } from 'src/app/models/addon-plan';
import { ICouponData } from 'src/app/models/coupon-data';
import { ToastrService } from 'ngx-toastr';
import { Professional } from 'src/app/models/professional';
import { SocialService } from 'src/app/social/social.service';
import { AngularFireMessaging } from '@angular/fire/messaging';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

@Injectable()
export class SharedService {
  constructor(
    private _router: Router,
    private spinner: NgxSpinnerService,
    private previousRouteService: PreviousRouteService,
    private _bs: BehaviorService,
    private _uService: UniversalService,
    private _stripeService: StripeService,
    private _postManager: PostManagerService,
    private _profileManager: ProfileManagementService,
    private _socialManager: SocialService,
    private _toastr: ToastrService,
    private angularFireMessaging: AngularFireMessaging,

    @Inject(DOCUMENT) private document,
    private http: HttpClient) {
    this.receiveMessage();
    // console.log('fcm loaded');
    // this.type = this._uService.localStorage.getItem('roles');
  }
  currentMessage = new BehaviorSubject(null);

  rootUrl: string = environment.config.API_URL;
  // baseUrl: string = environment.config.API_URL;
  // type: any;
  personalMatch;
  private compareList: Professional[] = [];

  requestPermission(user: User) {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        // console.log(token);
        this.post({ token, deviceType: 'web' }, 'notification/save-token').toPromise().then(res => {
          // console.log('token saved to db', res);
        });
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload: any) => {
        console.log('new message received. ', payload);
        this.currentMessage.next(payload);
        // const notification: { title: string, body: string, image: string } = payload.notification;
        // const noti = new Notification(notification.title, {
        //   body: notification.body,
        //   image: notification.image
        // });
      });
  }

  async logout(navigate: boolean = true) {
    // console.log(token);
    await this.angularFireMessaging.getToken.toPromise().then(token => {
      this.post({ token, deviceType: 'web' }, 'notification/remove-token').toPromise().then(res => {
        console.log('Cleared fcm token');
      });
    }).catch(error => {
      console.error(error);
    });

    this._socialManager.dispose();
    this._postManager.dispose();
    this._profileManager.dispose();

    const ls = this._uService.localStorage;

    ls.removeItem('token');
    ls.removeItem('loginID');
    ls.removeItem('user');
    ls.removeItem('roles');
    ls.removeItem('isVipAffiliateUser');

    this._bs.setUserData(null);
    this._toastr.success('Logged out successfully');
    ls.setItem('userType', 'U');
    if (navigate) {
      this._router.navigate(['/']);
    }
  }

  get(path, setParams = {}) {
    const token = this._uService.localStorage.getItem('token');
    if (!token) {
      const url = this.rootUrl + path;
      return this.http.get(url);
    } else {
      const headers = this.getAuthorizationHeader();
      const url = this.rootUrl + path;
      return this.http.get(url, { headers });
    }

  }
  getNoAuth(path: string, params = {}) {
    const url = this.rootUrl + path;
    return this.http.get(url, { params });
  }
  b64ToBlob(data: string) {
    const regExContentType = /data:(image\/.+);base64/;
    const contentType = data.match(regExContentType)[1];

    const byteString = atob(data.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: contentType });
  }

  downloadFile(filepath: string, filename: string = null): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const headers = this.getAuthorizationHeader();
      return this.http.post(this.rootUrl + '/common/file-download', { fileKey: filepath }, { headers, responseType: 'blob' }).subscribe((res: any) => {

        if (!filename) {
          const array = filepath.split('/');
          filename = array[array.length - 1];
        }

        const a = document.createElement('a');
        a.href = URL.createObjectURL(res);
        a.download = filename;
        a.click();
        URL.revokeObjectURL(res);
        resolve(true);
      }, error => {
        reject(error);
      });
    });
  }

  post(body, path) {
    const headers = this.getAuthorizationHeader();
    return this.http.post(this.rootUrl + path, body, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
    // return this.http.post(this.rootUrl + path, body, { headers });
  }
  postNoAuth(body, path) {
    return this.http.post(this.rootUrl + path, body).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
    // return this.http.post(this.rootUrl + path, body),catchError(this.handleError);
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  async shrinkImage(file: File, maxFileSize: number = 10 * 1000 * 1000, ratioSize: number = 0.8, ratioQuality: number = 0.8): Promise<{ file: Blob, filename: string }> {
    return new Promise((resolve, reject) => {
      if (file.size > maxFileSize) {
        const img = new Image();
        img.onload = (e: any) => {
          const t = e.target;
          const canvas = document.createElement('canvas');
          canvas.width = Math.round(t.width * ratioSize);
          canvas.height = Math.round(t.height * ratioSize);
          const ctx = canvas.getContext('2d');

          ctx.drawImage(t, 0, 0, canvas.width, canvas.height);
          canvas.toBlob((b: Blob) => {
            if (b.size >= maxFileSize) { reject('size is too big'); } else {
              const filename = Date.now().toString() + '.' + b.type.replace('image/', '');
              resolve({ file: b, filename });
            }
          }, file.type, ratioQuality);
        };
        img.src = URL.createObjectURL(file);
      } else {
        resolve({ file, filename: file.name });
      }
    });
  }

  async shrinkImageByFixedWidth(file: File | Blob, width: number = 1500): Promise<{ file: Blob, filename: string }> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = (e: any) => {
        const t = e.target;
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = img.height * width / img.width;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((b: Blob) => {
          const filename = Date.now().toString() + '.' + b.type.replace('image/', '');
          resolve({ file: b, filename });
        }, file.type);
      };
      img.src = URL.createObjectURL(file);
    });
  }


  async shrinkImageByFixedHeight(file: File, height: number = 100): Promise<{ file: Blob, filename: string }> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = (e: any) => {
        const t = e.target;
        const canvas = document.createElement('canvas');
        canvas.width = img.width * height / img.height;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((b: Blob) => {
          const filename = Date.now().toString() + '.' + b.type.replace('image/', '');
          resolve({ file: b, filename });
        }, file.type);
      };
      img.src = URL.createObjectURL(file);
    });
  }

  imgUpload(body, path) {
    let headers = this.getAuthorizationHeader();
    headers = headers.delete('Content-Type');
    return this.http.post(this.rootUrl + path, body, { headers });
  }

  uploadMultipleImages(images: { file: File | Blob, filename: string }[], userId: string, imageLocation: string) {
    const data = new FormData();
    data.append('imgLocation', imageLocation);
    data.append('_id', userId);
    images.forEach(image => {
      data.append('images', image.file, image.filename);
    });

    const path = (images.length == 1) ? 'common/imgUpload' : 'common/imgMultipleUpload';
    return this.imgUpload(data, path);
  }

  imgUploadPut(body, path) {
    let headers = this.getAuthorizationHeader();
    headers = headers.delete('Content-Type');
    return this.http.put(this.rootUrl + path, body, { headers });
  }

  put(body, path) {
    const headers = this.getAuthorizationHeader();
    return this.http.put(this.rootUrl + path, body, { headers });
  }
  login(body) {
    const headers = this.getDefaultHeader();
    // return this.http.post(this.rootUrl + 'user/signinUser', body, { headers });
    return this.http.post(this.rootUrl + 'oauth/withpassword', body, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }
  register(body) {
    const headers = this.getDefaultHeader();
    // return this.http.post(this.rootUrl + 'user/register', body, { headers });
    return this.http.post(this.rootUrl + 'user/register', body, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  unsubscribe(email) {
    // let headers = this.getDefaultHeader();
    return this.http.delete(this.rootUrl + 'user/unsubscribe/' + email).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  socialRegister(body) {

    const headers = this.getDefaultHeader();
    return this.http.post(this.rootUrl + 'user/social-login-2', body, { headers });
  }
  socialSignin(body, type) {
    const headers = this.getDefaultHeader();
    // console.log(headers);

    switch (type) {
      case 'google':
        return this.http.get(this.rootUrl + 'oauth/googlesignin?access_token=' + body.authToken
          + '&role=' + body.roles, {
          headers
        });
      case 'facebook':
        return this.http.get(this.rootUrl + 'oauth/facebooksignin?access_token=' + body.authToken
          + '&role=' + body.roles, {
          headers
        });
      default:
        break;
    }
  }
  logingOut() {
    const headers = this.getAuthorizationHeader();
    return this.http.delete(this.rootUrl + 'oauth/logout', { headers });
  }
  getSubscriptionPlan() {
    const date = new Date().getTime().toString();
    const url = this.rootUrl + 'subscribepackage';

    const headers = this.getAuthorizationHeader();
    return this.http.get(url, { headers });
  }
  getUserDetails() {
    const date = new Date().getTime().toString();
    const url = this.rootUrl + 'getuserdetail';

    const headers = this.getAuthorizationHeader();
    return this.http.get(url, { headers });
  }
  token(body) {
    const headers = this.getAuthorizationHeader();
    return this.http.post(this.rootUrl + 'createcustomer', body, { headers });
  }
  deleteContent(path) {
    const headers = this.getAuthorizationHeader();
    return this.http.delete(this.rootUrl + path, { headers });

  }

  removeProfile(formData) {
    const headers = this.getAuthorizationHeader();
    return this.http.put(this.rootUrl + 'user/updateStatus', formData, { headers });
  }

  sendEmailSubscribers(data) {
    return this.http.post(this.rootUrl + 'user/subscribe', data);
  }

  delete(id, model) {

    const headers = this.getAuthorizationHeader();
    const url = this.rootUrl + 'delete?id=' + id + '&model=' + model;
    return this.http.delete(url, { headers });
  }
  removeFav(id) {
    const headers = this.getAuthorizationHeader();
    const url = this.rootUrl + `user/remove-favorite/${id}`;
    return this.http.delete(url, { headers });
  }
  contactus(body) {
    return this.http.post(this.rootUrl + 'user/contactus', body);
  }
  uploadImage(object) {
    const headers = this.getAuthorizationHeader();
    return this.http.post(this.rootUrl + 'upload', object, { headers });
  }
  uploadImage1(object) {
    const headers = this.getAuthorizationHeader();
    return this.http.post(this.rootUrl + 'upload', object, { headers });
  }
  sendTop() {
    window.scrollTo(500, 0);
  }
  /*This function is use to remove user session if Access token expired. */
  checkAccessToken(err): void {
    const code = err.code;
    const message = err.message;

    if (code === 401 && message === 'authorization') {
      this._uService.localStorage.removeItem('token');
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
  clearPersonalMatch() { this.personalMatch = null; }
  setCompareList(compareList: Professional[] = []) {
    this.compareList = compareList;
  }
  getCompareList() {
    return this.compareList;
  }

  /*This function is use to get access token from cookie. */
  getAccessToken(): string {
    const token = this._uService.localStorage.getItem('token');
    return token;
  }

  /*This function is use to get header with Authorization or without Authorization. */
  getAuthorizationHeader(access = true): HttpHeaders {
    const token = this.getAccessToken();
    let headers: HttpHeaders = null;

    if (access) {
      headers = new HttpHeaders()
        .set('Authorization', token)
        .set('Content-Type', 'application/json');
    }


    return headers;
  }
  getDefaultHeader() {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return headers;
  }
  addCookie(key, value) {
    this._uService.localStorage.setItem(key, value);
  }

  getCookie(key) {
    const item = this._uService.localStorage.getItem(key);
    return item;
  }
  addCookieObject(key, obj) {
    this._uService.localStorage.setItem(key, JSON.stringify(obj));
  }

  getCookieObject(key) {
    return JSON.parse(this._uService.localStorage.getItem(key));
  }

  loginID() {
    return this._uService.localStorage.getItem('loginID');
  }

  loader(key) {
    if (key == 'show') { this.spinner.show(); }
    if (key == 'hide') { this.spinner.hide(); }
  }

  showAlert(message, alertClass) {
    // window.scrollTo(0, 0);
    const obj = {
      classes: ['alert', alertClass],
      timeout: 1800
    };
    // this._flashMessagesService.show(message, obj);
  }


  loginUser(res, type) {
    let route;
    if (res.data.roles === 'U') {
      // this._router.navigate(['/']);
      route = res.data.roles === 'U' ? '/' : '';
    } else {
      if (type === 'reg') {
        switch (res.data.roles.toLowerCase()) {
          case 'u': route = '/dashboard/questions/User'; break;
          case 'p': route = '/dashboard/register-product'; break;
          case 'sp':
          case 'c':
            route = '/dashboard/professional-info';
            break;
        }
      } else {
        if (this.previousRouteService.getPreviousUrl() === '') {

        } else {
          route = res.data.roles === 'U' ? '/' : '/dashboard/profilemanagement/';
        }
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
    const newArray = [];
    const lookupObject = {};

    for (const i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (const i in lookupObject) {
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

  isCouponApplicableTo(coupon: ICouponData, role: string): boolean {
    if (!coupon) { return false; }
    if (!coupon.metadata.roles || coupon.metadata.roles.length == 0) {
      return true;
    } else {
      const rolesStr = coupon.metadata.roles.replace(/'/g, '"');
      const roles: string[] = JSON.parse(rolesStr);
      if (roles.includes(role)) {
        return true;
      } else {
        return false;
      }
    }
  }

  async checkoutPlan(
    user: IUserDetail,
    plan: IDefaultPlan | IAddonPlan,
    type: StripeCheckoutType,
    monthly: boolean,
    metadata = {}, // this is for addon plan
    option: ICheckoutPlanOption = {}
  ): Promise<{ message: string, nextAction: string }> {
    const result = { message: null, nextAction: null };
    if (plan.price == 0 && plan.name == 'Basic') {
      try {
        result.message = await this.checkoutFreePlan(user, (plan as IDefaultPlan));
        result.nextAction = 'complete';
        return result;
      } catch (error) {
        throw error;
      }
    } else {
      try {
        result.message = await this.checkoutPremiumPlan(user, plan, type, monthly, metadata, option);
        result.nextAction = 'stripe';
        return result;
      } catch (error) {
        throw error;
      }
    }
  }

  private checkoutFreePlan(user: IUserDetail, plan: IDefaultPlan): Promise<string> {
    return new Promise((resolve, reject) => {
      const payload: IUserDetail = { _id: user._id, plan };
      this.post(payload, 'user/updateProfile').subscribe((res: any) => {
        if (res.statusCode === 200) { resolve(res.message); } else { reject(res.message); }
      }, err => {
        console.log(err);
        reject('There are some errors, please try again after some time!');
      });
    });
  }

  private checkoutPremiumPlan(
    user: IUserDetail,
    plan: IDefaultPlan | IAddonPlan,
    type: StripeCheckoutType,
    monthly: boolean,
    metadata = null,
    option: ICheckoutPlanOption = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const ss = this._uService.sessionStorage;
      const savedCoupon: ICouponData = JSON.parse(ss.getItem('stripe_coupon_code'));
      const _option = new CheckoutPlanOption(option, user.roles);
      // console.log(user);
      const payload: IStripeCheckoutData = {
        cancel_url: _option.cancelUrl,
        success_url: _option.successUrl,
        userId: user._id,
        userType: user.roles,
        email: user.email,
        plan,
        isMonthly: monthly,
        type,
      };
      if (metadata) {
        payload.metadata = metadata;
      }

      if (savedCoupon && this.isCouponApplicableTo(savedCoupon, user.roles)) {
        payload.coupon = savedCoupon.id;
        // payload.success_url += '?action=couponused';
      }

      this.post(payload, 'user/checkoutSession').subscribe((res: any) => {
        if (res.statusCode === 200) {
          // console.log(res.data);
          this._stripeService.changeKey(environment.config.stripeKey);

          if (res.data.type === 'checkout') {
            this._stripeService.redirectToCheckout({ sessionId: res.data.sessionId }).subscribe(stripeResult => {
              // console.log('success!');
            }, error => {
              console.log(error);
            });
            resolve('Checking out...');
          } else if (res.data.type === 'portal') {
            // console.log(res.data);
            location.href = res.data.url;
            resolve('You already have this plan. Redirecting to billing portal.');
          }
        } else {
          console.log(res);
          reject(res.message);
        }
      }, (error) => {
        console.log(error);
        if (error.errorCode === 'COUPON_INVALID') {
          ss.removeItem('stripe_coupon_code');
        }
        reject(error);
      });
    });
  }

  getReferrer() {
    const ref = document.referrer;
    let res: string;
    if (!ref || ref.length == 0) {
      res = 'direct';
    } else {
      res = ref.replace(/http(s)?:\/\//, '').replace(/\/.*$/, '');
    }
    return res;
  }
}



type StripeCheckoutType = 'default' | 'addon';

interface ICheckoutPlanOption {
  cancelUrl?: string; // default: '/plans' || '/plans/product'
  successUrl?: string; // default: '/community'
  showSuccessMessage?: boolean; // default true
  showErrorMessage?: boolean; // default true
}

class CheckoutPlanOption implements ICheckoutPlanOption {

  /** if user cancel, user cannot go back to questionnaire page, because data is already destroyed and user will be guarded to access */
  get cancelUrl() {
    const url = location.origin + (this.data.cancelUrl ? this.data.cancelUrl : ('/plans' + (this.role == 'P' ? '/product' : '')));
    return url + (this._showErrorMessage ? '?action=stripe-cancel' : '');
  }

  /** currently, practitioner complete page url is same as product complete page. */
  get successUrl() {
    const url = location.origin + (this.data.successUrl ? this.data.successUrl : '/community');
    return url + (this._showSuccessMessage ? '?action=stripe-success' : '');
  }

  private _showSuccessMessage: boolean;
  private _showErrorMessage: boolean;

  constructor(private data: ICheckoutPlanOption, private role: IUserDetail['roles']) {
    this._showSuccessMessage = (data.showSuccessMessage === false) ? false : true;
    this._showErrorMessage = (data.showErrorMessage === false) ? false : true;
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
