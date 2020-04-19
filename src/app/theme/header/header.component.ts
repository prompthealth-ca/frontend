import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";

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


@ViewChild('fileInput') fileInput:ElementRef;
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
  isLoggedIn = false;
  professionalOption =false;
  constructor(
    private _router: Router,
    private _activateRouter: ActivatedRoute,
    private _sharedService: SharedService,
    // public _bs: BehaviorService
  ) {
    //this.fetchUser();
  }

  // Start ngOninit
  ngOnInit() {
    console.log('this.isLoggedIn', this.isLoggedIn);
    if (this._sharedService.isLogin()) {
      // this.fetchUser();
      this.isLoggedIn = true;
      this.token = localStorage.getItem("token");
      this.user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {};
      console.log("sandeep", this.user)
      if (this.token && this.user) {
        let roles = this.user.roles;
        this.dashboard = roles == "B" ? "dashboard/home" : "dashboard/welcome";
      }
    }
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

    console.log('Comes here')

    // this._bs.unsetUser();
    localStorage.removeItem("token");
    this._sharedService.showAlert("Logout Sucessfully", "alert-success");
    this._router.navigate(["/auth/signin-up"]);
  }

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

  handleChange(url){
    console.log('---', url)
    this._router.navigate([url]);
    this.fileInput.nativeElement.click();
  }
}
