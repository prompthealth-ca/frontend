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
  imageBaseURL = 'http://3.12.81.245:3000/public/images/users/';
  
  editFields = false;
  userInfo;
  roles = ''
  zoom: number;
  private geoCoder;
  profileQuestions = [];
  formData = new FormData();

  ageRangeList  = [
    { id: 'age1', name: '<12' },
    { id: 'age2', name: '12-17' },
    { id: 'age3', name: '18-24' },
    { id: 'age4', name: '25-35' },
    { id: 'age5', name: '35-45' },
    { id: 'age6', name: '45-55' },
    { id: 'age7', name: '55-65' },
    { id: 'age8', name: '65-75' },
    { id: 'age9', name: '>75' },
  ];
  experienceList  = [
    { id: 'exp1', name: '<5 Years'},
    { id: 'exp2', name: '5-10 Years'},
    { id: 'exp3', name: '10-20 Years'},
    { id: 'exp4', name: '>20 Years'},
  ];
  priceList = [
    { id: 'price1', name: '< $50'},
    { id: 'price2', name: '$50-100'},
    { id: 'price3', name: '$100-200'},
    { id: 'price4', name: '$200-500'},
    { id: 'price5', name: '$500-1000'},
    { id: 'price6', name: '> $1000'},
  ];
  businessList = [
    { id: 'business1', name: 'Clinic'},
    { id: 'business2', name: 'Health Center'},
    { id: 'business3', name: 'Health Club'},
    { id: 'business4', name: 'Gym'},
    { id: 'business5', name: 'Studio'},
    { id: 'business6', name: 'Pharmacy'},
  ];

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
    age_range: '',
    years_of_experience: '',
    price_per_hours: '',
    business_kind: '',
    product_description: '',
  };
  languagesSelected = [];
  hoursSelected = [];
  
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
    this._sharedService.get(path).subscribe((res: any) => {
       if (res.statusCode = 200) {
        this.profileQuestions = res.data;
        
        console.log('this.getProfileQuestion', res.data)
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
        console.log('this.profile.typical_hours===', this.profile.typical_hours)
        // this.getDefaultValues(this.profile.typical_hours, 'typical_hours')
        // this.getDefaultValues(this.profile.languages, 'languages')
        console.log('profile', this.profile);
      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }
  // getDefaultValues(data, key) {
  //   console.log('this.profileQuestions', this.profileQuestions)
  //   console.log('data', data)
  //   if(key === 'typical_hours') {
  //     this.profile.typical_hours = this.profileQuestions[0].answers.filter(x => data.includes(x._id));

  //     console.log('result----', this.profile.typical_hours);
  //   }
  //   if(key === 'languages') {
  //     this.profile.languages = this.profileQuestions[1].answers.filter(x => data.includes(x._id));

  //     console.log('languages----', this.profile.languages);
  //   }
  // }
  checkBoxChanged(e, fieldUpdated) {
    if(fieldUpdated === 'availability') {
      this.languagesSelected.push(e.target.id);
      this.profile.languages = this.languagesSelected;
    }
    if(fieldUpdated === 'service') {
      this.hoursSelected.push(e.target.id);
      this.profile.typical_hours = this.hoursSelected;
    }
  }
  radioChanged(e, fieldUpdated){
    if(fieldUpdated === 'age_range') {
      this.profile.age_range = e.target.value;
    }
    if(fieldUpdated === 'years_of_experience') {
      this.profile.years_of_experience = e.target.value;
    }
    if(fieldUpdated === 'price_per_hours') {
      this.profile.price_per_hours = e.target.value;
    }
    if(fieldUpdated === 'business_kind') {
      this.profile.business_kind = e.target.value;
    }
  }
 
  save() {
    const payload = this.profile;
    payload['_id'] = localStorage.getItem('loginID');
    payload.phone.toString();
    let data = JSON.parse(JSON.stringify(this.profile));

      this._sharedService.post(data, 'user/updateProfile').subscribe((res: any) => {
        if (res.statusCode === 200) {
          this.profile = res.data;
          this.toastr.success(res.message);
          this.editFields = false;
        } else {
          this.toastr.error(res.message);
  
        }
      }, err => {
        this.toastr.error('There are some errors, please try again after some time !', 'Error');
      });

  }

  onFileSelect(event) {
    let input = new FormData();
    // Add your values in here
    input.append('_id', this.userInfo._id);
    input.append('profileImage', event.target.files[0]);
    console.log('input', input);
    this._sharedService.loader('show');
    this._sharedService.imgUpload(input, 'user/imgUpload').subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.profile = res.data;

        this._sharedService.loader('hide');
        console.log('onFileSelect',res.data, this.profile);
      } else {
        this.toastr.error(res.message);
      }
    }, err => {
      this._sharedService.loader('hide');
      this.toastr.error('There are some errors, please try again after some time !', 'Error');
    });
  }


}
