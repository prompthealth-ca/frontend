import { Component, OnInit, ElementRef, ViewChild, NgZone } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
import { BehaviorService } from '../../shared/services/behavior.service';
@Component({
  selector: "app-listing",
  templateUrl: "./listing.html",
  styleUrls: ["./listing.scss"]
})
export class ListingComponent implements OnInit {
  @ViewChild('searchGlobal')
  
  public searchGlobalElementRef: ElementRef;
  private geoCoder;
  keyword = 'name';
  selectedRating = '';
  selectedLang= '';
  selectedHours= ''
  profileQuestions = []
  id;
  zipCodeSearched = '';
  lat;
  long;
  private sub: any;
  doctorsListing = [];
  allDoctorList = [];
  compareList = [];
  typical_hours = [];
  ratingsOption = [
    {
      _id: '5',
      item_text: '5 Stars'
    },
    {
      _id: '4',
      item_text: '4 Stars'
    },
    {
      _id: '3',
      item_text: '3 Stars'
    }
  ]
  constructor(
    private behaviorService: BehaviorService,
    private route: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader,
    private router: Router,
    private ngZone: NgZone,
    private _sharedService:SharedService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.params;
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;
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
            this.long = place.geometry.location.lng()
            this.getAddress(this.lat, this.long);
          });
        });
      });
      
    });
    this.id = this.route.snapshot.queryParams['id'] ? [this.route.snapshot.queryParams['id']] : [] ;
    if(localStorage.getItem('typical_hours')) {
      this.typical_hours = localStorage.getItem('typical_hours').split(',');
    }
    this.getProfileQuestion();
    console.log('typical_hours', this.typical_hours)
    console.log('id', this.id, routeParams)
   this.listing({
        ids: this.id,
    });
  }

  getProfileQuestion() {
    let path = `questionare/get-profile-questions`;
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
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
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      this.zipCodeSearched = '';
      if (status === 'OK') {
        if (results[0]) {
          // find country name
          for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0;b<results[0].address_components[i].types.length;b++) {
            if (results[0].address_components[i].types[b] === "postal_code") {
              this.zipCodeSearched = results[0].address_components[i].long_name;

              console.log('zipCodeSearched[0]',  this.zipCodeSearched);
              this.listing({zipcode: this.zipCodeSearched})
              break;
            }

          }
        }
        } else {
          window.alert('No results found');
        }

        console.log('zipCodeSearched[0]',  this.zipCodeSearched)
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }
  listing(filter) {
    this._sharedService.loader('show');
    let setParams;
    setParams = {
      ...filter,
    }
    // if (this.zipcode) {
    //   setParams = {
    //     ids: [],
    //     zipcode: this.zipcode,
    //   }
    // } else if(this.typical_hours.length && this.typical_hours[0] !== '') {
    //   setParams = {
    //     ids: [],
    //     zipcode: this.zipcode,
    //     typical_hours: this.typical_hours,
    //   }
    // }
    // else {
    //   setParams = {
    //     ids: this.id,
    //   }
    // }
    let path = 'user/filter';
    console.log('setParams', setParams);
    this._sharedService.postNoAuth(setParams, path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.doctorsListing = res.data;
      
        console.log('doctorsListing ====', this.doctorsListing);
        for(let i = 0; i < this.doctorsListing.length; i++) {
          if(this.doctorsListing[i].userData.ratingAvg) {
            this.doctorsListing[i].userData.ratingAvg = Math.floor(this.doctorsListing[i].userData.ratingAvg)
          }
        }

       this.createNameList(this.doctorsListing)
        this.toastr.success(res.message);
      } else {
        this.toastr.error(res.message);
      }
    }, err => {
      this._sharedService.loader('hide');
    });
  }

  onOptionsSelected(value:string, type){
    console.log("the selected value is " + value, type);
    this.selectedLang ='';
    this.selectedHours = '';

    if (type === 'language') {
      this.selectedLang = value;
      this.listing({languageId: this.selectedLang})
    }
    if (type === 'hours') {
      this.selectedHours = value;
      this.listing({typicalhoursId: this.selectedHours})
    }
    if (type === 'rating') {
      this.selectedRating = value;
      console.log('selectedRating', this.selectedRating)
      this.listing({rating: this.selectedRating})
    }
  }
  createNameList(data) {
    for (let element of data) {
      if(element.userData.firstName) {
        this.allDoctorList.push({
          id: element.userId,
          name: element.userData.firstName,
        })
      }
    }
  }
  changeMiles(evt) {
    if(evt.target.value !== 'exactZipCode') {
      this.listing({ miles: evt.target.value, latLong: `${this.long}, ${this.lat}` });
    } else {
      this.listing({zipcode: this.zipCodeSearched})
    }
  }
  changeAge(evt) {
    this.listing({age_range: evt.target.value})
  }
  selectEvent(item) {
    this.listing({ name: item.name });
  }
  compareFields(doc, evt) {
    if(evt.target.checked) {
      const index = this.compareList.findIndex((e) => e.userId === doc.userId);

      if (index === -1) {
          this.compareList.push(doc);
      } 
      this.behaviorService
    }
    else {
      this.removefromCopare( doc.userId)
    }
  }
  clearCompareList() {
    this.compareList = [];
  }
  removefromCopare(userId) {
    this.compareList.forEach((ele, index) => {
      if(ele.userId === userId) this.compareList.splice(index, 1);
    });
  }

  compareDoc() {
    this.behaviorService.changeCompareIds(this.compareList);
    this.router.navigate(['/dashboard/listingCompare']);
  }
  ngOnDestroy() {
    localStorage.removeItem('typical_hours');
  }
}
