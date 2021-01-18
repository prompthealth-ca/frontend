import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { animate, trigger, state, style, transition } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { SharedService } from '../../shared/services/shared.service';
import { HeaderStatusService } from '../../shared/services/header-status.service';
import { EmbedVideoService } from 'ngx-embed-video';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

const expandTitleAnimation = trigger('expandTitle', [
  state('shrink', style({height: '1.2em'})),
  state('expand', style({height: 'auto'})),
  transition('shrink=>expand', animate('600ms ease', style({ height: '*' })) ),
  transition('expand=>shrink', style({height: '1.2em'}) )
]);

const expandSubtitleAnimation = trigger('expandSubtitle', [
  state('shrink', style({display: 'none'})),
  state('expand', style({height: 'auto', display: 'block'})),
  transition('shrink=>expand', [
    style({ display: 'block', height: 0, opacity: 0}),
    animate('600ms ease', style({ height: '*', opacity: 1 }))
  ] ),
  transition('expand=>shrink', style({display: 'none'}) )  
])

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [expandTitleAnimation, expandSubtitleAnimation]
})
export class DetailComponent implements OnInit {

  @ViewChild('closebutton') closebutton;

  /** for Tab */
  public indexTabItem: number = 0;
  public isTabSticked: boolean = false;

  /** for reviews */
  public indexSortReviews: number = 0;
  public rating = []; /* arrays for review object */
  public ratingSorted = [];

  /** for about */
  public professionals: any[]; /* array for professional doctors at centre */
  public professionalsFiltered: any[]; /* arrays for professionals doctors being displayed on the view */
  public isExpandProfessionals: boolean = false;
  public endosements: any[];
  public products: string[]; /* array for products object at centre */
  public providerTypes: any[]; /* array for type of providers that the user offers */
  public treatmentModalities = []; /* array for treatment modalities the user offers */
  public services: string[]; /* array for service type that the user offers */
  public amenities = []; /* これなんだろう？ */
  public serviceOffering = []; /* これはなんだろう？ */


  /** for booking */
  public bookingForm: FormGroup;
  private myId = '';
  public startDate = new Date(); /* used at booking form */
  public minDate = new Date(); /* used at booking form */
  public timingSelectedValue = ''; /* used at booking form */
  public submitted = false; /* used for form verification */
  public iframe: any = []; /* for videos view */
 
  /** for general use */
  public userInfo: any = null;
  public defaultImage = 'assets/img/no-image.jpg';
  public isLoggedIn = '';
  private id: number;
  private languageSet: any[]; /* all language object list which are available on this app */
  private serviceSet: any[]; /* */
  private availabilitySet: any[]; /* all availability object which are available on this app */
  private host: HTMLElement;
  
  /** delete */
  public doctors = []; 
  roles; 
  currentPage; 
  totalItems;
  itemsPerPage = 5;
  public productSearch: ''; /* 多分いらないけど様子見 */
  public yt_iframe_html: any; /* 多分いらないけど様子見 */
//  categoryList;
 // videos: any = [];

  constructor(
    private _route: ActivatedRoute,
    private _sharedService: SharedService,
    private _toastr: ToastrService,
    private _fb: FormBuilder,
    private _embedService: EmbedVideoService,
    private _headerStatusService: HeaderStatusService,
    el: ElementRef,
  ) {  this.host = el.nativeElement; }

  get f() { return this.bookingForm.controls; }
  get banner(): string { 
    return !this.userInfo?        '' :
            this.userInfo.banner? `background-image:url('https://prompthealth.ca:3000/users/${this.userInfo.banner}')` :
                                  `background-image:url('${this.defaultImage}')`;
  }
  get profileImage(): string { 
    return !this.userInfo?              '' :
            this.userInfo.profileImage? `https://prompthealth.ca:3000/users/${this.userInfo.profileImage}` : 
                                        `/${this.defaultImage}`; 
  }
  get fullname(): string {  
    if(!this.userInfo){ return ''; }
    var name = '';    
    if(this.userInfo.firstName){ name = this.userInfo.firstName; }
    if(this.userInfo.lastName){  name += ((name.length > 0)? ' ' : '') + this.userInfo.lastName; }
    return name;
  }

  get language(): string {
    var lang = [];
    if(!this.userInfo || !this.userInfo.languages || this.userInfo.languages.length == 0 || !this.languageSet || this.languageSet.length == 0){ return '';}
    this.userInfo.languages.forEach(l=>{
      for(var i=0; i<this.languageSet.length; i++){
        if(l == this.languageSet[i]._id){ lang.push(this.languageSet[i].item_text); break; }
      }
    })
    return lang.toString().replace(/'/g, ', ');
  }

  get phone(){
    if(!this.userInfo || !this.userInfo.phone || this.userInfo.phone.length == 0){ return 'N/A'; }
    var ph = this.userInfo.phone;
    return '(' + ph.slice(0,3) + ') ' + ph.slice(3,6) + '-' + ph.slice(6);
  }

  get reviewCount(): string{
    if(!this.rating){ return ''; }
    return (this.rating.length == 0)? 'No Review Yet' : `(${this.rating.length})`;
  }

  get ageRange(): string {
    if(!this.userInfo || !this.userInfo.age_range){ return ''; }
    for(var i=0; i<this.userInfo.age_range.length; i++){
      if(this.userInfo.age_range[i] == ageRangeList[0].id){ return ageRangeList[0].name; }
    }

    var ranges = []
    ageRangeList.forEach(range=>{
      for(var i=0; i<this.userInfo.age_range.length; i++){
        if(range.id == this.userInfo.age_range[i]){ ranges.push(range.name); break; }
      }
    });
    return ranges.toString().replace(/,/g, ', ');
  }

  get typeOfProvider(): string{
    if(!this.providerTypes || this.providerTypes.length == 0){ return 'N/A'; }
    var types = [];
    this.providerTypes.forEach(type=>{ types.push(type.item_text); });
    return types.toString().replace(/,/g, ', ');
  }

  get service(): string{
    if(!this.serviceOffering || this.serviceOffering.length == 0){ return 'N/A'; }
    else{ return this.serviceOffering.toString().replace(/,/g, ', '); }
  }

  get treatmentModality(): string{
    if(!this.treatmentModalities || this.treatmentModalities.length == 0){ return 'N/A'; }
    var modalities = [];
    this.treatmentModalities.forEach(modality=>{ modalities.push(modality.item_text); });
    return modalities.toString().replace(/,/g, ', ') ; 
  }

  get product(){
    if(!this.products || this.products.length == 0){ return 'N/A'; }
    else{ return this.products.toString().replace(/,/g, ', '); }
  }

  ngOnInit(): void {
    this.bookingForm = this._fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      timing: new FormControl('', [Validators.required]),
      bookingDateTime: new FormControl('', [Validators.required]),
      note: new FormControl('')
    });

    this.roles = localStorage.getItem('roles') ? localStorage.getItem('roles') : '';
    this.isLoggedIn = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    this.myId = localStorage.getItem('loginID') ? localStorage.getItem('loginID') : '';

    this._route.params.subscribe(params => {
      this.id = params.id;
      this.getUserProfile();
      this.getProfileQuestion();
      this.getProducts();
      this.getAmenities();
      this.getRating();
    });
  }

  getUserProfile() {
    const path = `user/get-profile/${this.id}`;
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      if (res.statusCode === 200) {

        /** add dummy data to userInfo todo: change to real data*/
        this.userInfo = userDummy;
//        this.userInfo = res.data[0];


        if (this.userInfo) {
          this.getCategoryServices();
          this.getEndosements();
          if(this.isUserRole('c')){ this.getProfessionals(); }
          
          this.userInfo.ratingAvg = Math.floor(this.userInfo.ratingAvg * 10) / 10;
          if(!this.userInfo.videos){ this.userInfo.videos = []; }
          this.userInfo.videos.forEach(v=> {
            // console.log(this.videos[i].url);
            // let  youtubeUrl = "https://www.youtube.com/watch?v=xcJtL7QggTI&t=130s";
            // this.yt_iframe_html.push(this._embedService.embed(this.videos[i].url));
            // console.log(this.iframe);

            var ytIframeHtml = this._embedService.embed(v.url);
            ytIframeHtml.title = v.title;
            this.iframe.push(ytIframeHtml);
          });
        }
      } else {
        this._toastr.error(res.message);
      }
    }, err => {
      this._sharedService.loader('hide');
    });
  }

  getProfileQuestion() {
    const path = `questionare/get-profile-questions`;
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      if (res.statusCode === 200) {
        var questions = res.data;
        questions.forEach((element: any) => {
          if (element.question_type === 'service' && element.slug === 'offer-your-services') {
            this.serviceSet = element.answers;
          }
          if (element.question_type === 'service' && element.slug === 'languages-you-offer') {
            this.languageSet = element.answers;
          }
          if (element.question_type === 'availability') {
            this.availabilitySet = element.answers;
          }
        });
      } else {
        this._toastr.error(res.message);

      }
    }, err => {
      this._sharedService.loader('hide');
    });
  }

  getProducts() {
    this.products = [];

/*  todo: enable after api works    
    this._sharedService.loader('show');
    const path = `product/get-all?userId=${this.id}&count=10&page=1&frontend=0/`;
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.products = res.data.data;
        this._sharedService.loader('hide');

      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.loader('hide');
      this._sharedService.checkAccessToken(err);
    });
*/
  }

  getAmenities() {
    this.amenities = [];

/*  todo: enable after api works    
    const path = `amenity/get-all/?userId=${this.id}&count=10&page=1&frontend=0`;
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.statusCode === 200) {
        this._toastr.success(res.message);
        this.amenities = res.data.data;
      } else {
        this._sharedService.showAlert(res.message, 'alert-danger');
      }
    }, (error) => {
      this._sharedService.loader('hide');
    });
*/
  }

  getRating() {
    this.rating = reviewsDummy;
    this.sortReviewsBy(0);

/*  todo: enable this code after api works
    const path = `booking/get-all-review?userId=${this.id}&count=10&page=1&search=/`;
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      if (res.statusCode === 200) {
         this.rating = res.data.data;
      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
 */
  }

  getCategoryServices() {
    const path = `user/getService/${this.userInfo._id}`;
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      this._sharedService.loader('hide');

      this.providerTypes = [];
      this.treatmentModalities = [];
      this.services = [];
      this.serviceOffering = [];
  
      if (res.statusCode === 200) {
        res.data.forEach(element => {
          if (element.slug === 'providers-are-you') {
            if (this.providerTypes.indexOf(element.item_text) === -1) {
              this.providerTypes.push(element);
            }
          }
          if (element.slug === 'treatment-modalities') {
            if (this.treatmentModalities.indexOf(element.item_text) === -1) {
              this.treatmentModalities.push(element);
            }
          }
          if (element.slug === 'your-goal-specialties') {
            if (this.services.indexOf(element) === -1) {
              this.services.push(element.item_text);
            }
          }
          if (element.slug === 'your-offerings') {
            if (this.serviceOffering.indexOf(element) === -1) {
              this.serviceOffering.push(element.item_text);
            }
          }
        });
      } 
      else {}
    }, (error) => {
      this._toastr.error('There are some error please try after some time.');
      this._sharedService.loader('hide');
    });
  }

  getProfessionals() {
    this.professionals = professionalsDummy;
    this.filterProfessionals(false);

/*  todo: enable this code after api works
    const path = `staff/get-all?userId=${this.id}&count=10&page=1&frontend=0/`;
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.doctors = res.data.data;

      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
 */
  }

  getEndosements(){
    this.endosements = endosementsDummy;
    //todo: access to api and get real data
  }
  

  timingSelected(evt) {
    this.timingSelectedValue = evt.target.value;
  }

  bookApointment() {
    this.submitted = true;
    if (this.bookingForm.invalid) {
      return;
    } else {
      const formData = {
        ...this.bookingForm.value,
      };
      const data = {
        drId: this.userInfo._id,
        customerId: this.myId,
        ...formData,
      };
      data.timing = this.timingSelectedValue;
      data.phone = data.phone.toString();
      data.bookingDateTime = data.bookingDateTime.toString();
      this._sharedService.loader('show');
      const path = `booking/create`;
      this._sharedService.post(data, path).subscribe((res: any) => {
        this._sharedService.loader('hide');
        if (res.statusCode === 200) {
          this._toastr.success(res.message);

          this.closebutton.nativeElement.click();
        } else {
          this._sharedService.showAlert(res.message, 'alert-danger');
        }
      }, (error) => {
        this._sharedService.loader('hide');
      });
    }
  }

  isUserRole(role: string){
    if(!this.userInfo || !this.userInfo.roles || this.userInfo.roles.length == 0){ return false; }

    var isRoleMatch = false;
    var roles = this.userInfo.roles;
    if(typeof roles == 'string'){
      if(role.toLowerCase() == roles.toLowerCase()){ isRoleMatch = true; }
    }else{
      roles.forEach(r=>{
        if(role.toLowerCase() == r.toLowerCase()){ isRoleMatch = true; }
      });
    }
    return isRoleMatch;
  }

  changeStickyStatusTabbar(isSticked: boolean){
    if(isSticked){ this._headerStatusService.hideHeader(); }
    else{ this._headerStatusService.showHeader(); }
    this.isTabSticked = isSticked;
  }

  filterProfessionals(isExpandForcibly?: boolean){ 
    console.log(this.professionals);
    if(!this.professionals){ return; }

    if(typeof isExpandForcibly != 'boolean'){
      this.isExpandProfessionals = !this.isExpandProfessionals; 
    }

    var pros = [];
    if(this.isExpandProfessionals){
      pros = this.professionals;
    }else{
      for(var i=0; i<this.professionals.length; i++){
        pros.push(this.professionals[i]);
        if(i >= 2){ break; }
      }
    }
    this.professionalsFiltered = pros;
    console.log(this.professionalsFiltered)
    return;
  }

  changeTabTo(i: number){
    this.indexTabItem = i;
    var banner = this.host.querySelector('.banner');
    var rect = banner.getBoundingClientRect();
    window.scrollBy({top: rect.top + rect.height, left: 0, behavior: 'smooth'})
  }

  sortReviewsBy(i: number){
    this.indexSortReviews = i;
    switch(i){
      case 0: this.rating.sort((a,b)=> b.rate - a.rate ); break;
      case 1: this.rating.sort((a,b)=> a.rate - b.rate ); break;
      case 2: this.rating.sort((a,b)=> b.updatedAt.getTime() - a.updatedAt.getTime() ); break;
    }
  }
}

const ageRangeList = [
  { id: '5eb1a4e199957471610e6cd7', name: 'Not Critical', checked: false },
  { id: '5eb1a4e199957471610e6cd8', name: 'Child (<12)', checked: false },
  { id: '5eb1a4e199957471610e6cd9', name: 'Adolescent (12-18)', checked: false },
  { id: '5eb1a4e199957471610e6cda', name: 'Adult (18+)', checked: false },
  { id: '5eb1a4e199957471610e6cdb', name: 'Senior (>64)', checked: false },
];
const timingList = [
  { id: 'timing1', name: 'Morning' },
  { id: 'timing2', name: 'Afternoon' },
  { id: 'timing3', name: 'Evening' },
  { id: 'timing4', name: 'Anytime' },
];

const userDummy = {
  loginType: '',
  socialToken: '',
  stripeCustId: 'cus_IXwaAkzWDFElss',
  firstName: 'this is',
  lastName: 'short name',
//  firstName: 'My name is so long.',
//  lastName: 'I would like show all name when tab is not sticked. but if sticked, please show only one line',
  phone: '09530776612',
  zipcode: '140301',
  address: 'Heritage Haveli 6th Mile Stone, NH 21, Kharar, Guru Teg Bahadur Nagar, Kharar, Punjab 140301, India',
  location: [ 76.64110939999999, 30.7498676 ],
  city: 'Kharar',
  state: 'Punjab',
//  profileImage: '1603744130722xidX-biowave-01.png',
  profileImage: '',
  services: [
    '5eb1a4e199957471610e6cd4',
    '5eb1a4e199957471610e6cec',
    '5eb1a68313e89a73b8a32ce4',
    '5eb1a68313e89a73b8a32ce2',
    '5eb1a4e199957471610e6ceb',
    '5eb1a5ec84bc5b731e390456',
    '5eb1a5ec84bc5b731e390455',
    '5eb1a4e199957471610e6d00',
    '5eb1a4e199957471610e6cf9',
    '5eb1a4e199957471610e6d02',
    '5eb1a4e199957471610e6ce5',
    '5eb1b3a2f818697f49f01b15',
    '5eb1b3a2f818697f49f01b14',
    '5eb1b3a2f818697f49f01b16',
    '5eb1a4e199957471610e6d3e',
    '5f47ff41b6eaa8aaaa53fb45'
  ],
  image: [],
  date_verified: '2020-12-08T19:20:25.720Z',
  isVerified: 'Y',
  accredited_provide_canada: true,
  isLicensed: false,
  roles: 'C',
  isVipAffiliateUser: false,
  refererencePointEarned: 0,
  status: true,
  t_c: true,
  paymentMethod: [],
  isPlanExpired: false,
  exp_date: null,
  age_range: [
    '5eb1a4e199957471610e6cd8',
    '5eb1a4e199957471610e6cd9',
    '5eb1a4e199957471610e6cdb',
    '5eb1a4e199957471610e6cd7',
    '5eb1a4e199957471610e6cd8',
    '5eb1a4e199957471610e6cd9',
    '5eb1a4e199957471610e6cda',
    '5eb1a4e199957471610e6cdb'
  ],
  languages: [ '5eb1a4e199957471610e6d52' ],
  typical_hours: [ '5eb1a4e199957471610e6d25', '5eb1a4e199957471610e6d26' ],
  serviceOfferIds: [
    '5eb1a4e199957471610e6cf4',
    '5eb1a4e199957471610e6cef',
    '5eb1a4e199957471610e6cf0'
  ],
  customer_health: [],
  favouriteBy: [],
  ratingAvg: 3.5,
  pointEarned: 0,
  isDeleted: false,
  lastLogin: '2020-12-10T15:00:19.547Z',
  date_registered: '2020-12-08T19:20:25.720Z',
  _id: '5fd2380333016d785e45ed03',
  email: 'shivam@yopmail.com',
  hear_from: 'Google',
  videos: [],
  ratingBy: [],
  __v: 0,
  booking: 'no',
  bookingURL: '',
  business_kind: '',
  certification: 'MD',
  gender: 'male',
  licence_type_degree: '',
  price_per_hours: '$1000',
  product_description: 'shivam@yopmail.com',
  professional_organization: 'MD',
  years_of_experience: '> 20',
  plan: {
    userType: [Array],
    isMonthly: true,
    professionalProfile: true,
    addressURLLogoPicture: true,
    videoUpload: true,
    performanceDashboard: true,
    reviewsAndFeedback: true,
    receiveMessagesForBooking: true,
    ListProductsOption: false,
    ListAmenities: false,
    ListOfProviders: false,
    isDefault: false,
    ListYourTypeOfCenterAndDifferentLocations: false,
    status: true,
    isDeleted: false,
    _id: '5ecfe19b3cd45aa28f5d1387',
    name: 'Premium',
    price: 10,
    yearlyPrice: 100,
    planName: 'Service Provider Premium',
    stripeProductId: 'prod_IXEkA5PY77znWC',
    stripePriceId: 'price_1HwAGyHzvKsIv7Fc8kaZPoCv',
    sideBySideComparisons: true,
    affiliatePlan: false,
    updatedAt: '2020-12-25T00:17:01.924Z',
    striperesponse: [Object],
    stripeYearlyPriceId: 'price_1HxOWbHzvKsIv7FcjzEZXkV6',
    subscriptionId: 'sub_IXwaHXTmUDl4zA',
    subscriptionPeriod: 'month'
  }
}

const professionalsDummy = [
  {
    name: 'Adam Levis',
    image: '',
    desc: 'Adam Levis, located in Nashville, has over 15 years of experience developing dw.',
    _id: ''
  },
  {
    name: 'Adam Levis',
    image: '',
    desc: 'Adam Levis, located in Nashville, has over 15 years of experience developing dw.',
    _id: ''
  },
  {
    name: 'Adam Levis',
    image: '',
    desc: 'Adam Levis, located in Nashville, has over 15 years of experience developing dw.',
    _id: ''
  },
  {
    name: 'Adam Levis',
    image: '',
    desc: 'Adam Levis, located in Nashville, has over 15 years of experience developing dw.',
    _id: ''
  },
  {
    name: 'Adam Levis',
    image: '',
    desc: 'Adam Levis, located in Nashville, has over 15 years of experience developing dw.',
    _id: ''
  },
  {
    name: 'Adam Levis',
    image: '',
    desc: 'Adam Levis, located in Nashville, has over 15 years of experience developing dw.',
    _id: ''
  },
  {
    name: 'Adam Levis',
    image: '',
    desc: 'Adam Levis, located in Nashville, has over 15 years of experience developing dw.',
    _id: ''
  },
]

const endosementsDummy = [
  {
    _id: '',
    name: 'Modern Mint',
    rate: 4.3,
    images: [],
    desc: "this vegan product is great for blablabla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque"
  },
  {
    _id: '',
    name: 'Modern Mint',
    rate: 1.53,
    images: [],
    desc: "this vegan product is great for blablabla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque"
  }
];

const reviewsDummy = [
  {
    _id: '',
    name: 'Justin Timber',
    desc: 'I am an energetic & enthusiasm person, I have my passionate in fitness industry, I like to motivate peoples to have active living because I believe that exercises can helps human beings lives healthy, lower the risks in getting chronic diseases. Less suffers from diseases, enjoy the life.',
    rate: 2,
    updatedAt: new Date('2019-12-25T00:17:01.924Z'),
  },
  {
    _id: '',
    name: 'Justin Timber',
    desc: 'I am an energetic & enthusiasm person, I have my passionate in fitness industry, I like to motivate peoples to have active living because I believe that exercises can helps human beings lives healthy, lower the risks in getting chronic diseases. Less suffers from diseases, enjoy the life.',
    rate: 5,
    updatedAt: new Date('2018-12-25T00:17:01.924Z'),
  },  
  {
    _id: '',
    name: 'Justin Timber',
    desc: 'I am an energetic & enthusiasm person, I have my passionate in fitness industry, I like to motivate peoples to have active living because I believe that exercises can helps human beings lives healthy, lower the risks in getting chronic diseases. Less suffers from diseases, enjoy the life.',
    rate: 4,
    updatedAt: new Date('2027-12-25T00:17:01.924Z'),
  }
];

