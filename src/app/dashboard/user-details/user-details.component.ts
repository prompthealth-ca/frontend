import { Component, ViewChild, Output, EventEmitter, NgZone, ElementRef } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { MapsAPILoader } from '@agm/core';

import { } from 'googlemaps';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  // @ViewChild('myInput', { static: false })

  @ViewChild('search')
  public searchElementRef: ElementRef;

  myInputVariable: any;
  activeTab = 'questionnaire';
  zoom: number;
  roles = ''
  private geoCoder;
  defaultImage = '';
  imageBaseURL = 'http://3.12.81.245:3000/public/images/users/';

  public userDetails = {
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    state: '',
    city: '',
    zipcode: '',
    age_range: '',
    languages: [],
    typical_hours: [],
    price_per_hours: '',
    product_description: '',
    years_of_experience: '',
    business_kind: '',
    booking: '',
    bookingURL: '',
    profileImage: {},
    latitude: 0,
    longitude: 0,
    licence_type_degree: '',
    professional_organization: '',
  };
  userId = ''

  languagesSelected = [];
  hoursSelected = [];
  profileQuestions = [];

  public _host = environment.config.BASE_URL;
  public response: any;
  private imageSrc: string = '';
  imageSrc1: any;

  @Output() ActiveNextTab = new EventEmitter<string>();

  constructor(
    private _sharedService: SharedService,
    private toastr: ToastrService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
  }

  ngOnInit() {
    this.roles = localStorage.getItem('roles');
    this.userId = JSON.parse(localStorage.getItem('user'))._id;
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.userDetails.latitude = place.geometry.location.lat();
          this.userDetails.longitude = place.geometry.location.lng();
          this.zoom = 12;

          this.getAddress(this.userDetails.latitude, this.userDetails.longitude);
        });
      });
    });
    const userInfo = JSON.parse(localStorage.getItem('user'));
    this.userDetails.email = userInfo ? userInfo.email : '';
    this.getProfileQuestion();
  }
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      this.userDetails.city = '';
      this.userDetails.state = '';
      this.userDetails.zipcode = '';

      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.userDetails.address = results[0].formatted_address;
          // find country name
          for (var i = 0; i < results[0].address_components.length; i++) {
            for (var b = 0; b < results[0].address_components[i].types.length; b++) {

              //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
              if (results[0].address_components[i].types[b] == "locality") {
                //this is the object you are looking for
                this.userDetails.city = results[0].address_components[i].long_name;
                break;
              }
              if (this.userDetails.city.length === 0) {
                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                  //this is the object you are looking for
                  this.userDetails.city = results[0].address_components[i].long_name;
                  break;
                }
                if (results[0].address_components[i].types[b] == "administrative_area_level_2") {
                  //this is the object you are looking for
                  this.userDetails.state = results[0].address_components[i].long_name;
                  break;
                }
              }
              if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                //this is the object you are looking for
                this.userDetails.state = results[0].address_components[i].long_name;
                break;
              }
              if (results[0].address_components[i].types[b] == "postal_code") {
                //this is the object you are looking for
                this.userDetails.zipcode = results[0].address_components[i].long_name;
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
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.userDetails.latitude = position.coords.latitude;
        this.userDetails.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
  handleImageChange(event) {
    const formData: FormData = new FormData();
    formData.append('profileImage', event.target.files[0])

    let input = new FormData();
    input.append('_id', this.userId);
    input.append('profileImage', event.target.files[0]);
    // Add your values in here
    this._sharedService.loader('show');
    this._sharedService.imgUpload(input, 'user/imgUpload').subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.userDetails = res.data;

        console.log('onFileSelect',res, this.userDetails);
        this._sharedService.loader('hide');
      } else {
        this.toastr.error(res.message);
      }
    }, err => {
      this._sharedService.loader('hide');
      this.toastr.error('There are some errors, please try again after some time !', 'Error');
    });
    
  }

  checkBoxChanged(e, fieldUpdated) {
    console.log('checkBoxChanged', e, fieldUpdated);
    if(fieldUpdated === 'availability') {
      this.languagesSelected.push(e.target.id);
      this.userDetails.languages = this.languagesSelected;
    }
    if(fieldUpdated === 'service') {
      this.hoursSelected.push(e.target.id);
      this.userDetails.typical_hours = this.hoursSelected;
    }
  }
  handleReaderLoaded(e) {
    let reader = e.target;
    this.defaultImage = reader.result;
  }
  save() {
    const formData = new FormData();
    const payload = this.userDetails;
    payload['_id'] = localStorage.getItem('loginID');
    payload.phone.toString();
    this.ActiveNextTab.emit(this.activeTab);  // TODO: To be added to after form submission
    this._sharedService.loader('show');
    let data = JSON.parse(JSON.stringify(this.userDetails));
    this._sharedService.post(data, 'user/updateProfile').subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.response = res;
        this.toastr.success(res.message);
        // this._router.navigate(['/home']);
      } else {
        this.toastr.error(res.message);

      }
    }, err => {
      this._sharedService.loader('hide');
    });
  }
  trim(key) {
    if (this.userDetails[key] && this.userDetails[key][0] == ' ') this.userDetails[key] = this.userDetails[key].trim();
  }
}
