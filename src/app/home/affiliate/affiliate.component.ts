import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-affiliate',
  templateUrl: './affiliate.component.html',
  styleUrls: ['./affiliate.component.scss']
})
export class AffiliateComponent implements OnInit {

  affiliateRequestForm: FormGroup;
  submitted = false;
  email: any;
  constructor(
    private formBuilder: FormBuilder,
    private _sharedService: SharedService,
    private toastr: ToastrService,
  ) { }
  get f() { return this.affiliateRequestForm.controls; }

  ngOnInit(): void {
    this.affiliateRequestForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      numberOfUser: [0, [Validators.required]],
      role: ['SP', [Validators.required]],
      message: ['',],
    });
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
      this._sharedService.loader('show');
      let path = 'user/request'
      this._sharedService.postNoAuth(data, path).subscribe((res: any) => {
        this._sharedService.loader('hide');
        if (res.statusCode === 200) {
          this.toastr.success(res.message);
          this.affiliateRequestForm.reset();
          this.submitted = false;

        }

        else {
          this.toastr.error(res.message);
        }
      }, (error) => {
        this._sharedService.loader('hide');
      });
    }

  }

}
