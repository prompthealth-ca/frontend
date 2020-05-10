import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SharedService } from '../../shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    forgotForm: FormGroup;
    submitted = false;
    professionalOption = false
    public email

    constructor(
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private _router: Router,
        private _sharedService: SharedService) { }
    get ff() { return this.forgotForm.controls; }

    ngOnInit() {
        this._sharedService.sendTop();
        this.forgotForm = this.formBuilder.group({

            email: ['', [Validators.required, Validators.email]],

        });
    }

    submit() {
        this.submitted = true;

        if (this.forgotForm.invalid) {
            return;
        }
        else {
            this.submitted = true;
            let data = JSON.stringify(this.forgotForm.value);

            this._sharedService.loader('show');
            this._sharedService.post(data, 'forgotpassword').subscribe((res: any) => {
                this._sharedService.loader('hide');
                if (res.success) {
                    console.log(">>>>>>>", res)
                    this.toastr.success(res.data.message);
                    this._router.navigate(['/auth/loginu']);

                } else {
                    this._sharedService.loader('hide');
                    if (res.success == false)
                        this.toastr.error(res.error.message);

                }

            }, (error) => {
                this.toastr.error("There are some error please try after some time.");
            });
        }
    }
    handleChange(url) {
        
        this._router.navigate([url]);
    }


    // validateEmail(email) {
    //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    // }

}
