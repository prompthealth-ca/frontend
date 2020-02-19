import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { SharedService } from '../../shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
  homeForm: FormGroup;
  submitted = false;
  _host = environment.config.BASE_URL;

  constructor(private router: Router, private formBuilder: FormBuilder, private _sharedService: SharedService, private toastr: ToastrService) { }
  get f() { return this.homeForm.controls; }
  ngOnInit(): void {
    this.homeForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],

    });
  }

  submit() {
    // alert("here");


    this.submitted = true;
    let data = JSON.stringify(this.homeForm.value);

    // this._sharedService.loader('show');
    this._sharedService.contactus(data).subscribe((res: any) => {
      // this._sharedService.loader('hide');
      if (res.success) {
        this.toastr.success(res.message);

        this.homeForm.reset();
        this.submitted = false;

      }

      else {
        this.toastr.error("Please enter valid email");
      }
    }, (error) => {
      // this._sharedService.loader('hide');
    });
  }

}



