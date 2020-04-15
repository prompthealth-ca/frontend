import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
import { BehaviorService } from '../../shared/services/behavior.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-professional',
  templateUrl: './login-professional.component.html',
  styleUrls: ['./login-professional.component.scss']
})
export class LoginProfessionalComponent implements OnInit {
  loginForm: FormGroup;

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    // private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private _router: Router,
    private _route: ActivatedRoute,
    public _bs: BehaviorService,
    // private socialAuthService: AuthService,
    private _sharedService: SharedService,
    // private userIdle: UserIdleService
  ) { }
  get f() { return this.loginForm.controls; }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],


    });
  }

  loginUser() {

    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    else {
      this.submitted = true;
      let data = JSON.stringify(this.loginForm.value);
      console.log('data', data, this.loginForm);
      this._sharedService.loader('show');
      this._sharedService.login(data).subscribe((res: any) => {
        this._sharedService.loader('hide');
        if (res.success) {
          this._bs.setUser(res.data);
          this._sharedService.loginUser(res);
          this.toastr.success(res.message, '', {
            // disableTimeOut: true
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
