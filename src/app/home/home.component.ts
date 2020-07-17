import { Component, OnInit, ElementRef, ViewChild, NgZone } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SharedService } from "../shared/services/shared.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @ViewChild('searchGlobal')
  public searchGlobalElementRef: ElementRef;

  token = "";
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  private future: Date;
  private futureString: string;
  private message: string;
  private geoCoder;
  homeForm: FormGroup;
  submitted = false;
  zipCodeSearched;
  lat;
  long;
  // _host = environment.config.BASE_URL;
  id: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _sharedService: SharedService,
    private toastr: ToastrService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  ) {}

  get f() {
    return this.homeForm.controls;
  }
  ngOnInit() {
    localStorage.removeItem('searchedAddress');
    this.token = localStorage.getItem("token");
    this.homeForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });

    this.timer();
    this.id = setInterval(() => {
      this.timer();
    }, 1000);
  }

  findDoctor() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        console.log('position', this.lat, this.long)
        this.router.navigate(['/doctor-filter'], { queryParams: {lat: this.lat, long: this.long}})
      });
    }
    else {
      console.log('comes in else', this.lat, this.long)
      this.router.navigate(['/doctor-filter'], { queryParams: {lat: 0, long: 0}})
    }
   
  }
  questionnaire() {
    if (this.token) {
      this.router.navigate(['dashboard/questions/User']);
    } else {
      this.router.navigate(['auth/login/u']);
      this.toastr.warning("Please login first.")
    } 
  }

  submit() {
    // alert("here");

    this.submitted = true;
    let data = JSON.stringify(this.homeForm.value);

    // this._sharedService.loader('show');
    this._sharedService.contactus(data).subscribe(
      (res: any) => {
        // this._sharedService.loader('hide');
        if (res.success) {
          this.toastr.success(res.message);
          this.homeForm.reset();
          this.submitted = false;
        } else {
          this.toastr.error(res.message);
        }
      },
      error => {
        this.toastr.error("Please check your email id.");
        //this._sharedService.loader('hide');
      }
    );
  }

  timer() {
    var deadline = new Date("June 5, 2020 15:37:25").getTime();

    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);

    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }
}
