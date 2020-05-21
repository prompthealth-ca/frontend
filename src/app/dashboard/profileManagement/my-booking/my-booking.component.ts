import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.scss']
})
export class MyBookingComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  @ViewChild('reviewModal') reviewModal:ElementRef;
  bookingForm: FormGroup;
  ratingSubmited = false;
  ratingPayload = {}
  ratingClicked: number;
  review = '';
  // $: any;

  timingList = [
    { id: 'timing1', name: 'Morning' },
    { id: 'timing2', name: 'Afternoon' },
    { id: 'timing3', name: 'Evening' },
    { id: 'timing4', name: 'Anytime' },
  ];

  timingSelectedValue = '';
  startDate = new Date();
  minDate = new Date();
  bookingList = [];
  userId = '';
  roles = '';
  submitted = false;
  slectedBookingId = ''
  constructor(
    private _sharedService: SharedService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,) { }

  get f() { return this.bookingForm.controls; }
  ngOnInit(): void {

    this.bookingForm = this.formBuilder.group({
      timing: new FormControl('', [Validators.required] ),
      bookingDateTime: new FormControl('', [Validators.required]),
    });
    this.getBookingList();
  }
  
  getBookingList() {
    this.roles = localStorage.getItem('roles');
    // this.roles = 'U';
    this.userId = localStorage.getItem('loginID');
    let path = `booking/get-all?userId=${this.userId}&count=10&page=1&frontend=0/`;
    this._sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.bookingList = res.data.data;

      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }
  cancelBooking(id) {
    this._sharedService.loader('show');
    const path = `booking/cancelBooking/`;
    let data = {"id":id}
    this._sharedService.put(data, path).subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.toastr.success(res.message);
        this.bookingList.forEach((ele, index) => {
          if(ele._id === id) this.bookingList.splice(index, 1);
        });
        // this._router.navigate(['/home']);
      } else {
        this.toastr.error(res.message);

      }
    }, err => {
      this._sharedService.loader('hide');
    });
  }
  updateBooking(id, status) {
    this._sharedService.loader('show');
    const path = `booking/updateBooking/`;
    let data = {id, status}
    this._sharedService.put(data, path).subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.toastr.success(res.message);
        this.bookingList.forEach((ele, index) => {
          if(ele._id === id) this.bookingList.splice(index, 1);
        });

        this.getBookingList();
      } else {
        this.toastr.error(res.message);

      }
    }, err => {
      this._sharedService.loader('hide');
    });
  }

  timingSelected(evt) {
    this.timingSelectedValue =  evt.target.value;
  }

  rescheduleBooking(id) {
    this.slectedBookingId = id;
  }
  rescheduleBookingApi() {
    this.submitted  = true;
    this.submitted = true;
    if (this.bookingForm.invalid) {
      return;
    }
    else {
      const formData = {
        ...this.bookingForm.value,
      }
      let data = {
        'id':  this.slectedBookingId,
        ...formData,
      };
      data.timing = this.timingSelectedValue;
      data.bookingDateTime = data.bookingDateTime.toString();
      this._sharedService.loader('show');
      const path = `/booking/rescheduleBooking`
      this._sharedService.put(data, path).subscribe((res: any) => {
        this._sharedService.loader('hide');
        if (res.statusCode === 200) {
          this.toastr.success(res.message);

          this.getBookingList();
          this.closebutton.nativeElement.click();
        }

      else {
        this._sharedService.showAlert(res.message, 'alert-danger');
      }
    }, (error) => {
      this._sharedService.loader('hide');
    });
    }
  }

  ratingComponentClick(clickObj: any): void {
    this.ratingClicked = clickObj.rating
  }
  showReviewModal(bookid) {
    console.log('bookid', bookid);
    this.ratingPayload['drId'] = bookid.drId._id;
    this.ratingPayload['bookingId'] = bookid._id;
    console.log('ratingPayload', this.ratingPayload);
  }
  submitRating() {
    this.ratingSubmited = true;
    const payload = {
      ...this.ratingPayload,
      userId: this.userId,
      rating: this.ratingClicked,
      review: this.review
    }

    console.log('payload', payload);
    this._sharedService.loader('show');
    // http://3.12.81.245:3000/api/v1/user/addRating
    const path = decodeURI('user/add-rating/');
    console.log('path', path);
    this._sharedService.post(payload, path).subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.toastr.success(res.message);
        console.log('re ====', res);
        // this.bookingList.forEach((ele, index) => {
        //   if(ele._id === id) this.bookingList.splice(index, 1);
        // });

        this.getBookingList();
      } else {
        this.toastr.error(res.message);

      }
    }, err => {
      this._sharedService.loader('hide');
    });
  }
}
