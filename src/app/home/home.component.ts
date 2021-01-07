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

  currentIntroIndex = 0;
  introBannerItems = [
    {
      name: 'menwomen',
      bgImg: 'assets/img/rec_pictures/menwomen.png',
      thumbnail: 'assets/img/rec_pictures/menwomen-thumb.png',
      title: 'Women/Men\'s health',
      description: 'When it comes to hormones, there are gender specific services for you!'
    },
    {
      name: 'skin',
      bgImg: 'assets/img/rec_pictures/skinrejuv.png',
      thumbnail: 'assets/img/rec_pictures/skinrejuv-thumb.png',
      title: 'Skin rejuvenation',
      description: 'Whether it’s a relaxing facial or a total skin transformation, we’ve got you\
      covered.'
    },
    {
      name: 'immune',
      bgImg: 'assets/img/rec_pictures/immunesys.png',
      thumbnail: 'assets/img/rec_pictures/immunesys-thumb.png',
      title: 'Immune system and energy',
      description: 'Natural remedies, supplements, or energy healing… you’ve come\
      to the right place.'
    },
    {
      name: 'nutrition',
      bgImg: 'assets/img/rec_pictures/nutrition.png',
      thumbnail: 'assets/img/rec_pictures/nutrition-thumb.png',
      title: 'Nutrition',
      description: 'It’s not always about weight management, sometimes we have a specific need when it\
      comes to our nutrition that needs to be fulfilled.'
    },

    {
      name: 'preventative',
      bgImg: 'assets/img/rec_pictures/preventative.png',
      thumbnail: 'assets/img/rec_pictures/preventative-thumb.png',
      title: 'Preventative health',
      description: 'This refers to your overall physical health, including medical, oral, hearing and vision'
    },
    {
      name: 'sleep',
      bgImg: 'assets/img/rec_pictures/sleep.png',
      thumbnail: 'assets/img/rec_pictures/sleep-thumb.png',
      title: 'Sleep',
      description: 'There are many different solutions for a better night\'s sleep, \
        whether it\'s a medical treetment or natural remedies, there\'s something for everyone.'
    },
    {
      name: 'mood',
      bgImg: 'assets/img/rec_pictures/mood.png',
      thumbnail: 'assets/img/rec_pictures/mood-thumb.png',
      title: 'Mood/mental health',
      description: 'Mental health is a big part of our overall well being, and there are many\
      different approaches to it.You don’t necessarily have to have a mood disorder, anyone can\
      benefit from motivation and mindfulness, and we encourage that.'
    },
    {
      name: 'painmanagement',
      bgImg: 'assets/img/rec_pictures/painmanagement.png',
      thumbnail: 'assets/img/rec_pictures/painmanagement-thumb.png',
      title: 'Pain management',
      description: 'There are many different practitioners offering solutions for pain management, and some are even more \
      specialized in certain areas.'
    },
    {
      name: 'fitness',
      bgImg: 'assets/img/rec_pictures/fitness.png',
      thumbnail: 'assets/img/rec_pictures/fitness-thumb.png',
      title: 'Fitness',
      description: 'We all have different needs ranging from strength training, aerobic, flexibility, cardio, \
      and we’ve got something for everyone'
    }
  ];

  howPhWorks = [
    {
      imgUrl: 'assets/img/how-ph-works/search.png',
      title: 'Search',
      body: 'To go broad, search by your goal, to be more particular, get a personal match, or if you already \
      know what you are looking for, search by treatment types.',
      remark: '**select <b class=\"text-green\"> by location</b> or <b class=\"text-orange\">remote</b>'
    },
    {
      imgUrl: 'assets/img/how-ph-works/filter.png',
      title: 'Filter',
      body: 'Apply filters to your search to narrow down the options in your geographic area. Choose to \
       select preferences such as experience \
      level, language, price, pecialization with age group, practitioner gender, and more! ',
    },
    {
      imgUrl: 'assets/img/how-ph-works/compare.png',
      title: 'Compare',
      body: 'Compare: Do side by side comparisons and check out ratings and reviews to help you find the best\
       practitioner. ',
    },
    {
      imgUrl: 'assets/img/how-ph-works/book.png',
      title: 'Book',
      body: 'Directly request a booking with your preferred availability.',
    },
    {
      imgUrl: 'assets/img/how-ph-works/session.png',
      title: 'Session',
      body: 'Enjoy your treatment with relaxation and ease. Build your dashboard of providers and services\
       for future reference.',
    },
  ];
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
      this.currentIntroIndex = (this.currentIntroIndex + 1) % 9;
    }, 10000);
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


  showMenu(){
    this._sharedService.showNavMenu()
  }
}
