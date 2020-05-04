import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
import { BehaviorService } from '../../shared/services/behavior.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../_helpers/must-match.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  professionalSignup = false
  userType = 'U';

  constructor(private _router: Router,
    public _bs: BehaviorService,
    private _sharedService: SharedService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
  ) { }
  get f() { return this.registerForm.controls; }

  ngOnInit() {
    switch(this._router.url) {
      case "/auth/registration/sp": 
        //some logic
        this.professionalSignup = true;
        this.userType = 'SP'
        break;
      case "/auth/registration/c": 
        //some logic
        this.professionalSignup = true;
        this.userType = 'C'
        break;
      case "/auth/registration/u": 
        //some logic
        this.professionalSignup = false;
        this.userType = 'U'
        break;

      default:
        break;

    }
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      hear_from: ['', [Validators.required]],
      t_c: ['', [Validators.required]],
      roles: this.userType,
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', Validators.required]
    },
      {
        validator: MustMatch('password', 'confirm_password')
      });

  }

  registerUser() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    else {
      this.submitted = true;
      let dataReg = JSON.stringify(this.registerForm.value);

      this._sharedService.loader('show');
      console.log('dataaaaa', dataReg);
      this._sharedService.register(dataReg).subscribe((res: any) => {
        this._sharedService.loader('hide');
        if (res.success) {

          this.toastr.success('Thanks for the registeration we have sent a verification email to the address provided, please verfiy account through the email sent');
          this.registerForm.reset();
          this.submitted = false;

          this.userType === 'C' ? this._router.navigate(['/']) : this._router.navigate(['dashboard/professional-info']);
        } else {
          this.toastr.error(res.error.message);
        }
      }, (error) => {
        this.toastr.error("There are some error please try after some time.")
        this._sharedService.loader('hide');
      });
    }
  }

}
