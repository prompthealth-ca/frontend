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
  currentAddress="";
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
  type = 'Goal';
  ageRangeList  = [
    { id: '', name: 'Not Critical' },
    { id: '5eb1a4e199957471610e6cd8', name: 'Child' },
    { id: '5eb1a4e199957471610e6cd9', name: 'Adolescent' },
    { id: '5eb1a4e199957471610e6cda', name: 'Adult' },
    { id: '5eb1a4e199957471610e6cdb', name: 'Senior' },
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
    miles: 5,
    latLong: '',
    age_range: [],
    name: '',
    type: 'service',
    serviceOfferId: '',
  }
  queryLatLong

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
    this.listingPayload.latLong = `${localStorage.getItem('ipLong')}, ${localStorage.getItem('ipLat')}`;
  }

  ngOnInit(): void {
    
    const personalMatch = this._sharedService.getPersonalMatch();
    if(personalMatch) {
      this.listing(personalMatch);
    } else {
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
              this.listing(
                {
                  
                  ids: this.id ? [this.id] : [],
                  latLong: `${this.long}, ${this.lat}`,
                  miles: this.listingPayload.miles,
                  type:this.listingPayload.type
              }
              );
              // this.listing({latLong: `${this.long}, ${this.lat}`});
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
        this.type = queryParams.type;
        this.listingPayload.ids = [];
        this.listingPayload.ids.push(queryParams.id);
        this.listingPayload.type =  queryParams.type;
        this.listing({
          ids: this.id ? [this.id] : [],
          type: this.type,
          latLong: (this.lat && this.long) ? `${this.long}, ${this.lat}` : `${localStorage.getItem('ipLong')}, ${localStorage.getItem('ipLat')}`,
          miles: this.listingPayload.miles,
          //latLong: `${localStorage.getItem('ipLong')}, ${localStorage.getItem('ipLat')}`, 
        });
      });
    }
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
  listing(filter) {
    console.log('filter', filter);
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

        this.createNameList(this.doctorsListing);
        this._sharedService.loader('hide');
      } else {
        this.toastr.error(res.message);
      }
    }, err => {
      this._sharedService.loader('hide');
    });
  }
  removeFilter() {
    this._sharedService.loader('show');
    this.lat="";
    this.long="";
    this.currentAddress="";
    this.listingPayload = {
      ids: [],
      zipcode: '',
      languageId: '',
      typicalHoursId: '',
      rating: null,
      miles: 5,
      latLong: '',
      age_range: [],
      name: '',
      type: this.type,
      serviceOfferId: '',
    }
    this.listing({
      ids: [this.id],
      miles:this.listingPayload.miles,
      latLong: (this.lat && this.long) ? `${this.long}, ${this.lat}` : `${localStorage.getItem('ipLong')}, ${localStorage.getItem('ipLat')}`,
      type: this.type,
    });
    this._sharedService.loader('hide');
  }
  onOptionsSelected(value:string, type){
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
    this.listingPayload.miles = Math.round(Math.ceil(evt.target.value / 5) * 5);
    if(this.long &&  this.lat) {
      this.listingPayload.latLong = `${this.long}, ${this.lat}`;
    }
    else {
      this.listingPayload.latLong = `${localStorage.getItem('ipLong')}, ${localStorage.getItem('ipLat')}`;
    }
    this.listing(this.listingPayload);
    
  }
  changeAge(evt) {
    this.listingPayload.age_range = evt.target.id ? [evt.target.id] : [];
    this.listing(this.listingPayload);
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
