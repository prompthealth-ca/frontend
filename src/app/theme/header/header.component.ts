import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../shared/services/shared.service';
import { BehaviorService } from '../../shared/services/behavior.service';
import { HeaderStatusService } from '../../shared/services/header-status.service';
import { environment } from '../../../environments/environment';
import { trigger, transition, animate, style, query } from '@angular/animations';
import { Subscription } from 'rxjs';

const fadeAnimation = trigger('fade', [
  transition(':enter', [
    style({ display: 'block', opacity: 0 }),
    animate('300ms ease', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('300ms ease', style({ opacity: 0 }))
  ])]
);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fadeAnimation]
})
export class HeaderComponent implements OnInit {
  constructor(
    private _router: Router,
    private _sharedService: SharedService,
    private _bs: BehaviorService,
    private toastr: ToastrService,
    private _headerStatusService: HeaderStatusService,
  ) {
    // this.fetchUser();
  }


  @ViewChild('signup') signup: ElementRef;
  @ViewChild('signin') signin: ElementRef;
  _host = environment.config.BASE_URL;
  showDashboard = false;
  public token = '';
  public role = '';
  public payment = 'true';

  public isHeaderShown = true;
  public isNavMenuShown = false;
  public levelMenuSm = 0;
  public activeCategory = 0;

  public AWS_S3='';

  user: any = {};
  updateData: any;
  categoryList = [];
  cities = [];
  Items = [];
  showCities = false;
  showItems = false;
  @Input() eventKey: any;
  eventKeyValue: any;
  searchKeyword: any;
  dashboard: any;
  currentUrl = '';
  uname: any;
  userType = '';
  professionalOption = false;


  public classSubcategory = '';
  public classSubcategoryItem = '';


  // Start ngOninit
  ngOnInit() {

    this.AWS_S3 = environment.config.AWS_S3

    this._bs.getUserData().subscribe((res: any) => {
      this.updateData = res;
      console.log('reeeeeeeeeee', this.updateData);
      if (res.firstName) {
        localStorage.setItem('user', JSON.stringify(this.updateData));
      }
    });

    this.getCategoryServices();
    this.token = localStorage.getItem('token');
    this.role = localStorage.getItem('roles');
    // this.payment = localStorage.getItem(isPayment);
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};
    // if (this.token && this.user) {
    //   let roles = this.user.roles;
    //   this.dashboard = roles == "B" ? "dashboard/home" : "dashboard/welcome";
    // }
    this._router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.currentUrl = evt.url;
      this.token = localStorage.getItem('token');
      this.role = localStorage.getItem('roles');
      this.payment = localStorage.getItem('isPayment');
      this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};
      if (this.token && this.user) {
        const roles = this.user.roles;
        this.dashboard = roles === 'B' ? 'dashboard/home' : 'dashboard/welcome';
      }
    });

    // this._bs.user.subscribe(obj => {
    //   this.user = obj ? (obj["user"] ? obj["user"] : []) : [];
    // });

    this.token = localStorage.getItem('token');
    this.role = localStorage.getItem('roles');
    this.payment = localStorage.getItem('isPayment');
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))
      : {};
    this.user.firstName = this.user.firstName ? this.user.firstName + ' ' + this.user.lastName : '';

    this._headerStatusService.observeHeaderStatus().subscribe(([key, val]: [string, any]) => {
      this[key] = val;
    });
    // if(this.token) {
    //   if(this.role === 'U') {
    //     this.showDashboard = true;
    //   }
    //   if(this.payment === 'true') {

    //     this.showDashboard = true;
    //   }
    // }
  }
  // End Ngoninit

  route(path) {
    this._router.navigate([path]);
  }


  logout() {
    this.token = '';
    this.user = {};
    this._sharedService.logout();
  }

  getCategoryServices() {
    this._sharedService.getNoAuth('questionare/get-service').subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.categoryList = [];
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].category_type.toLowerCase() == 'goal') {
            this.categoryList = res.data[i].category;
            break;
          }
        }
        this.categoryList.forEach((cat, i) => {
          let label = cat.item_text.toLowerCase();
          label = label.replace(/[\/\s]/g, '_');
          this.categoryList[i].label = label.replace(/[^0-9a-zA-Z_]/g, '');
        });
      }
    }, (error) => {
      console.error(error);
      this.toastr.error('There are some error please try after some time.');
      this._sharedService.loader('hide');
    });
  }
  isSelectedURL(path) {
    if ((this.currentUrl === '/' || this.currentUrl === '') && path === '/') {
      return true;
    } else if (this.currentUrl.indexOf(path) >= 0 && path !== '/') { return true; } else { return false; }
  }

  handleChange(url, type) {
    console.log(url);
    this._router.navigate([url, type]).then(res => {
      console.log(res);
    });
    if (url === '/auth/login') {
      this.signin.nativeElement.click();
    } else {
      this.signup.nativeElement.click();
    }
  }

  optUserType(value) {
    this._bs.setRole(value);
    localStorage.setItem('userType', value);
  }


  hideMenu() { this._headerStatusService.hideNavMenu(); }
  showMenu(slow: boolean = false) {
    setTimeout(() => {
      this._headerStatusService.showNavMenu(false);
    });
  }

  scrollMenuSm(n: number) { this._headerStatusService.changeLevelMenuSm(n); }

  changeMenuCategory(i: number) {
    this.activeCategory = i;
    this.setClassForSubcategory(i);
  }
  setClassForSubcategory(i: number) {
    let clname = ['', ''];
    switch (this.categoryList[i].label) {
      //      case 'skin_rejuvination': clname = ['', '']; break;
      case 'rehab_pain_management': clname = ['', 'lower narrowest']; break;
      case 'pain_management': clname = ['', 'lower narrowest']; break;
      case 'women_mens_health': clname = ['h-100', 'lower']; break;
      case 'mood_mental_health': clname = ['h-100', 'lowest narrower']; break;
      case 'fitness': clname = ['h-100', '']; break;
      //      case 'nutrition': clname = ['h-60', '']; break;
    }
    this.classSubcategory = clname[0];
    this.classSubcategoryItem = clname[1];
  }

}
