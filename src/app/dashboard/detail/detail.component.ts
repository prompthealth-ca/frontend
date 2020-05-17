import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  
  @ViewChild('closebutton') closebutton;
  bookingForm: FormGroup;
  id: number;
  private sub: any;
  productList = [];
  
  savedAminities = [];
  timingList = [
    { id: 'timing1', name: 'Morning' },
    { id: 'timing2', name: 'Afternoon' },
    { id: 'timing3', name: 'Evening' },
    { id: 'timing4', name: 'Anytime' },
  ];
  userInfo;
  serviceData;
  roles;
  productSearch: '';
  startDate = new Date();
  minDate = new Date();
  timingSelectedValue = ''
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private sharedService:SharedService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  get f() { return this.bookingForm.controls; }
  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required] ),
      email: new FormControl('', [Validators.required] ),
      phone: new FormControl('', [Validators.required] ),
      timing: new FormControl('', [Validators.required] ),
      bookingDateTime: new FormControl('', [Validators.required]),
      note: new FormControl('')
    });
    this.roles = localStorage.getItem('roles');
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
   });
   this.getUserProfile();
  }
  getUserProfile() {
    let path = `user/get-profile/${this.id}`;
    this.sharedService.get(path).subscribe((res: any) => {
       if (res.statusCode = 200) {
        this.userInfo = res.data[0];
        console.log('this.userInfo', this.userInfo)
       } else {
         this.toastr.error(res.message);
  
       }
     }, err => {
       this.sharedService.loader('hide');
     });
  }
  getUserServices() {
    const payload = {
      user_id: this.userInfo._id,
    }
    let path = 'user/filter';
      this.sharedService.post(payload, path).subscribe((res: any) => {
        if (res.statusCode = 200) {
          this.serviceData = res.data[0];
        } else {
          this.toastr.error(res.message);
        }
      }, err => {
        this.serviceData.loader('hide');
      });
  }
  getProductList() {
    this.sharedService.loader('show');
    let path = `product/get-all?userId=${this.id}&count=10&page=1&frontend=0/`;
    this.sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.productList = res.data.data;
        this.sharedService.loader('hide');

      } else {
        this.sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this.sharedService.loader('hide');
      this.sharedService.checkAccessToken(err);
    });
  }

  getSavedAmenties() {
    const path = `amenity/get-all/?userId=${this.id}&count=10&page=1&frontend=0`;
    this.sharedService.get(path).subscribe((res: any) => {
      this.sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.toastr.success(res.message);
        this.savedAminities = res.data.data;
        console.log('this.savedAminities-------', res, this.savedAminities);
      }

      else {
        this.sharedService.showAlert(res.message, 'alert-danger');
      }
    }, (error) => {
      this.sharedService.loader('hide');
    });
  }
  timingSelected(evt) {
    console.log('EVT', evt.target.value);
    this.timingSelectedValue =  evt.target.value;
  }
  bookApointment() {
    this.submitted = true;
    if (this.bookingForm.invalid) {
      return;
    }
    else {
      const formData = {
        ...this.bookingForm.value,
      }
      console.log('this.bookingForm.value', formData, this.bookingForm.controls);
      let data = {
        'drId': this.userInfo._id,
        'customerId':  this.id,
        ...formData,
      };
      data.timing = this.timingSelectedValue;
      data.phone = data.phone.toString();
      data.bookingDateTime = data.bookingDateTime.toString();
      this.sharedService.loader('show');
      console.log('Data', data);
      const path = `booking/create`
      this.sharedService.post(data, path).subscribe((res: any) => {
        this.sharedService.loader('hide');
        if (res.statusCode === 200) {
          this.toastr.success(res.message);

          this.closebutton.nativeElement.click();
        }

      else {
        this.sharedService.showAlert(res.message, 'alert-danger');
      }
    }, (error) => {
      this.sharedService.loader('hide');
    });
    }
  }
}
