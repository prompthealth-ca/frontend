import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
// import { BehaviorService } from '../../shared/services/behavior.service';
// import { UserIdleService } from 'angular-user-idle';
declare var jQuery: any;
// import { AuthService } from 'angular5-social-login';

@Component({
  selector: 'app-app-download-comp',
  templateUrl: './app-download-comp.component.html',
  styleUrls: ['./app-download-comp.component.scss']
})
export class AppDownloadCompComponent implements OnInit {
  public login = {
    username1: '',
    password: ''
  }
  public register = {
    firstName: '',
    lastName: '',
    zipcode: '',
    email: '',
    username1: '',
    password: '',

  }
  public userType = 'endUser';
  public acceptTerms = false;
  public errLogin = false;
  isSignup = true;
  temp: any;
  showSignup = false;
  userEmail;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    // public _bs: BehaviorService,
    // private socialAuthService: AuthService,
    private _sharedService: SharedService,
    // private userIdle: UserIdleService
  ) { }

  ngOnInit() {
    // this.userIdle.startWatching();

    // this.userIdle.onTimerStart().subscribe();
    this._sharedService.sendTop();
    this.temp = this._route.snapshot.queryParams['security']
    if (this._route.snapshot.queryParams['type']) {
      this.userType = this._route.snapshot.queryParams['type'];

    }
    setTimeout(() => {
      this.showSignup = true;
    }, 500)
    // this.userIdle.onTimeout().subscribe(() => {

    //   localStorage.removeItem('token');
    //   this._sharedService.showAlert('Session Expired.', 'alert-danger')
    //   this._router.navigate(['/auth/login-signup', { data: true }]);
    // });
  }

  route(path) {
    this._router.navigate([path]);
  }

  loginUser() {
    if (!this.register.username1) {
      let message = this.userType == 'dispensary' ? 'Please enter valid Business name.' : 'Please enter valid username.';
      this._sharedService.showAlert(message, 'alert-danger');
      return;
    }

    this.errLogin = false;
    if (!this.register.password) {
      this._sharedService.showAlert('Please enter password.', 'alert-danger');
      return;
    }

    this.errLogin = false;
    let data = JSON.parse(JSON.stringify(this.login));
    this._sharedService.loader('show');
    this._sharedService.login(data).subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.success) {
        // this._bs.setUser(res.data);
        // this._sharedService.loginUser(res);

      } else {
        if ('isVerified' in res.error && !res.error.isVerified) {
          jQuery('#verifyDialog').modal({
            show: 'false'
          });
          this.userEmail = res.error.email;
        } else {
          this._sharedService.loader('hide');
          this._sharedService.showAlert(res.error.message, 'alert-danger')
          this.errLogin = true;
        }
      }

    }, (error) => {
      this._sharedService.showAlert("There are some error please try after some time.", 'alert-success')
    });
  }


  registerUser() {

    if (this.userType == 'dispensary' && !this.temp) {
      jQuery('#ageDialog').modal({
        show: 'false'
      });
      return;
    }
    if (!this.validateEmail(this.register.email)) {
      this._sharedService.showAlert('Please enter valid email id.', 'alert-danger');
      return;
    }
    if (!this.register.password) {
      this._sharedService.showAlert('Please enter password.', 'alert-danger');
      return;
    }
    if (!this.register.username1) {
      let message = this.userType == 'dispensary' ? 'Please enter Business name.' : 'Please enter username.';
      this._sharedService.showAlert(message, 'alert-danger');
      return;
    }
    if (!this.acceptTerms) {
      this._sharedService.showAlert('Please accept terms and conditions.', 'alert-danger');
      return;
    }
    let data = JSON.parse(JSON.stringify(this.register));
    data['username'] = data['email'];
    data['Type'] = data['roles'];
    this._sharedService.loader('show');
    this._sharedService.register(data).subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.success) {
        jQuery('#registerDialog').modal({
          show: 'false'
        });
        // this._sharedService.showAlert('Thanks for the registeration we have sent a verification email to the address provided, please verfiy account through the email sent','alert-success');
        this.register = {
          firstName: '',
          lastName: '',
          zipcode: '',
          email: '',
          username1: '',
          password: '',
        }
      } else {
        this._sharedService.showAlert(res.error.message, 'alert-danger');
      }
    }, (error) => {
      this._sharedService.loader('hide');
    });
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  changeType() {
    this._sharedService.loader('show');
    setTimeout(() => {
      this._sharedService.loader('hide');
      this._sharedService.sendTop();

      this.userType = 'dispensary';
    }, 500);
  }


  resendEmail() {
    this._sharedService.loader('show');
    this._sharedService.post({ userName: this.login.username1 }, 'userVerification').subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.success) {
        jQuery('#closeVerifyModal').click()
        this._sharedService.showAlert(res.message, 'alert-success')
      } else {
        this._sharedService.showAlert(res.error.message, 'alert-danger')
      }

    }, (error) => {
      this._sharedService.loader('hide');
    });
  }
  // stop() {
  //   this.userIdle.stopTimer();
  // }

  // stopWatching() {
  //   this.userIdle.stopWatching();
  // }

  // startWatching() {
  //   this.userIdle.startWatching();
  // }

  // restart() {
  //   this.userIdle.resetTimer();
  // }

}



