import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
import { environment } from '../../../environments/environment';
// import { BehaviorService } from '../../shared/services/behavior.service';
import { Title, Meta } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
// import { NgxCarousel } from 'ngx-carousel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var jQuery: any;
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-uspage',
  templateUrl: './contact-uspage.component.html',
  styleUrls: ['./contact-uspage.component.scss']
})
export class ContactUspageComponent implements OnInit {
  homeForm: FormGroup;
  submitted = false;

  Form: NgForm;
  _host = environment.config.BASE_URL;
  routerSubscription: any;


  isLogin: boolean = false;
  user = {};

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private meta: Meta,
    private _router: Router,
    // public _bs: BehaviorService,
    private _titleService: Title,
    private elementRef: ElementRef,
    private _route: ActivatedRoute,
    private _sharedService: SharedService) {
    if (localStorage.getItem('token')) this.isLogin = true;

    this.routerSubscription = this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

    });

  }
  get f() { return this.homeForm.controls; }

  ngOnInit() {

    this._sharedService.sendTop()
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.homeForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      website: ['', [Validators.required, Validators.pattern(reg)]],
      company: ['', [Validators.required]],
      description: ['', [Validators.required]],



    });

  }

  route(path) {
    this._router.navigate([path]);
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }


  pressMe() {


    this.submitted = true;
    if (this.homeForm.invalid) {
      return;
    }
    else {
      this.submitted = true;
      let data = JSON.stringify(this.homeForm.value);

      this._sharedService.loader('show');
      this._sharedService.contactus(data).subscribe((res: any) => {
        this._sharedService.loader('hide');
        if (res.success) {
          this.toastr.success(res.data.message);

          this.homeForm.reset();
          this.submitted = false;

        }

        else {
          this._sharedService.showAlert(res.error.message, 'alert-danger');
        }
      }, (error) => {
        this._sharedService.loader('hide');
      });
    }
  }




}
