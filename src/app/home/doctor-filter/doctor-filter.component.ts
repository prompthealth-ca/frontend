import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from "../../shared/services/shared.service";

@Component({
  selector: 'app-doctor-filter',
  templateUrl: './doctor-filter.component.html',
  styleUrls: ['./doctor-filter.component.scss']
})
export class DoctorFilterComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  @ViewChild('searchGlobal')
  
  public searchGlobalElementRef: ElementRef;
  private geoCoder;
  keyword = 'name';
  gender ='';
  categoryList = [];
  serviceQuestion;
  profileQuestions
  languageQuestion;
  avalibilityQuestion;
  selectedHours = '';
  selectedServiceType = '';
  selectedLang = '';
  doctorList = [];
  allDoctorList = [];
  ratingFilter ;
  zipCodeSearched;
  searchedAddress = ''
  zipcode = '';
  lat;
  long;

  location = {
  markers:  [
  ],
  zoom: 10,
  lati:51.673858,
  lng: 7.815982,
  }

  constructor(
    private activeRoute: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private sharedService: SharedService,
    private toastr: ToastrService,
  ) { 

    this.zipcode = this.activeRoute.snapshot.queryParams['zipcode'];
  }

  ngOnInit(): void {
    this.getCategoryServices();
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.searchGlobalElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.lat = place.geometry.location.lat()
          this.location.lati = place.geometry.location.lng()
          this.location.lng = place.geometry.location.lat()
          this.long = place.geometry.location.lng()
          const payload = {
            latLong: `${this.long}, ${this.lat}`
          }
          this.getDoctorList(payload);
        });
      });
    });



    this.searchedAddress = localStorage.getItem('searchedAddress')
    this.getDoctorList({ zipcode: this.zipcode });
    this.getProfileQuestion();
  }

  getProfileQuestion() {
    let path = `questionare/get-profile-questions`;
    this.sharedService.getNoAuth(path).subscribe((res: any) => {
       if (res.statusCode = 200) {
        res.data.forEach(element => {
          if(element.question_type ==='service' && element.category_type==="Delivery") {
            this.serviceQuestion = element
          }
          if(element.question_type ==='service' && element.category_type!=="Delivery") {
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
  getAllDoctorList() {
    let path = 'user/get-all-dr';
    this.sharedService.getNoAuth(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        const result = res.data;
       this.createNameList(result)
       
      } else {
        this.toastr.error(res.message);
      }
    }, err => {
      this.sharedService.loader('hide');
    });
  }
  getCategoryServices() {
    this.sharedService.loader('show');
    this.sharedService.getNoAuth('questionare/get-service').subscribe((res: any) => {
      this.sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.categoryList = res.data;
        this.categoryList.forEach(el => {
          if(el.category_type === 'Service') {
            el.category.forEach(element => {
              if(element.item_text === 'Service') {
                this.categoryList = element.subCategory
              }
            });
          }
        });
      } else {
      }
    }, (error) => {
      this.toastr.error("There are some error please try after some time.")
      this.sharedService.loader('hide');
    });
  }

  getDoctorList(filter) {
    this.sharedService.loader('show');
    let payload;
    payload = {
      ...filter,
    }
    let path = 'user/filter-map';
    this.sharedService.postNoAuth(payload, path).subscribe((res: any) => {
      console.log('this.doctorList', res)
      if (res.statusCode = 200) {
       this.doctorList = res.data;
       const self = this
        setTimeout(()=>{
          self.createMapMarker(this.doctorList)
        }, 100)
        this.sharedService.loader('hide');
      } else {
        this.toastr.error(res.message);
      }
    }, err => {
      this.sharedService.loader('hide');
    });
  }
  handleRatingChange(event) {
    this.ratingFilter = {};
    if (event.target.value !== 'all') {
      this.ratingFilter = { rating: parseInt(event.target.value) }
    }
  }
  onOptionsSelected(value:string, type){
    this.selectedLang ='';
    this.gender = '';
    this.selectedHours = '';
    this.selectedServiceType = '';

    if(type === 'language') {
      this.selectedLang = value;
    }
    else if(type="userType") {
      if(value === 'all') {
        this.gender = '';
      }
      else {
        this.gender = value;
      }
    }
    else if(type="hours"){
        this.selectedHours = value;
    }else if(type="serviceType"){
      this.selectedServiceType = value;
  }
  }
  resetFilter() {
    this.ratingFilter = null;
    this.selectedLang = null;
    this.selectedHours = null;
    this.selectedServiceType = null;

    this.getDoctorList({ zipcode: this.zipcode });

    this.closebutton.nativeElement.click();
  }
  applyFilter() {
    const payload = {
      ...this.ratingFilter,
      languageId:this.selectedLang,
      gender: this.gender,
      typicalHoursId:this.selectedHours,
      serviceOfferId:this.selectedServiceType
    }

    this.getDoctorList(payload);

    this.closebutton.nativeElement.click();
  }
  createMapMarker(data) {
    this.location.markers = [];
    this.location.lati = data[data.length-1].location[1];

    this.location.lng = data[data.length-1].location[0];
    for (let element of data) {
      if(element.location) {
        this.location.markers.push({
          lat: element.location[1],
          lng: element.location[0],
          label: element.roles,
          draggable: false,
          infoContent: {
            name: element.firstName,
            address: element.address,
            profileImage: element.profileImage,
            _id: element._id,
          }
        })
      }
    }

  }
  createNameList(data) {
    for (let element of data) {
      if(element.firstName) {
        this.allDoctorList.push({
          id: element._id,
          name: element.firstName,
        })
      }
    }
  }
  serviceFilter(event) {
    this.getDoctorList({ serviceId: event.target.id })
  }


  selectEvent(item) {
    this.getDoctorList({ name: item.name })
  }
  
  ngOnDestroy() {
    localStorage.removeItem('searchedAddress');
  }
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
  draggable: boolean;
  infoContent?: string;
}