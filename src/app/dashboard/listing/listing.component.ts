import { Component, OnInit, ElementRef, ViewChild, NgZone, HostListener } from '@angular/core';
import { animate, state, trigger, transition, style } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
import { BehaviorService } from '../../shared/services/behavior.service';
import { HeaderStatusService } from '../../shared/services/header-status.service';
import { _FEATURE_CONFIGS } from '@ngrx/store/src/tokens';
import { Questionnaire, QuestionnaireAnswer } from '../questionnaire.service';
import { rootEffectsInit } from '@ngrx/effects';
import { FitBoundsService } from '@agm/core/services/fit-bounds';
import { Professional } from '../../models/professional';
import { slideVerticalAnimation } from '../../_helpers/animations';

const animation = trigger('expandVertical', [
  transition(':enter', [
    style({display: 'block', height: 0, opacity: 0}),
    animate('300ms ease', style({height: '*', opacity: 1}))
  ]),
  transition(':leave', [
    animate('300ms ease', style({height: '0', opacity: 0}))
  ])
])
@Component({
  selector: 'app-listing',
  templateUrl: './listing.html',
  styleUrls: ['./listing.scss'],
  animations: [animation, slideVerticalAnimation], 

})
export class ListingComponent implements OnInit {

  @ViewChild('searchGlobal')
  public searchGlobalElementRef: ElementRef;

  public lat: number; /** todo: if not needed, delete */
  public long: number; /** todo: if not needed, delete */

  public isVirtual: boolean = false;
  public mapdata: {lat: number, lng: number, zoom: number} = {lat: 53.89, lng: -111.25, zoom: 3};
  public isFinderSticked: boolean = false;
  public isMapView: boolean = false;
  public isMapSizeBig: boolean = false;
  public filterTarget: Filter = null;
  public currentPage: number = 1;
  private professionals: Professional[] = null;
  public pages: {current: number, itemsPerPage: number, data: Professional[][]} = {
    current: 1,
    itemsPerPage:12,
    data: null
  }


  private geoCoder;
  keyword = 'name';
  serviceQuestion; /** todo: can be deleted. */
  languageQuestion; /** todo: can be deleted. */
  avalibilityQuestion; /** todo: can be deleted. */
  currentAddress = '';
  loggedInUser;
  loggedInRole;
  id;

  private sub: any;
  doctorsListing: any = []; /** can be deleted (change to professionals) */
  allDoctorList = []; /**todo: can be deleted because new ui doesn't have feature to search by doctor name */
  compareList = [];
  typical_hours = [];
  type = 'Goal';

  ageRangeList = [
    { id: '5eb1a4e199957471610e6cd7', name: 'Not Critical', checked: false },
    { id: '5eb1a4e199957471610e6cd8', name: 'Child (<12)', checked: false },
    { id: '5eb1a4e199957471610e6cd9', name: 'Adolescent (12-18)', checked: false },
    { id: '5eb1a4e199957471610e6cda', name: 'Adult (18+)', checked: false },
    { id: '5eb1a4e199957471610e6cdb', name: 'Senior (>64)', checked: false },
  ]; /** todo: can be deleted. */
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
  ]; /** todo: can be deleted. */
  priceList = [
    { value: '', name: 'Not Critical' },
    { value: '< $50', name: '$ < 50' },
    { value: '$50-100', name: '$ 50-100' },
    { value: '$100-200', name: '$ 100-200' },
    { value: '$200-500', name: '$ 200-500' },
    { value: '$500-1000', name: '$ 500-1000' },
    { value: '$1000', name: '$ > 1000' },
  ];

  
  queryLatLong;
  serviceData;
  treatmentModalities;
  serviceType;
  serviceOffering;
  categoryList;

  totalItems; /** todo: can be deleted because it's not used anywhere */

  public listingPayload = {
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
  
  public filters: Filter[] = [
    {_id: 'distance', item_text: 'distance', type: 'slider', payloadName: 'miles', active: false, range: {min: 5, max: 100, current: 100, default: 100}},
    {_id: 'gender', item_text: 'gender', type: 'radio', payloadName: 'gender', active: false, options: [ 
      // {_id: 'all', item_text: 'All', active: false, subans: false}, 
      {_id: 'male', item_text: 'Male', active: false, subans: false}, 
      {_id: 'female', item_text: 'Female', active: false, subans: false } 
    ]},
    {_id: 'rating', item_text: 'rating', type: 'radio', payloadName: 'rating', active: false, options: [ 
      // {_id: '0', item_text: 'All', active: false, subans: false}, 
      {_id: '5', item_text: '5 Stars', active: false, subans: false}, 
      {_id: '4', item_text: '4 Stars', active: false, subans: false}, 
      {_id: '3', item_text: '3 Stars', active: false, subans: false}, 
    ]},
    {_id: 'language', item_text: 'Language', type: 'radio', payloadName: 'languageId', active: false, options: [/** use server data */]},
    {_id: 'availability', item_text: 'availability', type: 'checkbox', payloadName: 'typical_hours', active: false, options: [/** use server data */]},
    {_id: 'service', item_text: 'service type', type: 'radio', payloadName: 'serviceOfferId', active: false, options: [/** use server data */]},
    {_id: 'pricing', item_text: 'pricing', type: 'radio', payloadName: 'price_per_hours', active: false, options: [
      { _id: '< $50',   item_text: '$ < 50', active: false, subans: false },
      { _id: '$50-100', item_text: '$ 50-100', active: false, subans: false },
      { _id: '$100-200', item_text: '$ 100-200', active: false, subans: false },
      { _id: '$200-500', item_text: '$ 200-500', active: false, subans: false },
      { _id: '$500-1000', item_text: '$ 500-1000', active: false, subans: false },
      { _id: '$1000', item_text: '$ > 1000', active: false, subans: false },
      ]},
    {_id: 'age', item_text: 'age range', type: 'checkbox', payloadName: 'age_range', active: false, options: [
      {_id: '5eb1a4e199957471610e6cd7', item_text: 'Not Critical', active: false, subans: false},
      {_id: '5eb1a4e199957471610e6cd8', item_text: 'Child (<12)', active: false, subans: false},
      {_id: '5eb1a4e199957471610e6cd9', item_text: 'Adolescent (12-18)', active: false, subans: false},
      {_id: '5eb1a4e199957471610e6cda', item_text: 'Adult (18+)', active: false, subans: false},
      {_id: '5eb1a4e199957471610e6cdb', item_text: 'Senior (>64)', active: false, subans: false},
    ]},
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

  get listingContainerClass(){
    var c = "";
    if(!this.isVirtual){
      if(this.isMapView){ c = 'd-none'; }
      else if(this.isMapSizeBig){ c = 'col-md-6 col-lg-3'; }
      else{ c = 'col-md-6 col-lg-9'; }
    }
    return c;
  }

  get listingItemClass(){
    var c = '';
    if(this.isVirtual){ c = 'col-md-6 col-lg-3'; }
    else if(!this.isMapSizeBig){ c = 'col-lg-4'; }
    return c;
  }

  ngOnDestroy() {
    localStorage.removeItem('typical_hours');
  }

  ngOnInit(): void {
    this.getProfileQuestion(); 
    const personalMatch = this._sharedService.getPersonalMatch();

    /** init mapdata */
    var lat: number, lng: number;
    if(personalMatch && !personalMatch.latLong.match(/null/)){
      var latLong = personalMatch.latLong.split(',');
      lat = Number(latLong[0].trim());
      lng = Number(latLong[1].trim());
    }else{
      var latStr = localStorage.getItem('ipLat');
      var lngStr = localStorage.getItem('ipLong');  
      if(latStr && lngStr){
        lat = Number(latStr);
        lng = Number(lngStr);
      }
    }
    if(lat & lng){ this.setMapdata({lat: lat, lng: lng, zoom: 10}); }

    
    this.route.queryParams.subscribe(queryParams => {
      this.isVirtual = (queryParams.virtual == 'true')? true : false;
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
        this.listing({ //this has to use this.listingPayload
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

          this.setFilterByPersonalMatch();

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

    // this.mapsAPILoader.load().then(() => {
    //   this.geoCoder = new google.maps.Geocoder;
    //   this.mapsAPILoader.load().then(() => {
    //     this.geoCoder = new google.maps.Geocoder;
    //     const autocomplete = new google.maps.places.Autocomplete(this.searchGlobalElementRef.nativeElement);
    //     autocomplete.addListener('place_changed', () => {
    //       this.ngZone.run(() => {
    //         // get the place result

    //         const place: google.maps.places.PlaceResult = autocomplete.getPlace();
    //         console.log(place);

    //         // verify result
    //         if (place.geometry === undefined || place.geometry === null) {
    //           return;
    //         }
    //         this.lat = place.geometry.location.lat();
    //         this.long = place.geometry.location.lng();

    //         if (personalMatch) {
    //           this.listingPayload.ids = personalMatch.ids ? personalMatch.ids : [];
    //           this.listingPayload.age_range = personalMatch.age_range;
    //           this.listingPayload.typicalHoursId = personalMatch.typical_hours.length > 1 ? '' : personalMatch.typical_hours[0];

    //           this.listingPayload.typical_hours = personalMatch.typical_hours.length > 1 ? personalMatch.typical_hours : [];
    //           this.listingPayload.type = personalMatch.type;
    //           this.listingPayload.latLong = `${this.long}, ${this.lat}`;

    //           this.listing(this.listingPayload);
    //         } else {
    //           this.listing(
    //             {
    //               ids: this.id ? [this.id] : [],
    //               latLong: `${this.long}, ${this.lat}`,
    //               miles: this.listingPayload.miles,
    //               type: this.listingPayload.type
    //             }
    //           );
    //         }
    //         // this.listing({latLong: `${this.long}, ${this.lat}`});
    //       });
    //     });
    //   });

    // });
  }

  private timerListing: any;
  onChangeMapCenter(e: {lat: number, lng: number}){
    if(this.timerListing){ clearTimeout(this.timerListing); }
    this.timerListing = setTimeout(()=>{ this.setMapdata(e, false); }, 500)
  }
  setMapdata(data: {lat: number, lng: number, zoom?: number}, updateListing: boolean = false){ 
    this.mapdata.lat = data.lat;
    this.mapdata.lng = data.lng;
    if(data.zoom){ this.mapdata.zoom = data.zoom;}

    this.listingPayload.latLong = data.lng + ', ' + data.lat;
    if(updateListing){ this.listing(this.listingPayload, false); }
  }

  /** get filter by id */
  getFilter(id: string): Filter{
    var f: Filter;
    for(var i=0; i<this.filters.length; i++){
      if(id == this.filters[i]._id){ f = this.filters[i]; break; }
    }
    return f;
  }

  /** get filter by payloadName */
  getFilterByPayloadName(payloadName: string): Filter{
    var f: Filter;
    for(var i=0; i<this.filters.length; i++){
      if(payloadName == this.filters[i].payloadName){ f = this.filters[i]; break; }
    }
    return f;
  }

  /** set options for target filter (this is for the filter which options are fetched from server) */
  setFilterOptions(id: string, q: Questionnaire){
    var f = this.getFilter(id);
    var options: QuestionnaireAnswer[] = [];

    q.answers.forEach(a=>{
      options.push({_id: a._id, item_text: a.item_text, active: false, subans: a.subans});
    });
    f.options = options;
  }

  getProfileQuestion() {
    const path = `questionare/get-profile-questions`;
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      if (res.statusCode === 200) {
        res.data.forEach((element: Questionnaire) => {
          if (element.question_type === 'service' && element.slug === 'offer-your-services') {
            this.serviceQuestion = element; /** todo: can be deleted. */
            this.setFilterOptions('service', element);
          }
          if (element.question_type === 'service' && element.slug === 'languages-you-offer') {
            this.languageQuestion = element; /** todo: can be deleted. */
            this.setFilterOptions('language', element);
            if(this.professionals && this.professionals.length>0){
              var languageSet = this.getFilter('language').options;
              if(this.professionals && this.professionals.length>0){
                this.professionals.forEach((p: Professional)=>{ p.populate('languages', languageSet); });
              }
            }
          }
          if (element.question_type === 'availability') {
            this.avalibilityQuestion = element; /** todo: can be deleted. */
            this.setFilterOptions('availability', element);
          }
        });
        this.setFilterByPersonalMatch();

      } else {
        this.toastr.error(res.message);
      }
    }, err => {
      this._sharedService.loader('hide');
    });
  }

  listing(filter, showLoader: boolean = true) {
    if (filter.latLong == 'null, null') {
      filter.latLong = '';
    }
    if(this.isVirtual){ filter.virtual = true; }
    if(showLoader){ this._sharedService.loader('show'); }
    const path = 'user/filter';
    this._sharedService.postNoAuth(filter, path).subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.doctorsListing = res.data; /**todo: can be deleted */
        this.doctorsListing = this.doctorsListing.sort((a, b) => a.userData.calcDistance - b.userData.calcDistance); /**todo: can be deleted */
//        this.totalItems = this.doctorsListing.length;/**todo: can be deleted */
        for (let i = 0; i < this.doctorsListing.length; i++) {
          if (this.doctorsListing[i].userData.ratingAvg) {
            this.doctorsListing[i].userData.ratingAvg = Math.floor(this.doctorsListing[i].userData.ratingAvg);
          }
        } //todo: can be deteled
        this.createNameList(this.doctorsListing); // todo: can be deleted

        var professionals = [];
        var languageSet = this.getFilter('language').options;

        res.data.forEach((d:any)=>{
          var professional = new Professional(d.userId, d.userData, d.ans);
          if(languageSet && languageSet.length>0){ professional.populate('languages', languageSet); }
          professionals.push(professional);
        });
  
        this.professionals = professionals;
        this.professionals = this.professionals.sort((a, b)=> a.distance - b.distance);

        this.filterProfessionalsByPage()

        this.totalItems = this.professionals; /** todo: can be deleted because it's not used anywhere */

        this._sharedService.loader('hide');
      } else {
        this.toastr.error(res.message);
      }
    }, err => {
      this._sharedService.loader('hide');
    });
  }

  /**todo: if needed, have to test. currently it's not good for map. if not needed, delete it */
  removeFilter() {
    this._sharedService.loader('show');
    this.lat = null;
    this.long = null;
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

  /** set default value to selected listingPayload property */
  removeFilterOne(payloadName: string){
    var val: any;
    switch(payloadName){
      case 'rating': val = 0; break;
      case 'miles': val = 100; break;
      case 'latLong': val = `${localStorage.getItem('ipLong')}, ${localStorage.getItem('ipLat')}`; break;
      case 'type': val = this.type; break;
      case 'ids':
      case 'age_range':
      case 'typical_hours':
        val = [];
        break;

      case 'zipcode': 
      case 'languageId':
      case 'typicalHoursId':
      case 'name':       
      case 'serviceOfferId':
      case 'gender': 
      case 'price_per_hours':
        val = ''; 
        break;
    }
    this.listingPayload[payloadName] = val;
  }

  /** set formatted value to selected listingPayload property  */
  setFilterOne(val: string | string[] | number, payloadName: string){
    if(payloadName == 'rating'){
      this.listingPayload[payloadName] = (typeof val == 'string')? Number(val) : (typeof val == 'number')? val : 0; 
    }
    if(payloadName == 'miles'){
      this.listingPayload[payloadName] = (typeof val == 'string')? Number(val) : (typeof val == 'number')? val : 100;
    }
    if(typeof val == 'string'){
      if(payloadName == 'rating'){ this.listingPayload[payloadName] = Number(val); }
      else{ this.listingPayload[payloadName] = val; }
    }
    else{ this.listingPayload[payloadName] = val }
  }

  /** todo: can be deleted */
  onOptionsSelected(value, type) {
    console.log(value, type)
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

  /**todo: can be deleted because new ui doesn't have feature to search by doctor name */
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

  /** todo: can be deleted */
    changeMiles(evt) {
    this.listingPayload.miles = Math.round(Math.ceil(evt.target.value / 5) * 5);
    if (this.long && this.lat) {
      this.listingPayload.latLong = `${this.long}, ${this.lat}`;
    } else {
      this.listingPayload.latLong = `${localStorage.getItem('ipLong')}, ${localStorage.getItem('ipLat')}`;
    }
    this.listing(this.listingPayload);
  }

  /** todo: can be deleted */
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

  removeProfessionalFromCompare(id: string){
    for(var i=0; i<this.compareList.length; i++){
      var p = this.compareList[i];
      if(p.id == id){
        p.uncheckForCompare();
        this.compareList.splice(i, 1);
        break;
      }
    }
  }
  removeProfessionalFromCompareAll(){
    this.compareList.forEach(p=>{ p.uncheckForCompare(); });
    this.compareList = [];
  }
  updateCompareList(){
    var list = [];
    this.professionals.forEach(p=>{
      if(p.isCheckedForCompare){ list.push(p); }
    });
    this.compareList = list;
  }

  compareProfessionals(){
    var promiseAll = []
    this.compareList.forEach((p: Professional)=>{ promiseAll.push(this.getServiceCategories(p)); });

    this._sharedService.loader('show');
    Promise.all(promiseAll).then(()=>{
      console.log(this.compareList);

      /** make compareList compatible with other pages */
      var compareList = [];
      this.compareList.forEach((p: Professional)=>{
        compareList.push(p.dataComparable);
      });

      this.behaviorService.changeCompareIds(compareList);
      this.router.navigate(['/dashboard/listingCompare']);
    })
    .catch(err=>{ console.log(err); })
    .finally(()=>{ this._sharedService.loader('hide')});
  }
  getServiceCategories(p: Professional): Promise<boolean>{
    return new Promise((resolve, reject)=>{
      const path = `user/getService/${p.id}`;
      this._sharedService.getNoAuth(path).subscribe((res: any) => {
        if (res.statusCode === 200) {
          var categories = {
            typeOfProvider: [],
            treatmentModality: [],
            service: [],
            serviceOffering: [],
          }
          res.data.forEach((e: any) => {
            switch(e.slug){
              case 'providers-are-you': categories.typeOfProvider.push(e); break;
              case 'treatment-modalities': categories.treatmentModality.push(e); break;
              case 'your-goal-specialties': categories.service.push(e); break;
              case 'your-offerings': categories.serviceOffering.push(e); break;
            }
          });
          Object.keys(categories).forEach((k,i)=>{ p.setServiceCategory(k, categories[k]); });
          resolve(true);          
        } else { reject('server error'); }
      }, 
      (error) => { reject(error); });
    })
  }
//  addProfessionalToCompare(p: Professional, e: Event){ this.compareFields(p.rowdata, e); }
  /**todo: can be deleted */
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

  /**todo: can be deleted */
  getCategoryServices(userId) {
    this.serviceData = [];
    this.treatmentModalities = [];
    this.serviceType = [];
    this.serviceOffering = [];
    const path = `user/getService/${userId}`;
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      if(this.professionals){ this._sharedService.loader('hide'); }

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
      if(this.professionals){ this._sharedService.loader('hide'); }
    });
  }

  /**todo: can be deteled */
  clearCompareList() {
    this.compareList = [];
  }

  /**todo: can be deteled */
  removefromCopare(userId) {
    this.compareList.forEach((ele, index) => {
      if (ele.userId === userId) { this.compareList.splice(index, 1); }
    });
  }

  /**todo: can be deteled */
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

  /** trigger when click outside of filter and close filter menu */
  onClickOutsideOfFilter(e: Event){
    if(this.filterTarget){ 
      var finder = this.host.querySelector('#expertFinder');
      var target = e.target as HTMLElement;
      if(!finder.contains(target)){
        this.setFilterTarget(null); 
        e.preventDefault(); /** doesn't work? */
      }
    }
  }

  /** trigger when filter is sticked to top */
  changeStickyStatus(isSticked: boolean){
    this.isFinderSticked = isSticked;
    if(isSticked){ this._headerService.hideHeader(); }
    else{ this._headerService.showHeader(); }
  }

  /** change view map <----> list for small viewport */
  toggleView(){ this.isMapView = !this.isMapView; }

  /** change map size for large viewport */
  toggleMapSize(){ this.isMapSizeBig = !this.isMapSizeBig; }

  /** calculate filter menu position */
  getFilterDropdownPosition(){
    var idxCurrentFilter: number;
    var dropdownWidth = 350; 
    for(var i=0; i< this.filters.length; i++){
      if(this.filters[i]._id == this.filterTarget._id){ idxCurrentFilter = i; break; }
    }
    var filters = this.host.querySelectorAll('.filters li button');
    var filter = (filters)? filters[idxCurrentFilter] : null;
    if(!filter){ return; }

    var rectF = filter.getBoundingClientRect();

    var style: {top: string, left?: string, width?: string } = {top: Math.floor(rectF.bottom + 20) + 'px'};
    if(dropdownWidth + 30 <= window.innerWidth){
      style.width = dropdownWidth + 'px';

      var centerF = rectF.left + rectF.width / 2;
      var leftD = centerF - dropdownWidth / 2;
      var rightD = centerF + dropdownWidth / 2;

      if(leftD >= 15 && rightD <= window.innerWidth - 15){ style.left = Math.floor(leftD) + 'px'; }
      else if(leftD < 15){ style.left = '15px'; }
      else{ style.left = (window.innerWidth - 15 - dropdownWidth) + 'px'; }      
    }
    return style;
  }

  /** determine which filter menu will be shown up or hide filter menu */
  setFilterTarget(i: number){
    if(i === null){ this.filterTarget = null; }
    else if(this.filterTarget){
      if(this.filters[i]._id == this.filterTarget._id){ this.filterTarget = null; }
      else{ this.filterTarget = this.filters[i]; }
    }else{
      this.filterTarget = this.filters[i];
    }
  }

  /** if personalMatch exist, filter will be set by the personalMatch information */
  setFilterByPersonalMatch(){
    var personalMatch = this._sharedService.getPersonalMatch();
    if(personalMatch){
      var answers: string[] = [];
      Object.keys(personalMatch).forEach((k)=>{
        if(k.match(/ids|age_range|typical_hours/)){
          personalMatch[k].forEach((id: string)=>{ answers.push(id);})
        }
      });
      this.filters.forEach(f=>{
        if(f.options){
          f.options.forEach(o=>{
            for(var i=0; i<answers.length; i++){
              if(o._id == answers[i]){ 
                o.active = true;
                f.active = true;
                break;
              }
            }
          });
        }
      })
    }
  }

  /** trigger when click save / clear in filter menu and update filter */
  updateFilter(id: string){
    // this.setFilterTarget(null);

    var f = this.getFilter(id);

    if(f.type == 'radio'){
      var val: string = null;
      var selected: QuestionnaireAnswer;
      for(var i=0; i<f.options.length; i++){
        if(f.options[i].active){ selected = f.options[i]; break; }
      }
      val = selected? selected._id : null;

      f.active = val? true: false;
      if(!val){ this.removeFilterOne(f.payloadName); }
      else{     this.setFilterOne(val, f.payloadName); }  

    }else if(f.type == 'checkbox'){
      var vals: string[] = [];
      f.options.forEach(o=>{ if(o.active){ vals.push(o._id); } });

      f.active = (vals.length>0)? true : false;
      if(vals.length>0){ this.removeFilterOne(f.payloadName);}
      else{              this.setFilterOne(vals, f.payloadName); }  
    }else if(f.type == 'slider'){
      this.setFilterOne(f.range.current, f.payloadName);
      f.active = (f.range.current != f.range.default);
    }
    this.listing(this.listingPayload);
  }

  changePage(i: number){
    if(i <= 0){ i = 1 }
    else if(i > this.pages.data.length){ i = this.pages.data.length; }
    this.pages.current = i;
  
    setTimeout(()=>{
      var rectF = this.host.querySelector('#expertFinder').getBoundingClientRect();;
      var rectL = this.host.querySelector('#professionalList').getBoundingClientRect();
      window.scrollBy(0,rectF.top - rectF.height + rectL.top);
    });
  }

  filterProfessionalsByPage(){
    var pages = [];
    var prosInPage = [];
    this.professionals.forEach((p, i)=>{
      prosInPage.push(p);

      if(prosInPage.length == this.pages.itemsPerPage){
        pages.push(prosInPage);
        prosInPage = [];
      }

      if(i == this.professionals.length - 1){ pages.push(prosInPage); }
      
    })
    this.pages.data = pages;
  }
}

type Filter = {
  _id: string, 
  item_text: string, 
  type: string, 
  payloadName: string;
  active: boolean;
  options?: QuestionnaireAnswer[],
  range?: {min: number; max: number; current: number; default: number}
};
