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

  defaultImage = 'assets/img/no-image.jpg';
  bookingForm: FormGroup;
  doctors = [];

  profileQuestions = [];
  isLoggedIn =''
  id: number;
  myId = ''
  private sub: any;
  productList = [];
  rating = [];
  
  savedAminities = [];

  ageRangeList  = [
    { id: '5eb1a4e199957471610e6cd7', name: 'Not Critical' },
    { id: '5eb1a4e199957471610e6cd8', name: 'Child' },
    { id: '5eb1a4e199957471610e6cd9', name: 'Adolescent' },
    { id: '5eb1a4e199957471610e6cda', name: 'Adult' },
    { id: '5eb1a4e199957471610e6cdb', name: 'Senior' },
  ];
  timingList = [
    { id: 'timing1', name: 'Morning' },
    { id: 'timing2', name: 'Afternoon' },
    { id: 'timing3', name: 'Evening' },
    { id: 'timing4', name: 'Anytime' },
  ];
  userInfo;
  serviceData = [];
  treatmentModalities = [];
  serviceOffering = [];
  serviceType = [];
  roles;
  productSearch: '';
  startDate = new Date();
  minDate = new Date();
  timingSelectedValue = ''
  submitted = false;

  currentPage;
  totalItems;
  itemsPerPage = 5;
  avalibilityQuestion;
  languageQuestion;
  serviceQuestion;
  categoryList;

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
      email: new FormControl('', [Validators.required, Validators.email] ),
      phone: new FormControl('', [Validators.required] ),
      timing: new FormControl('', [Validators.required] ),
      bookingDateTime: new FormControl('', [Validators.required]),
      note: new FormControl('')
    });
    this.roles = localStorage.getItem('roles') ? localStorage.getItem('roles') : ''
    this.isLoggedIn = localStorage.getItem('token') ? localStorage.getItem('token') : ''
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
   });
   this.myId = localStorage.getItem('loginID') ? localStorage.getItem('loginID') : '';
   
   this.getUserProfile();
   this.getProfileQuestion();
  }
  getUserProfile() {
    let path = `user/get-profile/${this.id}`;
    this.sharedService.getNoAuth(path).subscribe((res: any) => {
       if (res.statusCode = 200) {
        this.userInfo = res.data[0];
        this.getCategoryServices();
        if (this.userInfo) {
          this.userInfo.ratingAvg =  Math.floor(this.userInfo.ratingAvg);
        }
       } else {
         this.toastr.error(res.message);
  
       }
     }, err => {
       this.sharedService.loader('hide');
     });
  }
  getProfileQuestion() {
    let path = `questionare/get-profile-questions`;
    this.sharedService.getNoAuth(path).subscribe((res: any) => {
       if (res.statusCode = 200) {
        this.profileQuestions = res.data;
          res.data.forEach(element => {
          if(element.question_type ==='service' && element.category_type==="Service Type") {
            this.serviceQuestion = element
          }
          if(element.question_type ==='service' && element.category_type!=="Service Type") {
            this.languageQuestion = element
          }
          if(element.question_type ==='availability') {
            this.avalibilityQuestion = element
          }
        });
       } else {
         this.toastr.error(res.message);
  
       }
     }, err => {
       this.sharedService.loader('hide');
     });
  }
  getProductList() {
    this.sharedService.loader('show');
    let path = `product/get-all?userId=${this.id}&count=10&page=1&frontend=0/`;
    this.sharedService.getNoAuth(path).subscribe((res: any) => {
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
    this.sharedService.getNoAuth(path).subscribe((res: any) => {
      this.sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.toastr.success(res.message);
        this.savedAminities = res.data.data;
      }

      else {
        this.sharedService.showAlert(res.message, 'alert-danger');
      }
    }, (error) => {
      this.sharedService.loader('hide');
    });
  }
  timingSelected(evt) {
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
      let data = {
        'drId': this.userInfo._id,
        'customerId': this.myId,
        ...formData,
      };
      data.timing = this.timingSelectedValue;
      data.phone = data.phone.toString();
      data.bookingDateTime = data.bookingDateTime.toString();
      this.sharedService.loader('show');
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
  getSavedRating() {
    let path = `booking/get-all-review?userId=${this.id }&count=10&page=1&search=/`;
    this.sharedService.getNoAuth(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.rating = res.data.data;
      } else {
        this.sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this.sharedService.checkAccessToken(err);
    });
  }
  getSaveddoctors() {
    let path = `staff/get-all?userId=${this.id}&count=10&page=1&frontend=0/`;
    this.sharedService.getNoAuth(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.doctors = res.data.data;

      } else {
        this.sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this.sharedService.checkAccessToken(err);
    });
  }
  getCategoryServices() {
    this.serviceData = [];
    this.treatmentModalities = [];
    this.serviceType = [];
    this.serviceOffering = [];
    let path = `user/getService/${this.userInfo._id}`;
    this.sharedService.getNoAuth(path).subscribe((res: any) => {
      this.sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.categoryList = res.data;
        this.categoryList.forEach(element => {
          if(element.slug === 'providers-are-you') {
            if(this.serviceData.indexOf(element.item_text) === -1) {
              this.serviceData.push(element)
            }
          }
          if(element.slug === 'treatment-modalities') {
            if(this.treatmentModalities.indexOf(element.item_text) === -1) {
              this.treatmentModalities.push(element);
            }
          }
          if(element.slug === "your-goal-specialties") {
            if(this.serviceType.indexOf(element) === -1) {
              this.serviceType.push(element.item_text);
            }
          }
          if(element.slug === "your-offerings") {
            if(this.serviceOffering.indexOf(element) === -1) {
              this.serviceOffering.push(element.item_text);
            }
          }
        });
      } else {
      }
    }, (error) => {
      this.toastr.error("There are some error please try after some time.")
      this.sharedService.loader('hide');
    });
  }
}
