import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
import { BehaviorService } from '../../shared/services/behavior.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../_helpers/must-match.validator';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    public _bs: BehaviorService,
    private _sharedService: SharedService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
  ) { }
  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      hear_from: ['', [Validators.required]],
      t_c: ['', [Validators.required]],
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
