import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared/services/shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('searchGlobal')
  public searchGlobalElementRef: ElementRef;

  token = '';
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
  roles = '';
  zipCodeSearched;
  lat;
  long;
  // _host = environment.config.BASE_URL;
  id: any;
  showPersonalMatch = true;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    // tslint:disable-next-line: variable-name
    private _sharedService: SharedService,
    private toastr: ToastrService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  ) { }

  get f() {
    return this.homeForm.controls;
  }
  ngOnInit() {

    this.roles = localStorage.getItem('roles') ? localStorage.getItem('roles') : '';
    localStorage.removeItem('searchedAddress');
    this.token = localStorage.getItem('token');
    if (this.token) {
      if (this.roles === 'SP' || this.roles === 'C') {
        this.showPersonalMatch = false;
      } else {
        this.showPersonalMatch = true;
      }
    }
    this.homeForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.timer();
    this.id = setInterval(() => {
      this.timer();
    }, 1000);
  }

  findDoctor() {
    this.lat = 0 + localStorage.getItem('ipLat');
    this.long = 0 + localStorage.getItem('ipLong');
    this.router.navigate(['/doctor-filter'], { queryParams: { lat: this.lat, long: this.long } });
  }
  questionnaire() {
    if (this.token) {
      this.router.navigate(['dashboard/questions/User']);
    } else {
      this.router.navigate(['dashboard/questions/User']);
      // this.router.navigate(['auth/login/u']);
      // this.toastr.warning("Please login first.")
    }
  }

  submit() {
    // alert("here");

    this.submitted = true;
    const data = JSON.stringify(this.homeForm.value);

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
        this.toastr.error('Please check your email id.');
        // this._sharedService.loader('hide');
      }
    );
  }

  timer() {
    const deadline = new Date('June 5, 2020 15:37:25').getTime();

    const now = new Date().getTime();
    const t = deadline - now;
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((t % (1000 * 60)) / 1000);

    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  learnMore() {
    if (this.token) {
      this.router.navigate(['dashboard/subscriptionplan']);
    } else {
      this.router.navigate(['subscriptionplan']);
    }
  }
}
