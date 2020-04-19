import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
import { BehaviorService } from '../../shared/services/behavior.service';
// import { UserIdleService } from 'angular-user-idle';
declare var jQuery: any;
// import { AuthService } from 'angular5-social-login';
// import { MapsAPILoader, MouseEvent } from '@agm/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MustMatch } from '../../_helpers/must-match.validator';
// import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
    selector: 'app-login-signup',
    templateUrl: './login-signup.component.html',
    styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
    separateDialCode = true;
    // SearchCountryField = SearchCountryField;
    // TooltipLabel = TooltipLabel;
    // CountryISO = CountryISO;
    // preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
    resultSalePerson: any;
    // changePreferredCountries() {
    //     this.preferredCountries = [CountryISO.India, CountryISO.Canada];
    // }
    loginForm: FormGroup;
    registerForm: FormGroup;
    submitted1 = false;
    submitted = false;


    latitude: any;
    longitude: any;
    zoom: number;
    address: string;
    private geoCoder;

    @ViewChild('search', { static: false }) public searchElementRef: ElementRef;



    public userType = 'endUser';
    public acceptTerms = false;
    public errLogin = false;
    isSignup = true;
    temp: any;
    showSignup = false;
    userEmail;
    saleP: any;
    bus_addr_lat: number;
    bus_addr_long: number;

    constructor(
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        // private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone,
        private _router: Router,
        private _route: ActivatedRoute,
        public _bs: BehaviorService,
        // private socialAuthService: AuthService,
        private _sharedService: SharedService,
        // private userIdle: UserIdleService
    ) { }

    get ff() { return this.loginForm.controls; }
    get f() { return this.registerForm.controls; }

    ngOnInit() {
        console.log('_route', this._route);
        //load Places Autocomplete
        // this.mapsAPILoader.load().then(() => {

        //     this.geoCoder = new google.maps.Geocoder;

        //     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        //         types: ["address"]
        //     });
        //     autocomplete.addListener("place_changed", () => {
        //         this.ngZone.run(() => {
        //             //get the place result
        //             let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //             //verify result
        //             if (place.geometry === undefined || place.geometry === null) {
        //                 return;
        //             }

        //             //set latitude, longitude and zoom

        //             this.registerForm.controls["bus_addr_lat"].setValue(place.geometry.location.lat());
        //             console.log('latiii', this.bus_addr_lat)
        //             this.registerForm.controls["bus_addr_long"].setValue(place.geometry.location.lng());

        //             // this.zoom = 12;
        //         });
        //     });
        // });
        //map end

        this.loginForm = this.formBuilder.group({

            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],


        });

        this.registerForm = this.formBuilder.group({

            email: ['', [Validators.required, Validators.email]],

            firstName: ['', Validators.required],
            lastName: ['', Validators.required],

            company: ['', Validators.required],
            url: ['', Validators.required],
            cAdd: ['', Validators.required],
            phone: ['', [Validators.required, Validators.minLength(10)]],

            password: ['', [Validators.required, Validators.minLength(8)]],
            confirm_password: ['', Validators.required]
        }, {
                // validator: MustMatch('password', 'confirm_password')


            });





        //map start


    }



    route(path) {
        this._router.navigate([path]);
    }

    loginUser() {

        this.submitted1 = true;

        if (this.loginForm.invalid) {
            return;
        }
        else {
            this.submitted1 = true;
            let data = JSON.stringify(this.loginForm.value);

            this._sharedService.loader('show');
            this._sharedService.login(data).subscribe((res: any) => {
                this._sharedService.loader('hide');
                if (res.success) {
                    this._bs.setUser(res.data);
                    this._sharedService.loginUser(res);
                    this.toastr.success(res.message, '', {
                        // disableTimeOut: true
                        timeOut: 2000
                    });

                }
                else {
                    this.toastr.error(res.error.message, '', {
                        // disableTimeOut: true
                        timeOut: 2000
                    });


                }

            }, (error) => {
                this.toastr.error("There are some error please try after some time.")
                this._sharedService.loader('hide');
            });
        }
    }




    registerUser() {


        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }

        else {
            this.submitted = true;
            let dataReg = JSON.stringify(this.registerForm.value);

            this._sharedService.loader('show');
            console.log('dataaaaa', dataReg);
            this._sharedService.register(dataReg).subscribe((res: any) => {
                this._sharedService.loader('hide');
                if (res.success) {

                    this.toastr.success('Thanks for the registeration we have sent a verification email to the address provided, please verfiy account through the email sent');
                    this.registerForm.reset();
                    this.submitted = false;
                } else {
                    this.toastr.error(res.error.message);
                }
            }, (error) => {
                this.toastr.error("There are some error please try after some time.")
                this._sharedService.loader('hide');
            });
        }
    }




    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;

        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

    salePerson(event: any) {

        let option = {
            sales_person_id: this.registerForm.value.sales_person_id

        }

        // this._sharedService.checksalesperson(option).subscribe((res: any) => {
        //     this._sharedService.loader('hide');
        //     if (res.success) {
        //         this.resultSalePerson = res.success
        //         console.log('this.resultSalePerson', this.resultSalePerson)
        //     }
        // },
        //     (error) => { });


    }



}
