import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { SharedService } from '../../shared/services/shared.service';
import { HeaderStatusService } from '../../shared/services/header-status.service';
import { EmbedVideoService } from 'ngx-embed-video';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @ViewChild('closebutton') closebutton;


  public indexTabItem: number = 0;
  public isTabSticked: boolean = false;
  public indexSortReviews: number = 0;
  public isExpandProfessionals: boolean = false;

  private intersectionObserverTabbar: IntersectionObserver;
  private host: HTMLElement;

  defaultImage = 'assets/img/no-image.jpg';
  bookingForm: FormGroup;
  doctors = [];

  profileQuestions = [];
  isLoggedIn = '';
  id: number;
  myId = '';
  private sub: any;
  productList = [];
  rating = [];

  savedAminities = [];

  ageRangeList = [
    { id: '5eb1a4e199957471610e6cd7', name: 'Not Critical', checked: false },
    { id: '5eb1a4e199957471610e6cd8', name: 'Child (<12)', checked: false },
    { id: '5eb1a4e199957471610e6cd9', name: 'Adolescent (12-18)', checked: false },
    { id: '5eb1a4e199957471610e6cda', name: 'Adult (18+)', checked: false },
    { id: '5eb1a4e199957471610e6cdb', name: 'Senior (>64)', checked: false },
  ];
  timingList = [
    { id: 'timing1', name: 'Morning' },
    { id: 'timing2', name: 'Afternoon' },
    { id: 'timing3', name: 'Evening' },
    { id: 'timing4', name: 'Anytime' },
  ];
  userInfo: any = {};
  serviceData = [];
  treatmentModalities = [];
  serviceOffering = [];
  serviceType = [];
  public professionals: any[] = null;
  public professionalsFiltered: any[] = [];
  public endosements: any[] = null;
  roles;
  productSearch: '';
  startDate = new Date();
  minDate = new Date();
  timingSelectedValue = '';
  submitted = false;

  currentPage;
  totalItems;
  itemsPerPage = 5;
  avalibilityQuestion;
  languageQuestion;
  serviceQuestion;
  categoryList;
  videos: any = [];
  yt_iframe_html: any;
  iframe: any = [];

  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private embedService: EmbedVideoService,
    private _headerStatusService: HeaderStatusService,
    el: ElementRef,
  ) {  this.host = el.nativeElement; }

  get f() { return this.bookingForm.controls; }
  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
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

    this.sub = this.route.params.subscribe(params => {
      this.id = params.id;
      this.getUserProfile();
      this.getProfileQuestion();
      this.getReviews();      
    });

  }

  getUserProfile() {
    const path = `user/get-profile/${this.id}`;
    this.sharedService.getNoAuth(path).subscribe((res: any) => {
      if (res.statusCode === 200) {
//        this.userInfo = res.data[0];

        /** add dummy data to userInfo todo: change to real data*/
        this.userInfo = userDummy;

        this.getCategoryServices();
        if (this.userInfo) {
          /** add dummy data to professionals todo: change to real data*/
          this.professionals = professionalsDummy;
          this.endosements = endosements;
          this.filterProfessionals(false);

          this.userInfo.ratingAvg = Math.floor(this.userInfo.ratingAvg * 10) / 10;
          this.videos = this.userInfo.videos ? this.userInfo.videos : [];
          for (let i = 0; i < this.videos.length; i++) {
            // console.log(this.videos[i].url);
            // let  youtubeUrl = "https://www.youtube.com/watch?v=xcJtL7QggTI&t=130s";
            // this.yt_iframe_html.push(this.embedService.embed(this.videos[i].url));
            this.yt_iframe_html = this.embedService.embed(this.videos[i].url);
            this.yt_iframe_html.title = this.videos[i].title;
            this.iframe.push(this.yt_iframe_html);
            // console.log(this.iframe);
          }
        }
      } else {
        this.toastr.error(res.message);
      }
    }, err => {
      this.sharedService.loader('hide');
    });
  }
  getProfileQuestion() {
    const path = `questionare/get-profile-questions`;
    this.sharedService.getNoAuth(path).subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.profileQuestions = res.data;
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
      this.sharedService.loader('hide');
    });
  }
  getProductList() {
    this.sharedService.loader('show');
    const path = `product/get-all?userId=${this.id}&count=10&page=1&frontend=0/`;
    this.sharedService.getNoAuth(path).subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.productList = res.data.data;
        this.sharedService.loader('hide');

      } else {
        this.sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this.sharedService.loader('hide');
      this.sharedService.checkAccessToken(err);
    });
  }
  getSavedAmenties() {
    const path = `amenity/get-all/?userId=${this.id}&count=10&page=1&frontend=0`;
    this.sharedService.getNoAuth(path).subscribe((res: any) => {
      this.sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.toastr.success(res.message);
        this.savedAminities = res.data.data;
      } else {
        this.sharedService.showAlert(res.message, 'alert-danger');
      }
    }, (error) => {
      this.sharedService.loader('hide');
    });
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
      this.sharedService.loader('show');
      const path = `booking/create`;
      this.sharedService.post(data, path).subscribe((res: any) => {
        this.sharedService.loader('hide');
        if (res.statusCode === 200) {
          this.toastr.success(res.message);

          this.closebutton.nativeElement.click();
        } else {
          this.sharedService.showAlert(res.message, 'alert-danger');
        }
      }, (error) => {
        this.sharedService.loader('hide');
      });
    }
  }
  getReviews() {
    this.rating = reviewsDummy

    /*
    const path = `booking/get-all-review?userId=${this.id}&count=10&page=1&search=/`;
 this.sharedService.getNoAuth(path).subscribe((res: any) => {
      if (res.statusCode === 200) {
         this.rating = res.data.data;
      } else {
        this.sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this.sharedService.checkAccessToken(err);
    });
 */
  }
  getSaveddoctors() {
    const path = `staff/get-all?userId=${this.id}&count=10&page=1&frontend=0/`;
    this.sharedService.getNoAuth(path).subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.doctors = res.data.data;

      } else {
        this.sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this.sharedService.checkAccessToken(err);
    });
  }
  getCategoryServices() {
    this.serviceData = [];
    this.treatmentModalities = [];
    this.serviceType = [];
    this.serviceOffering = [];
    const path = `user/getService/${this.userInfo._id}`;
    this.sharedService.getNoAuth(path).subscribe((res: any) => {
      this.sharedService.loader('hide');
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
      this.toastr.error('There are some error please try after some time.');
      this.sharedService.loader('hide');
    });
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

  getFullname(): string{
    var name = '';
    if(!this.userInfo){ return name; }
    
    if(this.userInfo.firstName){ name = this.userInfo.firstName; }
    if(this.userInfo.lastName){
      name += ((name.length > 0)? ' ' : '') + this.userInfo.lastName;
    }
    return name;
  }
  getLanguages(): string {
    var lang = [];
    if(!this.userInfo || !this.userInfo.languages || this.userInfo.languages.length == 0 || !this.languageQuestion || this.languageQuestion.length == 0){ return '';}
    this.userInfo.languages.forEach(l=>{
      for(var i=0; i<this.languageQuestion.answers.length; i++){
        if(l == this.languageQuestion.answers[i]._id){ lang.push(this.languageQuestion.answers[i].item_text); }
      }
    })
    return lang.toString().replace(/'/g, ', ');
  }
  getPhoneNumber(){
    if(!this.userInfo || !this.userInfo.phone || this.userInfo.phone.length == 0){ return 'Not Available'; }
    var ph = this.userInfo.phone;
    return '(' + ph.slice(0,3) + ') ' + ph.slice(3,6) + '-' + ph.slice(6);
  }

  getCountReviewString(): string{
    if(!this.userInfo){ return ''; }
    var reviews = this.userInfo.ratingBy || [];
    if(reviews.length == 0){ return 'No Review Yet'; }
    else{ return '(' + reviews.length +  ')'; }
  }

  getAgeRangeString(): string {
    if(!this.userInfo || !this.userInfo.age_range){ return ''; }

    for(var i=0; i<this.userInfo.age_range.length; i++){
      if(this.userInfo.age_range[i] == this.ageRangeList[0].id){ return this.ageRangeList[0].name; }
    }

    var ranges = []
    this.ageRangeList.forEach(range=>{
      for(var i=0; i<this.userInfo.age_range.length; i++){
        if(range.id == this.userInfo.age_range[i]){
          ranges.push(range.name);
        }
      }
    });
    return ranges.toString().replace(/,/g, ', ');
  }

  getTypeOfProviderString(){
    if(!this.serviceType || this.serviceType.length == 0){ return 'N/A'; }
    else{ return this.serviceType.toString().replace(/,/g, ', '); }
  }

  getServicesString(){
    if(!this.serviceOffering || this.serviceOffering.length == 0){ return 'N/A'; }
    else{ return this.serviceOffering.toString().replace(/,/g, ', '); }
  }

  getTreatmentModalitiesString(){
    if(!this.treatmentModalities || this.treatmentModalities.length == 0){ return 'N/A'; }
    else{ 
      var modalities = [];
      this.treatmentModalities.forEach(modality=>{
        modalities.push(modality.item_text);
      })
      return modalities.toString().replace(/,/g, ', ') ; 
    }
  }

  getProductListString(){
    if(!this.productList || this.productList.length == 0){ return 'N/A'; }
    else{ return this.productList.toString().replace(/,/g, ', '); }
  }

  changeStickyStatusTabbar(isSticked: boolean){
    if(isSticked){ this._headerStatusService.hideHeader(); }
    else{ this._headerStatusService.showHeader(); }
    this.isTabSticked = isSticked;
  }

  filterProfessionals(isExpandForcibly?: boolean){ 
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
    return;
  }

  changeTabTo(i: number){
    this.indexTabItem = i;
    var banner = this.host.querySelector('.banner');
    var rect = banner.getBoundingClientRect();
    window.scrollBy({top: rect.top + rect.height, left: 0, behavior: 'smooth'})
  }

  sortReviewsBy(index: number){
    this.indexSortReviews = index;
  }
}


const userDummy = {
  loginType: '',
  socialToken: '',
  stripeCustId: 'cus_IXwaAkzWDFElss',
  firstName: 'Shivam',
  lastName: 'Grover',
  phone: '09530776612',
  zipcode: '140301',
  address: 'Heritage Haveli 6th Mile Stone, NH 21, Kharar, Guru Teg Bahadur Nagar, Kharar, Punjab 140301, India',
  location: [ 76.64110939999999, 30.7498676 ],
  city: 'Kharar',
  state: 'Punjab',
  profileImage: '1603744130722xidX-biowave-01.png',
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
  roles: 'SP',
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

const endosements = [
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
    rate: 4.3,
    images: [],
    desc: "this vegan product is great for blablabla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque"
  }
];

const reviewsDummy = [
  {
    _id: '',
    name: 'Justin Timber',
    desc: '',
    rate: 4.3,
  }
];

