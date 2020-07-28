import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  loginForm: FormGroup;

  public professionalLogin = false;
  userType = 'U';
  public submitted = false;
  

  constructor(
    private authService: SocialAuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _sharedService: SharedService,
    private toastr: ToastrService,
  ) { }
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
    switch(this.router.url) {
      case "/auth/login/sp": 
        //some logic
        this.professionalLogin = true;
        this.userType = 'SP'
        break;
      case "/auth/login/c": 
        //some logic
        this.professionalLogin = true;
        this.userType = 'C'
        break;
        case "/auth/login/C": 
          //some logic
          this.professionalLogin = true;
          this.userType = 'C'
          break;

        case "/auth/login/u": 
        //some logic
        this.professionalLogin = false;
        this.userType = 'U'
        break;
      case "/auth/login/u": 
        //some logic
        this.professionalLogin = false;
        this.userType = 'U'
        break;

      default:
        break;

    }
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      termsCondition: [false, [Validators.required]]
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => {
      const payload = {
        socialToken: x.idToken,
        email: x.email,
        roles: this.userType,
        loginType: x.provider.toLowerCase(),
  
      }
      this._sharedService.socialRegister(payload).subscribe((res: any) => {
        this._sharedService.loader('hide');
        if (res.statusCode === 200) {

          this.toastr.success('Welcome');
          this.submitted = false;

          // this.userType === 'U' ? this._router.navigate(['/']) : this._router.navigate(['dashboard/professional-info']);

          this._sharedService.loginUser(res, 'reg');
        } else {
          this.toastr.error(res.message);
        }
      }, (error) => {
        this.toastr.error("There are some error please try after some time.")
        this._sharedService.loader('hide');
      });
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => {
      const payload = {
        socialToken: x.idToken,
        email: x.email,
        roles: this.userType,
        loginType: x.provider.toLowerCase(),
        termsCondition: true
  
      }

      this._sharedService.socialRegister(payload).subscribe((res: any) => {
        this._sharedService.loader('hide');
        if (res.statusCode === 200) {

          this.toastr.success('Welcome');
          this.submitted = false;

          // this.userType === 'U' ? this._router.navigate(['/']) : this._router.navigate(['dashboard/professional-info']);

          this._sharedService.loginUser(res, 'login');
        } else {
          this.toastr.error(res.message);
        }
      }, (error) => {
        this.toastr.error("There are some error please try after some time.")
        this._sharedService.loader('hide');
      });
    });
  }

  loginUser(form: FormGroup) {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    else {
      this.submitted = true;
      let data = JSON.stringify(this.loginForm.value);
      this._sharedService.loader('show');
      this._sharedService.login(data).subscribe((res: any) => {
        this._sharedService.loader('hide');
        if (res.statusCode === 200) {
          this._sharedService.loginUser(res, 'login');
          this.toastr.success(res.message, '', {
            timeOut: 2000
          });

        }
        else {
          this.toastr.error(res.message);
        }

      }, (error) => {
        this.toastr.error(error.error.message)
        this._sharedService.loader('hide');
      });
    }
  }

}
