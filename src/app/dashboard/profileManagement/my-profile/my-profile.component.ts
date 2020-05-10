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
  editFields = false;
  userInfo;
  roles = ''
  zoom: number;
  private geoCoder;
  formData = new FormData();

  languageList = [
    { id: 'language1', name: 'English' },
    { id: 'language2', name: 'French' },
    { id: 'language3', name: 'Spanish' },
    { id: 'language4', name: 'Italian' },
    { id: 'language5', name: 'Mandarin' },
    { id: 'language6', name: 'Cantonese' },
    { id: 'language7', name: 'Punjabi' },
    { id: 'language8', name: 'Farsi' }
  ];
  hoursList = [
    { id: 'hours1', name: 'Early mornings (Before 9 am)' },
    { id: 'hours2', name: 'Between 9- 5pm' },
    { id: 'hours3', name: 'Evenings (After 5 pm)' },
    { id: 'hours4', name: 'Saturday' },
    { id: 'hours5', name: 'Sunday' },
  ];
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
  amenitiesList = [
    { id: 'amenities1', name: 'Lounge'},
    { id: 'amenities2', name: 'Beverage/snack Bar'},
    { id: 'amenities3', name: 'Café'},
    { id: 'amenities4', name: 'Spa'},
    { id: 'amenities5', name: 'Locker'},
    { id: 'amenities6', name: 'Shower'},
    { id: 'amenities7', name: 'Private training area'},
    { id: 'amenities8', name: 'Ladies only area'},
    { id: 'amenities9', name: 'Towel service'},
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
    languages: '',
    typical_hours: '',
    age_range: '',
    years_of_experience: '',
    price_per_hours: '',
    business_kind: '',
    special_amenities: '',
    product_description: '',
  };
  languagesSelected = [];
  hoursSelected = [];
  amenitiesSelected = [];
  
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
        if(this.editFields) {
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
  getProfileDetails() {
    let path = `user/get-profile/${this.userInfo._id }`;
    this._sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.profile = res.data[0];
      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }
  checkBoxChanged(e, fieldUpdated) {
    if(fieldUpdated === 'languages') {
      this.languagesSelected.push(e.target.value);
      this.profile.languages = this.languagesSelected.toString();
    }
    if(fieldUpdated === 'typical_hours') {
      this.hoursSelected.push(e.target.value);
      this.profile.typical_hours = this.hoursSelected.toString();
    }
    if(fieldUpdated === 'special_amenities') {
      this.amenitiesSelected.push(e.target.value);
      this.profile.special_amenities = this.amenitiesSelected.toString();
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
    console.log('payload', payload);
    console.log('his.profile;', this.profile);
    let data = JSON.parse(JSON.stringify(this.profile));

      this._sharedService.post(data, 'user/updateProfile').subscribe((res: any) => {
        if (res.statusCode === 200) {
          this.response = res;
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
    const formData: FormData = new FormData();
    formData.append('profileImage', event.target.files[0])

        let input = new FormData();
      // Add your values in here
      input.append('_id', this.userInfo._id);
      input.append('profileImage', event.target.files[0]);
      // etc, etc

    this._sharedService.imgUpload(input, 'user/imgUpload').subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.response = res;
      } else {
        this.toastr.error(res.message);
      }
    }, err => {
      this.toastr.error('There are some errors, please try again after some time !', 'Error');
    });
  }


}
