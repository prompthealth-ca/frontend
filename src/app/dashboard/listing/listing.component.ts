import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
import { BehaviorService } from '../../shared/services/behavior.service';
import { HeaderStatusService } from '../../shared/services/header-status.service';
import { _FEATURE_CONFIGS } from '@ngrx/store/src/tokens';
import { rootEffectsInit } from '@ngrx/effects';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.html',
  styleUrls: ['./listing.scss']

})
export class ListingComponent implements OnInit {
  @ViewChild('searchGlobal')

  public isFinderSticked: boolean = false;
  public isMapView: boolean = false;
  public isMapSizeBig: boolean = false;
  public filterTarget: string = null;

  public searchGlobalElementRef: ElementRef;
  private geoCoder;
  keyword = 'name';
  serviceQuestion;
  languageQuestion;
  avalibilityQuestion;
  currentAddress = '';
  loggedInUser;
  loggedInRole;
  id;
  lat;
  long;
  private sub: any;
  doctorsListing: any = [];
  allDoctorList = [];
  compareList = [];
  typical_hours = [];
  type = 'Goal';
  ageRangeList = [
    { id: '5eb1a4e199957471610e6cd7', name: 'Not Critical', checked: false },
    { id: '5eb1a4e199957471610e6cd8', name: 'Child (<12)', checked: false },
    { id: '5eb1a4e199957471610e6cd9', name: 'Adolescent (12-18)', checked: false },
    { id: '5eb1a4e199957471610e6cda', name: 'Adult (18+)', checked: false },
    { id: '5eb1a4e199957471610e6cdb', name: 'Senior (>64)', checked: false },
  ];
  ratingsOption = [
    {
      _id: 0,
      item_text: 'All'
    },
    {
      _id: 5,
      item_text: '5 Stars'
    },
    {
      _id: 4,
      item_text: '4 Stars'
    },
    {
      _id: 3,
      item_text: '3 Stars'
    }
  ];
  priceList = [
    { value: '', name: 'Not Critical' },
    { value: '< $50', name: '$ < 50' },
    { value: '$50-100', name: '$ 50-100' },
    { value: '$100-200', name: '$ 100-200' },
    { value: '$200-500', name: '$ 200-500' },
    { value: '$500-1000', name: '$ 500-1000' },
    { value: '$1000', name: '$ > 1000' },
  ];
  listingPayload = {
    ids: [],
    zipcode: '',
    languageId: '',
    typicalHoursId: '',
    rating: 0,
    miles: 100,
    latLong: '',
    age_range: [],
    name: '',
    type: 'service',
    serviceOfferId: '',
    price_per_hours: '',
    gender: '',
    typical_hours: [],
  };
  queryLatLong;
  serviceData;
  treatmentModalities;
  serviceType;
  serviceOffering;
  categoryList;

  currentPage;
  totalItems;
  itemsPerPage = 10;

  public filters: Filter[] = [
    {id: 'distance', label: 'distance'},
    {id: 'gender', label: 'gender'},
    {id: 'rating', label: 'rating'},
    {id: 'availability', label: 'availability'},
    {id: 'service', label: 'service type'},
    {id: 'pricing', label: 'pricing'},
    {id: 'age', label: 'age range'},
  ];

  private host: HTMLElement; 

  constructor(
    private behaviorService: BehaviorService,
    private route: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader,
    private router: Router,
    private ngZone: NgZone,
    private _sharedService: SharedService,
    private toastr: ToastrService,
    private _headerService: HeaderStatusService,
    _el: ElementRef,
  ) {
    this.host = _el.nativeElement;
    this.listingPayload.latLong = `${localStorage.getItem('ipLong')}, ${localStorage.getItem('ipLat')}`;
  }
  ngOnInit(): void {
    this.getProfileQuestion();
    const personalMatch = this._sharedService.getPersonalMatch();
    this.route.queryParams.subscribe(queryParams => {

      this.id = queryParams.id;
      this.type = queryParams.type;
      if (queryParams.id && queryParams.type) {


        this.loggedInUser = localStorage.getItem('loginID');
        this.loggedInRole = localStorage.getItem('roles');
        if (localStorage.getItem('typical_hours')) {
          this.typical_hours = localStorage.getItem('typical_hours').split(',');
        }
        this.listingPayload.ids = [];
        this.listingPayload.ids.push(queryParams.id);
        this.listingPayload.type = queryParams.type;
        this.listing({
          ids: this.id ? [this.id] : [],
          type: this.type,
          latLong: (this.lat && this.long) ? `${this.long}, ${this.lat}` : `${localStorage.getItem('ipLong')}, ${localStorage.getItem('ipLat')}`,
          miles: this.listingPayload.miles,
          // latLong: `${localStorage.getItem('ipLong')}, ${localStorage.getItem('ipLat')}`,
        });
      } else {
        this.loggedInUser = localStorage.getItem('loginID');
        if (personalMatch) {
          this.listingPayload.ids = personalMatch.ids ? personalMatch.ids : [];
          this.listingPayload.age_range = personalMatch.age_range;
          this.listingPayload.typicalHoursId = personalMatch.typical_hours.length > 1 ? '' : personalMatch.typical_hours[0];

          this.listingPayload.typical_hours = personalMatch.typical_hours.length > 1 ? personalMatch.typical_hours : [];

          this.listingPayload.type = personalMatch.type;
          this.listingPayload.latLong = personalMatch.latLong;

          this.listing(this.listingPayload);
        } else {
          this.listing({
            ids: this.id ? [this.id] : [],
            type: this.listingPayload.type,
            latLong: (this.lat && this.long) ? `${this.long}, ${this.lat}` : `${localStorage.getItem('ipLong')}, ${localStorage.getItem('ipLat')}`,
            miles: this.listingPayload.miles,
            // latLong: `${localStorage.getItem('ipLong')}, ${localStorage.getItem('ipLat')}`,
          });
        }
      }
    });

    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;
      this.mapsAPILoader.load().then(() => {
        this.geoCoder = new google.maps.Geocoder;
        const autocomplete = new google.maps.places.Autocomplete(this.searchGlobalElementRef.nativeElement);
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            // get the place result

            const place: google.maps.places.PlaceResult = autocomplete.getPlace();

            // verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
            this.lat = place.geometry.location.lat();
            this.long = place.geometry.location.lng();

            if (personalMatch) {
              this.listingPayload.ids = personalMatch.ids ? personalMatch.ids : [];
              this.listingPayload.age_range = personalMatch.age_range;
              this.listingPayload.typicalHoursId = personalMatch.typical_hours.length > 1 ? '' : personalMatch.typical_hours[0];

              this.listingPayload.typical_hours = personalMatch.typical_hours.length > 1 ? personalMatch.typical_hours : [];
              this.listingPayload.type = personalMatch.type;
              this.listingPayload.latLong = `${this.long}, ${this.lat}`;

              this.listing(this.listingPayload);
            } else {
              this.listing(
                {
                  ids: this.id ? [this.id] : [],
                  latLong: `${this.long}, ${this.lat}`,
                  miles: this.listingPayload.miles,
                  type: this.listingPayload.type
                }
              );
            }
            // this.listing({latLong: `${this.long}, ${this.lat}`});
          });
        });
      });

    });
  }
  getProfileQuestion() {
    const path = `questionare/get-profile-questions`;
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      if (res.statusCode === 200) {
        res.data.forEach(element => {
          if (element.question_type === 'service' && element.slug === 'offer-your-services') {
            this.serviceQuestion = element;
          }
          if (element.question_type === 'service' && element.slug === 'languages-you-offer') {
            this.languageQuestion = element;
          }
          if (element.question_type === 'availability') {
            this.avalibilityQuestion = element;
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
    console.log(filter);

    if (filter.latLong == 'null, null') {
      filter.latLong = '';
    }
    this._sharedService.loader('show');
    const path = 'user/filter';
    this._sharedService.postNoAuth(filter, path).subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.doctorsListing = res.data;
        this.doctorsListing = this.doctorsListing.sort((a, b) => a.userData.calcDistance - b.userData.calcDistance);
        this.totalItems = this.doctorsListing.length;
        for (let i = 0; i < this.doctorsListing.length; i++) {
          if (this.doctorsListing[i].userData.ratingAvg) {
            this.doctorsListing[i].userData.ratingAvg = Math.floor(this.doctorsListing[i].userData.ratingAvg);
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
    this.lat = '';
    this.long = '';
    this.currentAddress = '';
    this.listingPayload = {
      ids: [],
      zipcode: '',
      languageId: '',
      typicalHoursId: '',
      rating: 0,
      miles: 100,
      latLong: `${localStorage.getItem('ipLong')}, ${localStorage.getItem('ipLat')}`,
      age_range: [],
      name: '',
      type: this.type,
      serviceOfferId: '',
      gender: '',
      price_per_hours: '',
      typical_hours: [],
    };
    this.listing({
      ids: this.id ? [this.id] : [],
      miles: this.listingPayload.miles,
      latLong: `${localStorage.getItem('ipLong')}, ${localStorage.getItem('ipLat')}`,
      type: this.type,
    });
    this._sharedService.loader('hide');
  }
  onOptionsSelected(value, type) {
    if (type === 'language') {
      this.listingPayload.languageId = value;
    }
    if (type === 'hours') {
      this.listingPayload.typicalHoursId = value;
    }
    if (type === 'rating') {
      this.listingPayload.rating = value ? parseInt(value) : 0;
    }
    if (type === 'serviceType') {
      this.listingPayload.serviceOfferId = value;
    }
    if (type === 'gender') {
      this.listingPayload.gender = value;
    }
    if (type === 'price') {
      this.listingPayload.price_per_hours = value;
    }
    this.listing(this.listingPayload);
  }
  createNameList(data) {
    this.allDoctorList = [];
    for (const element of data) {
      if (element.userData.firstName) {
        this.allDoctorList.push({
          id: element.userId,
          name: element.userData.firstName,
        });
      }
    }
  }
  changeMiles(evt) {
    this.listingPayload.miles = Math.round(Math.ceil(evt.target.value / 5) * 5);
    if (this.long && this.lat) {
      this.listingPayload.latLong = `${this.long}, ${this.lat}`;
    } else {
      this.listingPayload.latLong = `${localStorage.getItem('ipLong')}, ${localStorage.getItem('ipLat')}`;
    }
    this.listing(this.listingPayload);
  }
  changeAge(evt) {
    this.listingPayload.age_range = evt.target.id ? [evt.target.id] : [];
    this.listing(this.listingPayload);
  }
  // changePrice(price){
  //   this.listingPayload.price_per_hours = price === 'Not Critical' ? '' : price;
  //   this.listing(this.listingPayload);
  // }
  selectEvent(item) {
    this.listingPayload.name = item.name;
    this.listing(this.listingPayload);
  }
  resetNames() {
    this.listingPayload.name = '';
    this.listing(this.listingPayload);

  }
  compareFields(doc, evt) {
    if (evt.target.checked) {
      const index = this.compareList.findIndex((e) => e.userId === doc.userId);

      this.getCategoryServices(doc.userId);
      doc.serviceData = this.serviceData;
      doc.treatmentModalities = this.treatmentModalities;
      doc.serviceType = this.serviceType;
      doc.serviceOffering = this.serviceOffering;

      setTimeout(() => {
        if (index === -1) {
          this.compareList.push(doc);
        }
      }, 1000);

      console.log('compareList ----', this.compareList);
      this.behaviorService;
    } else {
      this.removefromCopare(doc.userId);
    }
  }


  getCategoryServices(userId) {
    this.serviceData = [];
    this.treatmentModalities = [];
    this.serviceType = [];
    this.serviceOffering = [];
    const path = `user/getService/${userId}`;
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.categoryList = res.data;
        this.categoryList.forEach(element => {
          if (element.slug === 'providers-are-you') {
            if (this.serviceData.indexOf(element.item_text) === -1) {
              this.serviceData.push(element);
            }
          }
          if (element.slug === 'treatment-modalities') {
            if (this.treatmentModalities.indexOf(element.item_text) === -1) {
              this.treatmentModalities.push(element);
            }
          }
          if (element.slug === 'your-goal-specialties') {
            if (this.serviceType.indexOf(element) === -1) {
              this.serviceType.push(element.item_text);
            }
          }
          if (element.slug === 'your-offerings') {
            if (this.serviceOffering.indexOf(element) === -1) {
              this.serviceOffering.push(element.item_text);
            }
          }
        });
      } else {
      }
    }, (error) => {
      this._sharedService.loader('hide');
    });
  }
  clearCompareList() {
    this.compareList = [];
  }
  removefromCopare(userId) {
    this.compareList.forEach((ele, index) => {
      if (ele.userId === userId) { this.compareList.splice(index, 1); }
    });
  }
  compareDoc() {
    this.behaviorService.changeCompareIds(this.compareList);
    this.router.navigate(['/dashboard/listingCompare']);
  }
  likeProfile(evt, drId) {
    if (evt.target.checked) {
      this._sharedService.loader('show');
      const path = 'user/add-favorite';
      this._sharedService.post({ drId }, path).subscribe((res: any) => {
        if (res.statusCode === 200) {
          this._sharedService.loader('hide');
          this.toastr.success(res.message);
        } else {
          this._sharedService.loader('hide');
          this.toastr.error(res.message);
        }
      }, err => {
        this._sharedService.loader('hide');
      });
    } else {
      this._sharedService.loader('show');
      this._sharedService.removeFav(drId,).subscribe((res: any) => {
        if (res.statusCode === 200) {
          this._sharedService.loader('hide');
          this.toastr.success(res.message);
        } else {
          this._sharedService.loader('hide');
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

  changeStickyStatus(isSticked: boolean){
    this.isFinderSticked = isSticked;
    if(isSticked){ this._headerService.hideHeader(); }
    else{ this._headerService.showHeader(); }
  }

  toggleView(){
    this.isMapView = !this.isMapView;
  }
  toggleMapSize(){
    this.isMapSizeBig = !this.isMapSizeBig;
  }

  getFilterDropdownPosition(){
    var idxCurrentFilter: number;
    var dropdownWidth = 350; 
    for(var i=0; i< this.filters.length; i++){
      if(this.filters[i].id == this.filterTarget){ idxCurrentFilter = i; break; }
    }
    var filters = this.host.querySelectorAll('.filters li button');
    var filter = (filters)? filters[idxCurrentFilter] : null;
    if(!filter){ return; }

    var rectF = filter.getBoundingClientRect();

    var style: {left: string, width: string } = null;
    if(dropdownWidth + 30 <= window.innerWidth){
      var centerF = rectF.left + rectF.width / 2;
      var leftD = centerF - dropdownWidth / 2;
      var rightD = centerF + dropdownWidth / 2;
      if(leftD >= 15 && rightD <= window.innerWidth - 15){ style = {left: Math.floor(leftD) + 'px', width: dropdownWidth + 'px'}}
      else if(leftD < 15){ style = {left: '15px', width: dropdownWidth + 'px'} }
      else{ style = {left: (window.innerWidth - 15 - dropdownWidth) + 'px', width: dropdownWidth + 'px'}}
      return style;
    }
  }
  setFilterTarget(s: string){
    if(this.filterTarget == s){ this.filterTarget = null; }
    else{ this.filterTarget = s; }
  }
}

type Filter = {id: string, label: string};