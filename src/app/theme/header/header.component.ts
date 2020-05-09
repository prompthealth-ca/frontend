import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
// import { CookieService } from 'ngx-cookie';
// import { CookieService } from "ngx-cookie-service";
import { SharedService } from "../../shared/services/shared.service";
// import { BehaviorService } from "../../shared/services/behavior.service";
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
  public token = "";
  user: any = {};
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
    private _activateRouter: ActivatedRoute,
    private _sharedService: SharedService,
    private toastr: ToastrService,
    // public _bs: BehaviorService
  ) {
    //this.fetchUser();
  }

  // Start ngOninit
  ngOnInit() {
      this.token = localStorage.getItem("token");
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
    this.user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user"))
      : {};
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

  // logout() { 
  //   this._sharedService.loader('show');
  //   this._sharedService.logingOut().subscribe((res: any) => {
  //     this._sharedService.loader('hide');
  //     if (res.statusCode === 200) {
  //       this.toastr.success('LogOut Successfully.');
  //     } else {
  //       this.toastr.error(res.message);
  //     }
  //   }, (error) => {
  //     this.toastr.error("There are some errors, please try after some time !")
  //     this._sharedService.loader('hide');
  //   });
  // }

  // fetchUser() {
  //   this._sharedService.get("getuserdetail").subscribe(
  //     (res: any) => {
  //       console.log("response is", res)
  //       if (res.success) {
  //         // this._bs.setUser(res.data.user);
  //         this.uname = res.data.user.email;
  //       } else {
  //         this._sharedService.checkAccessToken(res.error);
  //       }
  //     },
  //     error => { }
  //   );
  // }

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
