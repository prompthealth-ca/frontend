import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../shared/services/shared.service';
import { Router } from '@angular/router';

declare var FB: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  @ViewChild('closebutton') closebutton;
  affiliateRequestForm: FormGroup;
  submitted = false;
  email: any;
  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private _sharedService: SharedService,
    private toastr: ToastrService,
  ) { }

    get f() { return this.affiliateRequestForm.controls; }
  ngOnInit() {
    this.affiliateRequestForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', []],
      email: ['', [Validators.required, Validators.email]],
      numberOfUser: ['', [Validators.required]],
      role: ['SP', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  route(path, queryParams) {
    this._router.navigate([path], { queryParams: queryParams });
  }

  subscribe() {
    let data = { email: this.email }
    if (!this.email || ((this.email.indexOf('@') == -1) && (this.email.indexOf('.') == -1))) {
      this._sharedService.showAlert('Please enter valid email id.', 'alert-danger');
      return;
    }
    this._sharedService.loader('show');
    this._sharedService.post(data, 'subscription').subscribe((res: any) => {
      this._sharedService.loader('hide');
      this.email = '';
      if (res.success) {
        this._sharedService.showAlert(res.data.message, 'alert-success');
      } else {
        this._sharedService.showAlert(res.error.message, 'alert-danger');
      }
    }, (error) => { });
  }
  affiliateMe() {
    this.submitted = true;
    if (this.affiliateRequestForm.invalid) {
      return;
    }
    else {
      this.submitted = true;
      let data = this.affiliateRequestForm.value;
      data.isVipAffiliateUser = true;
      console.log('data', data);
      this._sharedService.loader('show');
      let path = 'user/request'
      this._sharedService.postNoAuth(data, path).subscribe((res: any) => {
        this._sharedService.loader('hide');
        if (res.statusCode === 200) {
          this.toastr.success(res.message);
          this.closebutton.nativeElement.click();
          this.affiliateRequestForm.reset();
          this.submitted = false;

        }

        else {
          this._sharedService.showAlert(res.message, 'alert-danger');
        }
      }, (error) => {
        this._sharedService.loader('hide');
      });
    }

  }

}
