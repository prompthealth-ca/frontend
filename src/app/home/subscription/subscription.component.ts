import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  email: any
  private _SubcriberObservable: any;

  constructor(private toastr: ToastrService, private _sharedService: SharedService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  Subscribe() {
    if (this.email) {
      this.spinner.show();
      var data = {
        'email': this.email
      }
      this._SubcriberObservable = this._sharedService.sendEmailSubscribers(data).subscribe((res: any) => {
        this.spinner.hide();
        if (res.statusCode == 200) {
          this.toastr.success(res.message);
          this.email = '';
        } else {
          this.toastr.error(res.error.message);
        }
      },
        error => {
          this.spinner.hide();
          this.toastr.error(error);
        }
      )
    } else {
      this.toastr.warning('Email field is empty!');
    }
  }

  ngOnDestroy(): void {
    if (this._SubcriberObservable) {
      this._SubcriberObservable.unsubscribe();
    }
  }

}
