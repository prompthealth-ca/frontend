import { Component, ChangeDetectorRef, ViewChild, Output, EventEmitter, NgZone, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import { SharedService } from '../../shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { MapsAPILoader, MouseEvent } from '@agm/core';
 
import {} from 'googlemaps';

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
  private geoCoder;
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
    booking: '',
    bookingURL: '',
    image: [],
    logo_pic: '',
    latitude: 0,
    longitude: 0,
  };
  public _host = environment.config.BASE_URL;
  public response: any;
  private imageSrc: string = '';
  imageSrc1: any;

  @Output() ActiveNextTab = new EventEmitter<string>();

  constructor(private _router: Router,
    private _activateRouter: ActivatedRoute,
    private _flashMessagesService: FlashMessagesService,
    private changeDetectorRef: ChangeDetectorRef,
    private _sharedService: SharedService,
    private toastr: ToastrService,
    private mapsAPILoader: MapsAPILoader, 
    private ngZone: NgZone ) {
     }

  ngOnInit() {
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
  }
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      this.userDetails.city = '';
      this.userDetails.state = '';
      this.userDetails.zipcode = '';

      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          console.log(' esults[0]',  results[0])
          this.userDetails.address = results[0].formatted_address;
          // find country name
          for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0;b<results[0].address_components[i].types.length;b++) {

            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
            if (results[0].address_components[i].types[b] == "locality") {
              //this is the object you are looking for
              this.userDetails.city= results[0].address_components[i].long_name;
              break;
            }
            if(this.userDetails.city.length === 0) {
              if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                //this is the object you are looking for
                this.userDetails.city= results[0].address_components[i].long_name;
                break;
              }
              if (results[0].address_components[i].types[b] =="administrative_area_level_2") {
                //this is the object you are looking for
                this.userDetails.state= results[0].address_components[i].long_name;
                break;
              }
            }
            if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
              //this is the object you are looking for
              this.userDetails.state= results[0].address_components[i].long_name;
              break;
            }
            if (results[0].address_components[i].types[b] == "postal_code") {
              //this is the object you are looking for
              this.userDetails.zipcode= results[0].address_components[i].long_name;
              break;
            }
          }
        }
        //city data
        console.log('====', this.userDetails)
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
      
    console.log(' this.userDetails.address',  this.userDetails.address)
    console.log(' latitude',  latitude)
    console.log(' longitude',  longitude)
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
  handleImageChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  handleReaderLoaded(e) {
    let reader = e.target;
    this.userDetails.image = reader.result;
    console.log('this.imageSrc', this.userDetails.image)
  }
  save() {
    console.log('------', this.userDetails)
    this.getAddress(this.userDetails.latitude, this.userDetails.longitude);
    this.ActiveNextTab.emit(this.activeTab);  // TODO: To be added to after form submission
    this._sharedService.loader('show');
    let data = JSON.parse(JSON.stringify(this.userDetails));
    this._sharedService.addUserDetail(data).subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.success) {
        this.response = res;
        this.toastr.success(res.data.message);
        // this._router.navigate(['/home']);
      } else {
        this.toastr.error(res.error.message);

      }
    }, err => {
      this._sharedService.loader('hide');
    });
  }

  // handleInputChange(e) {
  //   var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
  //   var pattern = /image-*/;
  //   var reader = new FileReader();
  //   if (!file.type.match(pattern)) {
  //     alert('invalid format');
  //     return;
  //   }
  //   reader.onload = this._handleReaderLoaded.bind(this);
  //   reader.readAsDataURL(file);

  // }
  // _handleReaderLoaded(e) {
  //   let reader = e.target;
  //   this.imageSrc = reader.result;
  //   console.log(this.imageSrc)
  //   this.uploadImage();
  // }


  // uploadImage() {
  //   let object = {
  //     data: this.imageSrc,
  //     type: 'users'
  //   }
  //   this._sharedService.loader('show');
  //   this._sharedService.uploadImage(object).subscribe((result: any) => {
  //     this._sharedService.loader('hide');
  //     if (result.success) {
  //       this.userDetails.image = result.data.fullPath;
  //       console.log('image', this.userDetails.image)
  //     }
  //     return true;
  //   }, err => {
  //     this._sharedService.loader('hide');
  //     return false;
  //   });
  // }

  // handleInputChange1(e) {
  //   var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
  //   var pattern = /image-*/;
  //   var reader = new FileReader();
  //   if (!file.type.match(pattern)) {
  //     alert('invalid format');
  //     return;
  //   }
  //   reader.onload = this._handleReaderLoaded1.bind(this);
  //   reader.readAsDataURL(file);

  // }
  // _handleReaderLoaded1(e) {
  //   let reader = e.target;
  //   this.imageSrc1 = reader.result;
  //   console.log(this.imageSrc1)
  //   this.uploadImage1();
  // }


  // uploadImage1() {
  //   let object = {
  //     data: this.imageSrc1,
  //     type: 'logo'
  //   }
  //   this._sharedService.loader('show');
  //   this._sharedService.uploadImage1(object).subscribe((result: any) => {
  //     this._sharedService.loader('hide');
  //     if (result.success) {
  //       this.userDetails.logo_pic = result.data.fullPath;
  //       console.log('image', this.userDetails.logo_pic)
  //     }
  //     return true;
  //   }, err => {
  //     this._sharedService.loader('hide');
  //     return false;
  //   });
  // }

  trim(key) {
    if (this.userDetails[key] && this.userDetails[key][0] == ' ') this.userDetails[key] = this.userDetails[key].trim();
  }
}
