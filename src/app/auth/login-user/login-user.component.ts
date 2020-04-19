import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  loginForm: FormGroup;

  public professionalLogin = false;
  public submitted = false;
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _sharedService: SharedService,
    private toastr: ToastrService,
  ) { }
  ngOnInit(): void {
    switch(this.router.url) {
      case "/auth/loginsp": 
        //some logic
        this.professionalLogin = true;
        // this.userType = 'SP'
        break;
      case "/auth/loginc": 
        //some logic
        this.professionalLogin = true;
        // this.userType = 'C'
        break;
      case "/auth/loginu": 
        //some logic
        this.professionalLogin = false;
        // this.userType = 'U'
        break;

      default:
        break;

    }
    console.log('_route', this.router.url);
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      termsCondition: [false, [Validators.required]]
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
      // this.store.dispatch(new LogIn(data));
      console.log('data', data, this.loginForm);
      this._sharedService.loader('show');
      this._sharedService.login(data).subscribe((res: any) => {
        this._sharedService.loader('hide');
        if (res.success) {
          // this._bs.setUser(res.data);
          this._sharedService.loginUser(res);
          this.toastr.success(res.message, '', {
            // disableTimeOut: truex
            timeOut: 2000
          });

        }
        else {
          this.toastr.error(res.error.message, '', {
            // disableTimeOut: true
            timeOut: 2000
          });


        }

      }, (error) => {
        this.toastr.error("There are some error please try after some time.")
        this._sharedService.loader('hide');
      });
    }
  }

}
