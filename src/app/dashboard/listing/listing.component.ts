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
  serviceQuestion;
  languageQuestion;
  avalibilityQuestion;
  loggedInUser;
  loggedInRole;
  id;
  lat;
  long;
  private sub: any;
  doctorsListing = [];
  allDoctorList = [];
  compareList = [];
  typical_hours = [];
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

  listingPayload = {
    ids: [],
    zipcode: '',
    languageId: '',
    typicalHoursId: '',
    rating: null,
    miles: '',
    latLong: '',
    age_range: '',
    name: '',
    type: 'service',
    serviceOfferId: '',
  }

  currentPage;
  totalItems;
  itemsPerPage = 10
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
    // const routeParams = this.route.snapshot.params;
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

    this.loggedInUser = localStorage.getItem('loginID');
    this.loggedInRole = localStorage.getItem('roles');
    if(localStorage.getItem('typical_hours')) {
      this.typical_hours = localStorage.getItem('typical_hours').split(',');
    }
    this.getProfileQuestion();
    this.route.queryParams.subscribe(queryParams => {
       this.id = queryParams.id;
      this.listing({
        ids: this.id ? [this.id] : [],
      });
    });
  }

  getProfileQuestion() {
    let path = `questionare/get-profile-questions`;
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
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
       this._sharedService.loader('hide');
     });
  }
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      this.listingPayload.zipcode = '';
      if (status === 'OK') {
        if (results[0]) {
          // find country name
          for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0;b<results[0].address_components[i].types.length;b++) {
            if (results[0].address_components[i].types[b] === "postal_code") {
              this.listingPayload.zipcode = results[0].address_components[i].long_name;
              this.listing(this.listingPayload)
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
  listing(filter) {
    this._sharedService.loader('show');
    let path = 'user/filter';
    this._sharedService.postNoAuth(filter, path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.doctorsListing = res.data;
        this.totalItems =  this.doctorsListing.length;
        for(let i = 0; i < this.doctorsListing.length; i++) {
          if(this.doctorsListing[i].userData.ratingAvg) {
            this.doctorsListing[i].userData.ratingAvg = Math.floor(this.doctorsListing[i].userData.ratingAvg)
          }
        }

       this.createNameList(this.doctorsListing)
        // this.toastr.success(res.message);
      } else {
        this.toastr.error(res.message);
      }
    }, err => {
      this._sharedService.loader('hide');
    });
  }
  removeFilter() {
    this.listingPayload = {
      ids: [],
      zipcode: '',
      languageId: '',
      typicalHoursId: '',
      rating: null,
      miles: '',
      latLong: '',
      age_range: '',
      name: '',
      type: 'service',
      serviceOfferId: '',
    }
    this.listing({
      ids: [this.id],
    });
  }
  onOptionsSelected(value:string, type){
    this.listingPayload.languageId ='';
    this.listingPayload.typicalHoursId = '';
    this.listingPayload.rating = '';
    this.listingPayload.serviceOfferId = '';

    if (type === 'language') {
      this.listingPayload.languageId= value;
    }
    if (type === 'hours') {
      this.listingPayload.typicalHoursId = value;
    }
    if (type === 'rating') {
      this.listingPayload.rating = parseInt(value);
    }
    if(type="serviceType"){
      this.listingPayload.serviceOfferId = value;
    }
    this.listing(this.listingPayload);
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
      this.listingPayload.miles = evt.target.value;
      this.listingPayload.latLong = `${this.long}, ${this.lat}`;
      this.listing(this.listingPayload);
    } else {
      this.listing(this.listingPayload)
    }
  }
  changeAge(evt) {
    this.listingPayload.age_range = evt.target.value;
    this.listing(this.listingPayload)
  }
  selectEvent(item) {
    this.listingPayload.name = item.name;
    this.listing(this.listingPayload);
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
  likeProfile(evt, drId) {
    if(evt.target.checked) {
      this._sharedService.loader('show');
      let path = 'user/add-favorite';
      this._sharedService.post({ drId: drId }, path).subscribe((res: any) => {
        if (res.statusCode = 200) {
          this.toastr.success(res.message);
        } else {
          this.toastr.error(res.message);
        }
      }, err => {
        this._sharedService.loader('hide');
      });
    }
    else {
      this._sharedService.loader('show');
      this._sharedService.removeFav(drId,).subscribe((res: any) => {
        if (res.statusCode = 200) {
          this.toastr.success(res.message);
        } else {
          this.toastr.error(res.message);
        }
      }, err => {
        this._sharedService.loader('hide');
      });
    }
  }
  ngOnDestroy() {
    localStorage.removeItem('typical_hours');
  }
}
