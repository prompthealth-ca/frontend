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
  userTypeFilter ='';
  categoryList = [];
  profileQuestions = []
  selectedHours = '';
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
  zoom: 2,
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
          console.log('payload', payload)
          this.getDoctorList(payload);
        });
      });
    });



    this.searchedAddress = localStorage.getItem('searchedAddress')
    this.getDoctorList({ zipcode: this.zipcode });
    this.getProfileQuestion();
  }

  // getAddress(latitude, longitude) {
  //   this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
  //     this.zipCodeSearched = '';
  //     if (status === 'OK') {
  //       if (results[0]) {
  //         console.log('results[0]', results, results[0])
  //         // find country name
  //         for (var i=0; i<results[0].address_components.length; i++) {
  //           for (var b=0;b<results[0].address_components[i].types.length;b++) {
  //           if (results[0].address_components[i].types[b] === "postal_code") {
  //             this.zipCodeSearched = results[0].address_components[i].long_name;
  //             break;
  //           }

  //         }

  //       }
  //       } else {
  //         window.alert('No results found');
  //       }

  //       console.log('zipCodeSearched[0]',  this.zipCodeSearched)
  //       // this.router.navigate(['dashboard/listing'], { queryParams: {zipcode: this.zipCodeSearched }})
  //     } else {
  //       window.alert('Geocoder failed due to: ' + status);
  //     }
  //   });
  // }
  getProfileQuestion() {
    let path = `questionare/get-profile-questions`;
    this.sharedService.getNoAuth(path).subscribe((res: any) => {
       if (res.statusCode = 200) {
        this.profileQuestions = res.data;
        console.log('this.getProfileQuestion', res.data)
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
    this.sharedService.getNoAuth('questionare/get-service').subscribe((res: any) => {
      this.sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.categoryList = res.data;
        // console.log('categoryList', this.categoryList)
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
    console.log('Comes here payload', payload);
    this.sharedService.postNoAuth(payload, path).subscribe((res: any) => {
      if (res.statusCode = 200) {
       this.doctorList = res.data;
       console.log('Comes here', this.doctorList);
       const self = this
        setTimeout(()=>{
          self.createMapMarker(this.doctorList)
        }, 100)
      // console.log('comes, doctorList', this.doctorList)
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
      console.log('ratingFilter', this.ratingFilter, event.target.value)
    }
    else {

    }
  }
  onOptionsSelected(value:string, type){
    console.log("the selected value is " + value, type);
    this.selectedLang ='';
    this.userTypeFilter = '';
    this.selectedHours = '';

    if(type === 'language') {
      this.selectedLang = value;
    }
    else if(type="userType") {
      if(value === 'all') {
        this.userTypeFilter = '';
      }
      else {
        this.userTypeFilter = value;
      }
      console.log('this.userTypeFilter = value;', this.userTypeFilter)
    }
    else {
        this.selectedHours = value;
    }
  }
  resetFilter() {
    this.ratingFilter = null;
    this.selectedLang = null;
    this.selectedHours = null;

    this.getDoctorList({ zipcode: this.zipcode });

    this.closebutton.nativeElement.click();
  }
  applyFilter() {
    const payload = {
      ...this.ratingFilter,
      languageId:this.selectedLang,
      userType: this.userTypeFilter,
      typicalHoursId:this.selectedHours,
    }

    this.getDoctorList(payload);

    this.closebutton.nativeElement.click();
  }
  createMapMarker(data) {
    console.log('DATA', data)
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
 
  // onChangeSearch(val: string) {
  //   // fetch remote data from here
  //   // And reassign the 'data' which is binded to 'data' property.
  // }
  
  // onFocused(e){
  //   // do something when input is focused
  // }



  // clickedMarker(label: string, index: number) {
  //   console.log(`clicked the marker: ${label || index}`)
  // }
  
  // mapClicked($event: MouseEvent) {
  //   this.markers.push({
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng,
  //     draggable: true
  //   });
  // }
  
  // markerDragEnd(m: marker, $event: MouseEvent) {
  //   console.log('dragEnd', m, $event);
  // }
  
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