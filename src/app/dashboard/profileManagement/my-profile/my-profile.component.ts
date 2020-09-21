import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../../shared/services/shared.service';
import {} from 'googlemaps';
import { MapsAPILoader, MouseEvent } from '@agm/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  @ViewChild('search')
  public searchElementRef: ElementRef;

  defaultImage = 'assets/img/no-image.jpg';
  imageBaseURL = 'https://prompthealth.ca:3000/users/';
  submitted = false;
  editFields = false;
  userInfo;
  roles = ''
  zoom: number;
  private geoCoder;
  profileQuestions;
  formData = new FormData();

  ageRangeList  = [
    { id: '5eb1a4e199957471610e6cd7', name: 'Not Critical', checked: false },
    { id: '5eb1a4e199957471610e6cd8', name: 'Child (<12)', checked: false },
    { id: '5eb1a4e199957471610e6cd9', name: 'Adolescent (12-18)', checked: false },
    { id: '5eb1a4e199957471610e6cda', name: 'Adult (18+)', checked: false },
    { id: '5eb1a4e199957471610e6cdb', name: 'Senior (>64)', checked: false },
  ];
  experienceList  = [
    { id: 'exp1', label: '<5 Years', value:'< 5'},
    { id: 'exp2', label: '5-10 Years', value:'5-10'},
    { id: 'exp3', label: '10-20 Years', value:'10-20'},
    { id: 'exp4', label: '>20 Years', value:'> 20'},
  ];
  priceList = [
    { id: 'price1', label: 'Not Critical', value:'Not Critical', checked: false},
    { id: 'price2', label: '< $50', value:'< $50', checked: false},
    { id: 'price3', label: '$50-100', value:'$50-100', checked: false},
    { id: 'price4', label: '$100-200', value:'$100-200', checked: false},
    { id: 'price5', label: '$200-500', value:'$200-500', checked: false},
    { id: 'price6', label: '$500-1000', value:'$500-1000', checked: false},
    { id: 'price7', label: '> $1000', value:'$1000', checked: false},
  ];
  businessList = [
    { id: 'business1', label: 'Clinic', value:'clinic'},
    { id: 'business2', label: 'Health Center', value:'health_center'},
    { id: 'business3', label: 'Health Club', value:'health_club'},
    { id: 'business4', label: 'Gym', value:'gym'},
    { id: 'business5', label: 'Studio', value:'studio'},
    { id: 'business6', label: 'Pharmacy', value:'pharmacy'},
  ];

  avalibilityQuestion
  languageQuestion
  serviceQuestion


  public profile = {
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    state: '',
    city: '',
    zipcode: '',
    booking: '',
    bookingURL: '',
    profileImage: {},
    latitude: 0,
    longitude: 0,
    languages: [],
    typical_hours: [],
    serviceOfferIds: [],
    age_range: [],
    years_of_experience: '',
    price_per_hours: '',
    business_kind: '',
    product_description: '',
    professional_organization: '',
    certification: '',
    isPlanExpired: false,
    accredited_provide_canada:''
  };
  languagesSelected = [];
  hoursSelected = [];
  serviceOfferSelected = []; 
  age_rangeSelected = [];
  
  public response: any;

  constructor(
    private mapsAPILoader: MapsAPILoader, 
    private ngZone: NgZone,
    private toastr: ToastrService,
    private _sharedService: SharedService, ) { }

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
 
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        if (this.editFields) {
          this.profile.latitude = 0;
          this.profile.longitude = 0;
        }
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
 
          //set latitude, longitude and zoom
          this.profile.latitude = place.geometry.location.lat();
          this.profile.longitude = place.geometry.location.lng();
          this.getAddress(this.profile.latitude, this.profile.longitude);
        });
      });
    });
    this.userInfo = JSON.parse(localStorage.getItem('user'));

    this.roles = localStorage.getItem('roles');

    this.getProfileQuestion();
    this.getProfileDetails();
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.profile.latitude = position.coords.latitude;
        this.profile.longitude = position.coords.longitude;
      });
    }
  }
  
  updateFields(){
    this.editFields = !this.editFields;
    if(this.editFields){
      this.submitted = true;
    }else{
      this.submitted = false
    }
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      this.profile.city = '';
      this.profile.state = '';
      this.profile.zipcode = '';
      this.profile.address = '';

      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.profile.address = results[0].formatted_address;
          // find country name
          for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0;b<results[0].address_components[i].types.length;b++) {

            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
            if (results[0].address_components[i].types[b] == "locality") {
              //this is the object you are looking for
              this.profile.city= results[0].address_components[i].long_name;
              break;
            }
            if(this.profile.city.length === 0) {
              if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                //this is the object you are looking for
                this.profile.city= results[0].address_components[i].long_name;
                break;
              }
              if (results[0].address_components[i].types[b] =="administrative_area_level_2") {
                //this is the object you are looking for
                this.profile.state= results[0].address_components[i].long_name;
                break;
              }
            }
            if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
              //this is the object you are looking for
              this.profile.state= results[0].address_components[i].long_name;
              break;
            }
            if (results[0].address_components[i].types[b] == "postal_code") {
              //this is the object you are looking for
              this.profile.zipcode= results[0].address_components[i].long_name;
              break;
            }
          }
        }
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }
  getProfileQuestion() {
    let path = `questionare/get-profile-questions`;
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
       if (res.statusCode = 200) {
        res.data.forEach(element => {
          if(element.question_type ==='service' && element.slug==="offer-your-services") {
            this.serviceQuestion = element;
          }
          if(element.question_type ==='service' && element.slug==="languages-you-offer") {
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
       this._sharedService.loader('hide');
     });
  }
  getProfileDetails() {
    let path = `user/get-profile/${this.userInfo._id }`;
    this._sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.profile = res.data[0];
        if(this.profile) {
          this.getDefaultCheckedValues(this.profile.languages, 'languages');
          this.getDefaultCheckedValues(this.profile.typical_hours, 'typical_hours');
          this.getDefaultCheckedValues(this.profile.serviceOfferIds, 'serviceType');
          this.getDefaultCheckedValues(this.profile.age_range, 'ageRange');
          this.getDefaultCheckedValues(this.profile.price_per_hours, 'price');
          this.languagesSelected = this.profile.languages;
          this.serviceOfferSelected = this.profile.serviceOfferIds;
          this.hoursSelected = this.profile.typical_hours;
          this.age_rangeSelected = this.profile.age_range;
        }
      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }
  getDefaultCheckedValues(data, key) {
    if(key === 'serviceType' && this.serviceQuestion) {
      this.serviceQuestion.answers.forEach(checkbox => {
        checkbox.checked = (data.indexOf(checkbox._id) > -1) ? true : false;
      });
    }
    if(key === 'typical_hours'&&this.avalibilityQuestion) {
      this.avalibilityQuestion.answers.forEach(checkbox => {
        checkbox.checked = (data.indexOf(checkbox._id) > -1) ? true : false;
      });
    }
    if(key === 'languages' && this.languageQuestion) {
      console.log(this.languageQuestion);
      this.languageQuestion.answers.forEach(checkbox => {
        checkbox.checked = (data.indexOf(checkbox._id) > -1) ? true : false;
      });
    }

    if(key === 'price' && this.priceList) {
      if(data) {
        this.priceList.forEach(checkbox => {
          checkbox.checked = (data.indexOf(checkbox.id) > -1) ? true : false;
        });
      }
      else {
        this.priceList[0].checked = true;

      }
    }
    if(key === 'ageRange' && this.ageRangeList) {
      if(data.length === 5) {
        this.ageRangeList[0].checked = true;
        
      }
      else {
        this.ageRangeList.forEach(checkbox => {
          checkbox.checked = (data.indexOf(checkbox.id) > -1) ? true : false;
        });

      }
    }
  }
  checkBoxChanged(e, fieldUpdated) {
    if(fieldUpdated === 'avalibilityQuestion') {
      if(e.target.checked) {
        if(this.hoursSelected.indexOf(e.target.id) === -1) {
          this.hoursSelected.push(e.target.id);
        }
      }
      else {
        const find = this.hoursSelected.indexOf(e.target.id)
        if(find > -1) {
          this.hoursSelected.splice(find, 1);
        }
      }
      this.profile.typical_hours = this.hoursSelected;
    }
    if(fieldUpdated === 'languageQuestion') {
        if(e.target.checked) {
          if(this.languagesSelected.indexOf(e.target.id) === -1) {
            this.languagesSelected.push(e.target.id);
          }
        }
        else {
          const find = this.languagesSelected.indexOf(e.target.id)
          if(find > -1) {
            this.languagesSelected.splice(find, 1);
          }
        }
      this.profile.languages = this.languagesSelected;
    }
    if(fieldUpdated === 'serviceType') {
      if(e.target.checked) {
        if(this.serviceOfferSelected.indexOf(e.target.id) === -1) {
          this.serviceOfferSelected.push(e.target.id);
        }
      }
      else {
        const find = this.serviceOfferSelected.indexOf(e.target.id)
        if(find > -1) {
          this.serviceOfferSelected.splice(find, 1);
        }
      }
      this.profile.serviceOfferIds = this.serviceOfferSelected;
    }

    if(fieldUpdated === 'ageRange') {
      if(e.target.checked) {
        if(this.age_rangeSelected.indexOf(e.target.id) === -1) {
          if(e.target.id === '5eb1a4e199957471610e6cd7') {
            this.ageRangeList.forEach(el => {
              this.age_rangeSelected.push(el.id);
            })
          } else {
            this.age_rangeSelected.push(e.target.id);
          }
        }
      }
      else {
        const find = this.age_rangeSelected.indexOf(e.target.id)
        if(find > -1) {
          this.age_rangeSelected.splice(find, 1);
        }
      }
      this.profile.age_range = this.age_rangeSelected;
    }

  }
 
  save() {
    if(this.roles === 'C' || this.roles === 'SP') {
    if(this.profile.typical_hours.length ==0){
      this.toastr.error("Please select the available time!");
      return;
    }
  }
    const payload = this.profile;
    payload['_id'] = localStorage.getItem('loginID');
    if(payload.phone) payload.phone.toString();
    let data = JSON.parse(JSON.stringify(this.profile));

    this._sharedService.loader('show');

      this._sharedService.post(data, 'user/updateProfile').subscribe((res: any) => {
        if (res.statusCode === 200) {
          this.profile = res.data;
          this.toastr.success(res.message);
          this.editFields = false;
        } else {
          this.toastr.error(res.message);
        }

      this._sharedService.loader('hide');
      }, err => {
        this.toastr.error('There are some errors, please try again after some time !', 'Error');
      });

  }

  onFileSelect(event) {
    let input = new FormData();
    // Add your values in here
    input.append('_id', this.userInfo._id);
    input.append('profileImage', event.target.files[0]);
    this._sharedService.loader('show');
    this._sharedService.imgUpload(input, 'user/imgUpload').subscribe((res: any) => {
      if (res.statusCode === 200) {
        // this.profile = res.data;
        this.profile.profileImage = res.data.profileImage;
        this._sharedService.loader('hide');
      } else {
        this.toastr.error(res.message);
      }
    }, err => {
      this._sharedService.loader('hide');
      this.toastr.error('There are some errors, please try again after some time !', 'Error');
    });
  }


}
