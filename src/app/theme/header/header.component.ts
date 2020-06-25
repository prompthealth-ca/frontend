import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { SharedService } from "../../shared/services/shared.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {


@ViewChild('signup') signup:ElementRef;
@ViewChild('signin') signin:ElementRef;
  _host = environment.config.BASE_URL;
  showDashboard = false;
  public token = "";
  public role = "";
  public payment = 'true';

  user: any = {};
  categoryList = [];
  cities = [];
  Items = [];
  showCities: boolean = false;
  showItems: boolean = false;
  @Input() eventKey: any;
  eventKeyValue: any;
  searchKeyword: any;
  dashboard: any;
  currentUrl = "";
  uname: any;
  userType = '';
  professionalOption =false;
  constructor(
    private _router: Router,
    private _sharedService: SharedService,
    private toastr: ToastrService,
  ) {
    //this.fetchUser();
  }

  // Start ngOninit
  ngOnInit() {
      this.getCategoryServices();
      this.token = localStorage.getItem("token");
      this.role = localStorage.getItem("roles");
      // this.payment = localStorage.getItem(isPayment);
      this.user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {};
      // if (this.token && this.user) {
      //   let roles = this.user.roles;
      //   this.dashboard = roles == "B" ? "dashboard/home" : "dashboard/welcome";
      // }
    this._router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.currentUrl = evt.url;
      this.token = localStorage.getItem("token");
      this.role = localStorage.getItem("roles");
      this.payment = localStorage.getItem('isPayment');
      this.user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {};
      if (this.token && this.user) {
        let roles = this.user.roles;
        this.dashboard = roles == "B" ? "dashboard/home" : "dashboard/welcome";
      }
    });

    // this._bs.user.subscribe(obj => {
    //   this.user = obj ? (obj["user"] ? obj["user"] : []) : [];
    // });

    this.token = localStorage.getItem("token");
    this.role = localStorage.getItem("roles");
    this.payment = localStorage.getItem('isPayment');
    this.user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user"))
      : {};

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
    this.token = "";
    this.user = {};
    this._sharedService.logout();
  }

  getCategoryServices() {
    this._sharedService.getNoAuth('questionare/get-service').subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.categoryList = res.data;
        console.log('RES', this.categoryList);
      } else {
      }
    }, (error) => {
      this.toastr.error("There are some error please try after some time.")
      this._sharedService.loader('hide');
    });
  }
  isSelectedURL(path) {
    if ((this.currentUrl == "/" || this.currentUrl == "") && path == "/")
      return true;
    else if (this.currentUrl.indexOf(path) >= 0 && path != "/") return true;
    else return false;
  }

  handleChange(url, type){
    this._router.navigate([url, type]);
    if(url === '/auth/login') {
      this.signin.nativeElement.click();
    }
    else {
      this.signup.nativeElement.click();      
    }
  }
}
