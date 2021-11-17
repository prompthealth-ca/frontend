import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileManagementService } from 'src/app/dashboard/profileManagement/profile-management.service';
import { ICouponData } from 'src/app/models/coupon-data';
import { IPlanData, IPlanFeatureData, PlanTypePractitioner } from 'src/app/models/default-plan';
import { IGetPlansResult } from 'src/app/models/response-data';
import { SharedService } from 'src/app/shared/services/shared.service';
import { UniversalService } from 'src/app/shared/services/universal.service';
import { expandVerticalAnimation, slideHorizontalAnimation } from 'src/app/_helpers/animations';
import { smoothWindowScrollTo } from 'src/app/_helpers/smooth-scroll';
import { IFAQItem } from '../_elements/faq-item/faq-item.component';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-practitioner',
  templateUrl: './about-practitioner.component.html',
  styleUrls: ['./about-practitioner.component.scss'],
  animations: [expandVerticalAnimation, slideHorizontalAnimation],
})
export class AboutPractitionerComponent implements OnInit {

  get sizeL() { return window && window.innerWidth >= 992; }

  get profile() { return this._profileService.user; }
  get isNotLoggedIn() { return this._profileService.loginStatus == 'notLoggedIn'; }
  get isLoggedIn() { return this._profileService.loginStatus == 'loggedIn'; }

  constructor(
    private _sharedService: SharedService,
    private _uService: UniversalService,
    private _profileService: ProfileManagementService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _el: ElementRef,
  ) {
    this.currentCountry = this._sharedService.country;

  }

  public features = features;
  public plans = plans;
  public planFeatures = planFeatures;
  public faqs = faqs;

  public isDurationMonthly: boolean = true;
  public isLoading: boolean = false;

  public couponData: ICouponData = null;
  public isCouponShown = false;
  public isCouponShrink = false;

  public videoLink = "/assets/video/about-practitioner-sm.mp4";
  public videoLinkLg = '/assets/video/about-practitioner-md.mp4';
  public videoLgMarkedAsLoadStart: boolean = false;
  public isVideoLgReady: boolean = false;

  @ViewChild('videoPlayer') private videoPlayer: ElementRef;
  @ViewChild('videoLg') private videoLg: ElementRef;

  currentCountry = 'Canada';

  @HostListener('window:resize') WindowResize() {
    this.loadVideoLgIfNeeded();
  }


  keepOriginalOrder = (a: any, b: any) => a.key;

  isFeatureShowable(i: number, planType: PlanTypePractitioner) {
    return this.planFeatures[i].targetPlan.indexOf(planType) === 0;
  }

  ngAfterViewInit() {
    this._route.fragment.pipe(first()).subscribe(fragment => {
      const el: HTMLElement = this._el.nativeElement.querySelector('#' + fragment);
      if (el) {
        setTimeout(() => {
          const top = el.getBoundingClientRect().top;
          smoothWindowScrollTo(top);
        }, 300);
      }
    });

    this.loadVideoLgIfNeeded();
  }

  ngOnInit(): void {
    this._uService.setMeta(this._router.url, {
      title: 'Reach more new patients and grow your practice with PromptHealth',
      description: 'PromptHealth helps providers reach more new patients for in-person visits, video visits or both.',
      robots: 'index, follow',
      image: `${environment.config.FRONTEND_BASE}/assets/video/about-practitioner-thumbnail.jpg`,
      imageWidth: 992,
      imageHeight: 558,
      imageType: 'image/jpg'
    });

    this.initPlans();
    this.initCoupon();
  }

  loadVideoLgIfNeeded() {
    if (this.sizeL && this.videoLg?.nativeElement && !this.videoLgMarkedAsLoadStart) {
      const videoLg = this.videoLg.nativeElement as HTMLVideoElement;
      videoLg.addEventListener('loadeddata', () => {
        const vp = this.videoPlayer?.nativeElement;
        const currentTime = vp?.currentTime || 0;
        this.isVideoLgReady = true;
        videoLg.currentTime = currentTime;
        videoLg.loop = true;
        vp.pause();
        videoLg.play();
      });

      videoLg.load();
      this.videoLgMarkedAsLoadStart = true;
    }
  }

  initPlans() {
    const path = 'user/get-plans';
    this._sharedService.getNoAuth(path).subscribe((res: IGetPlansResult) => {
      if (res.statusCode == 200) {
        res.data.forEach(d => {
          if (this.currentCountry !== 'Canada') {
            d.price = d.usPrice;
            d.yearlyPrice = d.usYearlyPrice;
            d.stripePriceId = d.stripeUSPriceId;
            d.stripeYearlyPriceId = d.stripeUSYearlyPriceId;
            d.currency = 'USD';
          } else {
            d.currency = 'CAD';
          }
          if (d.userType.includes('P')) {
            //nothing to do
          } else if (d.userType.length == 2) {
            this.plans.basic.data = d;
          } else if (d.userType.includes('SP')) {
            this.plans.provider.data = d;
          } else if (d.userType.includes('C')) {
            this.plans.centre.data = d;
          }
        });
      }
    });
  }

  initCoupon() {
    const coupon = this._uService.sessionStorage.getItem('stripe_coupon_code');
    if (coupon) {
      this.couponData = JSON.parse(coupon);
      let isCouponApplicable = false;
      for (let role of ['SP', 'C']) {
        if (this._sharedService.isCouponApplicableTo(this.couponData, role)) {
          isCouponApplicable = true;
        }
      }

      if (isCouponApplicable) {
        setTimeout(() => {
          this.isCouponShown = true;
        }, 1000);
      }
    }
  }

  onChangeDuration(state: 'on' | 'off') {
    this.isDurationMonthly = (state == 'on') ? true : false;
  }

  scrollTo(el: HTMLElement) {
    if (el && window) {
      const top = window.scrollY + el.getBoundingClientRect().top;
      smoothWindowScrollTo(top);
    }
  }

  expandCoupon() {
    this.isCouponShrink = false;
  }

  shrinkCoupon(e: Event) {
    this.isCouponShrink = true;
    e.stopPropagation();
  }

  onClickSignup(type: PlanTypePractitioner) {
    const link = ['/auth', 'registration'];
    switch (type) {
      case 'basic':
      case 'provider':
        link.push('sp');
        break;

      case 'centre':
        link.push('c');
        break;
    }
    this._uService.sessionStorage.setItem('selectedPlan', JSON.stringify(this.plans[type].data));
    this._uService.sessionStorage.setItem('selectedMonthly', this.isDurationMonthly.toString());

    this._router.navigate(link);
  }

  async onClickCheckout(type: PlanTypePractitioner) {
    if (this.profile.roles == 'U') {
      this._toastr.error('You don\'t need to buy this plan');
    } else {

      this.isLoading = true;
      try {
        const result = await this._sharedService.checkoutPlan(
          this.profile,
          this.plans[type].data,
          'default',
          this.isDurationMonthly
        );
        this._toastr.success(result.message);
        switch (result.nextAction) {
          case 'complete':
            this._router.navigate(['/dashboard/register-product/complete']);
            break;
          case 'stripe':
            // automatically redirect to stripe. nothing to do.
            break;
        }
      } catch (error) {
        this._toastr.error(error);
      } finally {
        this.isLoading = false;
      }
    }
  }
}

const features = [
  {
    icon: 'user-check-outline',
    title: 'Get discovered.',
    content: 'Share your wellness philosophy and knowledge, allowing people to discover you and your unique services before making an appointment.',
  },
  {
    icon: 'text-block-outline',
    title: 'Share your expertise.',
    content: 'Whether it’s through text, voice notes, images, articles, or online events, we made it easy for you to share your knowledge using the medium that you enjoy creating with.',
  },
  {
    icon: 'cast-outline',
    title: 'Connect and engage.',
    content: 'Be a part of our wellness community. Engage with new and potential clients, and other providers in your area who align with your values and approach to wellness.',
  },
  {
    icon: 'lightning-outline',
    title: 'Fun and simple to use.',
    content: 'Your profile, your rules! PromptHealth is where wellness providers are leading the conversation around the topics they are experts in, and having fun doing it.',
  },

  // {
  //   icon: 'lightning-outline',
  //   title: 'Simple to use and time-saving.',
  //   content: 'We are creating a space where health and wellness experts can lead the conversation around the topics they are experts in. Instead of spending time building your credibility online, let them come to you on PromptHealth and focus on what you do best.',
  // },
  // {
  //   icon: 'text-block-outline',
  //   title: 'Choose a content creation option that works best for you.',
  //   content: 'Easy to use content creation tools made for busy health practitioners. Share using the medium that suits you best. Whether it’s through voice notes, videos, articles, or online events, we made it easy for health providers to create and share.',
  // },
  // {
  //   icon: 'user-check-outline',
  //   title: 'Share information on topics you are an expert in.',
  //   content: 'Health misinformation online is a huge problem today. We are serious about making sure those providing health information can be trusted. We prioritize verifying our providers to remain a credible and helpful health resource for the public.',
  // },
  // {
  //   icon: 'cast-outline',
  //   title: 'Connect with clients.',
  //   content: 'Find clients, share details about the services you offer and how you can help, and accept bookings all in one platform. ',
  // },
  // {
  //   icon: 'thumbs-up-outline',
  //   title: 'Engage with the health and wellness community.',
  //   content: 'Be part of our community. Stay engaged with new and current clients, and other practitioners in your area. ',
  // },
  // {
  //   icon: 'verified-outline',
  //   title: 'Recommend other health professionals you trust.',
  //   content: 'Think your clients will benefit from a different treatment, or do you know another provider you trust? Find and leave recommendations for other practitioners. ',
  // },
];

const plans: { [k in PlanTypePractitioner]: IPlanData } = {
  basic: {
    id: 'basic',
    icon: 'note-text-outline',
    title: 'Basic',
    subtitle: 'Get started with PromptHealth for free!',
    label: null,
    data: null,
  },
  provider: {
    id: 'provider',
    icon: 'verified-outline',
    title: 'Advanced',
    subtitle: 'For solo providers.',
    label: 'Popular',
    data: null,
  },
  centre: {
    id: 'centre',
    icon: 'users-outline',
    title: 'Premium',
    subtitle: 'For centers with multiple providers.',
    label: null,
    data: null,
  }
};

const planFeatures: IPlanFeatureData[] = [
  { item: 'Get listed with a personalized profile', targetPlan: ['basic', 'provider', 'centre'], detail: null },
  { item: 'Share your knowledge via voice memos and notes', targetPlan: ['basic', 'provider', 'centre'], detail: null },
  { item: 'Share your knowledge via voice memos, notes, and images + articles, and events', targetPlan: ['provider', 'centre'], detail: null },
  { item: 'Receive booking requests', targetPlan: ['provider', 'centre'], detail: null },
  { item: 'Inter referrals enabled', targetPlan: ['provider', 'centre'], detail: null },
  { item: 'Ratings and reviews', targetPlan: ['provider', 'centre'], detail: null },
  { item: 'Performance analytics', targetPlan: ['provider', 'centre'], detail: null },

  // {item: 'List different locations, services, and practitioners', targetPlan: ['centre'], detail: null},
  { item: 'Display company products and amenities', targetPlan: ['centre'], detail: null },
  { item: 'Enrich your profile with videos', targetPlan: ['centre'], detail: null },
  { item: 'Tag your providers', targetPlan: ['centre'], detail: null },
  { item: 'PromptHealth personal assistant for onboarding', targetPlan: ['centre'], detail: null },
];

const faqs: IFAQItem[] = [
  {
    q: 'What is PromptHealth and why should I be involved?',
    a: 'PromptHealth is an online platform created to assist people navigate their health journey by providing education on holistic wellness solutions. Providers listed with us post trusted content to educate the community on their services and field, allowing the community to make informed decisions about their health. People looking for care options can easily sort through providers who offer services that may help them using personalized filters, or by answering our personal match questionnaire. To further emphasize an integrative approach and truly create an all-in-one wellness navigator, we also list different wellness products and services that may assist providers with their service goals or provide supplementary solutions to wellness seekers. ',
    opened: false,
  },
  {
    q: 'How is PromptHealth different from a regular directory?',
    a: `Unlike regular directories, we do not assume that people know which  providers to search for, and what they all do. Instead, we start from a person’s individual needs and show them all of their care options promoting a holistic approach to wellness. Our search filters allow people to narrow their search based on preferences such as gender, age speciality, language, location, virtual care, and more.
      <br><br>
      Further, people are able to learn about each practitioner by the content they post on their profile. Before booking with a practitioner, our users can learn about their area of interest, and follow them to get notified every time a new post is created. This allows our users to make informed decisions about their care, and book with someone they truly trust and feel comfortable with.
    `,
    opened: false,
  },
  {
    q: 'Does it cost to join PromptHealth?',
    a: `You have the option of creating a basic profile for free, which allows you to post limited educational content such as quick text notes and voice memos.
      <br><br>
      To access all features, including quick text notes, voice memos, articles, events, and recommendations, there is a monthly or annual subscription fee.  Currently, the fee is $25/month for  solo providers, or $95/month as a center with multiple providers. There is a 20% discount if you sign up for annual membership. Details of each account type and features can be found on the pricing page.
    `,
    opened: false,
  },
  {
    q: 'How do I get listed?',
    a: `After signing up by email, or by connecting your Facebook or Google account, you will be asked a series of questions to help us understand your background and specialities. These questions will take between 5-7 minutes to complete. This allows us to ensure you are listed under all of our relevant categories, and will show up when a user is searching for solutions to a particular concern.
      <br><br>
      Please ensure you answer all of the questions, as your profile may be rejected if there are important details missing.
    `,
    opened: false,
  },
  {
    q: 'How do I create an account?',
    a: 'Creating an account is easy. Click the “get listed”  link on our site, and follow the steps shown. When creating an account, please ensure that you fill out all requested information, as it helps create the perfect profile for new clients to find and book sessions with you. Our team DOES NOT approve profiles that are partially filled out, as this does not ensure you are placed in the correct category in our search. We expect you to follow the guidelines provided to upload a professional picture and only select modalities that you are certified in, in order to get the most suitable client match.',
    opened: false,
  },
  {
    q: 'How do I create content?',
    a: `PromptHealth is on a mission to make it easy for people to research, learn, discover, and ultimately make informed decisions about their health, all in one place. Our goal is to eliminate trial and error when looking for wellness solutions  by making PromptHealth the modern and user friendly hub for trusted health and wellness information right by you. We have created a platform to display your knowledge, educate people, and get connected.
      <br><br>
      On your profile, you are able to share wellness content via quick text notes, voice memos, articles/blogs, and events. . Our team is here to support you in the process of creating content, and are happy to provide guidance if needed. Just reach out!
    `,
    opened: false,
  },
  {
    q: 'Will I be able to receive reviews and recommendations?',
    a: `We are the first online platform that makes it possible for health and wellness providers to easily find and inter-refer each other. You can do this by providing recommendations on another provider’s profile to build further trust within the health and wellness community.
      <br><br>
      Recommendations can be provided by other wellness practitioners and wellness companies. To prevent fake reviews, we are only allowing providers and companies who have already been approved to be on PromptHealth to write a recommendation on your profile. This is meant to boost credibility and online trust for everyone.
    `,
    opened: false,
  },
  {
    q: 'Is there a verification process?',
    a: `Before we approve a listing, we ensure to complete an audit to ensure the accuracy of information provided by a health and wellness provider. This review process consists of a careful qualitative approach by our team.
      <br><br>
      We encourage you to upload your certification in order to receive a verified badge beside your profile, indicating you are verified to build more credibility and trust. Although this review process is carefully conducted, we cannot guarantee the qualification information provided and cannot be responsible for false information.
    `,

    opened: false,
  },
  {
    q: 'How do I deactivate or delete my account?',
    a: `To deactivate or delete your account, please  contact the admin at <a href="mailto:info@prompthealth.ca">info@prompthealth.ca</a>`,
    opened: false,
  },
];
