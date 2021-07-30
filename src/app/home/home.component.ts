import { Component, OnInit, HostListener, ChangeDetectorRef, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/services/shared.service';
import { HeaderStatusService } from '../shared/services/header-status.service';
import { environment } from 'src/environments/environment';
import { UniversalService } from '../shared/services/universal.service';
import { Category, CategoryService } from '../shared/services/category.service';
import { IUserDetail } from '../models/user-detail';
import { CategoryViewerController } from '../models/category-viewer-controller';
import { expandAllAnimation, expandVerticalAnimation } from '../_helpers/animations';
import { Professional } from '../models/professional';
import { CityId, getLabelByCityId } from '../_helpers/location-data';
import { BlogSearchQuery, IBlogSearchResult } from '../models/blog-search-query';
import { Blog, IBlog } from '../models/blog';
import { ExpertFinderController } from '../models/expert-finder-controller';
import { smoothHorizontalScrolling } from './smooth-scroll';
import { smoothWindowScrollTo } from '../_helpers/smooth-scroll';

/** for event bright */
// declare function registerEvent(eventId, action): void;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [expandVerticalAnimation, expandAllAnimation],
})
export class HomeComponent implements OnInit {

  get sizeL() { return window && window.innerWidth >= 920; }

  constructor(
    private router: Router,
    private _catService: CategoryService,
    private _sharedService: SharedService,
    private _headerStatusService: HeaderStatusService,
    private _uService: UniversalService,
    private _changeDetector: ChangeDetectorRef,
  ) { }


  private timerResize: any = null;
  private previousScreenWidth: number = 0;

  @HostListener('window:resize', ['$event']) WindowResize(e: Event) {
    if(this.categories && window.innerWidth && window.innerWidth != this.previousScreenWidth) {
      this.previousScreenWidth = window.innerWidth;
      this.categoryController.disposeAll();
        
      if(this.timerResize) {
        clearTimeout(this.timerResize);
      }
  
      this.timerResize = setTimeout(() => {
        this.categoryController = new CategoryViewerController(this.categories);
        this.expertFinderController.initLayout();
        this._changeDetector.detectChanges();
      }, 500);   
    }
  }
  
  changeHeaderShadowStatus(isShown: boolean) {
    if(isShown) {
      this._headerStatusService.showShadow();
    } else {
      this._headerStatusService.hideShadow();
    }
  }

  ngAfterViewInit() {
    if(!this._uService.isServer) {
      this.elExpertFinderScrollHorizontal.nativeElement.scrollTo({left: 10000});
    }
  }

  // eventbriteCheckout(event) {
  //   registerEvent(146694387863, (res) => {
  //     // console.log(res);
  //   });
  // }

  ngOnInit() {
    this._uService.setMeta(this.router.url, {
      title: 'PromptHealth | Your health and wellness personal assistant',
      description: 'Take control of your health with options tailored to you',
    });

    this._catService.getCategoryAsync().then((cats => {
      this.categories = cats;
      this.categoryController = new CategoryViewerController(this.categories);
    }));

    const cityIdsFeatured: CityId[] = ['toronto', 'vancouver', 'victoria', 'hamilton', 'richmond', 'burnaby', 'calgary', 'winnipeg'];
    const citiesFeatured: {id: CityId, label: string}[] = [];
    for(let id of cityIdsFeatured) {
      citiesFeatured.push({id: id, label: getLabelByCityId(id)});
    }
    this.citiesFeatured = citiesFeatured;

    this.getBlog();

    if (!this._uService.isServer) {
      // await this.getHomePageFeatures(); /** need to reinstate after many practitioners buy addonPlan */
      this.getPractitionersFeatured(); /** temporary solition */
    }

  }

  /** need to reinstate after many practitioners buy addonPlan */
  getHomePageFeatures(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this._sharedService.getNoAuth('/addonplans/get-featured', { roles: ['SP', 'C'] }).toPromise().then((res: any) => {
        res.data.forEach(item => {
        });
        resolve(true);
      });  
    });
  }


  /** CATEGORIES */
  private categories: Category[];
  public categoryController: CategoryViewerController;
  /** CATEGORIES END */


  /** EXPERT FINDER */
  public expertFinderController: ExpertFinderController = new ExpertFinderController();
  @ViewChild('expertFinderScrollHorizontal') private elExpertFinderScrollHorizontal: ElementRef;

  /** temporary solution to fill featured practitioners */
  getPractitionersFeatured() {
    this._sharedService.getNoAuth('user/get-paid-spc').subscribe((res: any) => {
      if (res.statusCode === 200) {
        const users: Professional[] = [];
        res.data.forEach((d: IUserDetail) => {
          users.push(new Professional(d._id, d));
        });
        this.expertFinderController.addData(users);
      }
    }, (error) => { console.log(error); });
  }

  onEnterExpertFinder(isLeaving: boolean) {
    if(!isLeaving) {
      const el = this.elExpertFinderScrollHorizontal.nativeElement as HTMLElement;
      const start = el.scrollLeft;
      if(start > 0) {
        smoothHorizontalScrolling(el, Math.floor(start * 2 / 9), -start, start);
      }
    }
  }
  /** EXPERT FINDER END */


  /** COMMUNITY */
  public introductionPostType = introductionPostType;
  /** COMMUNITY END */

  /** APP */
  isAppFeatureSelected(index: number) {
    return this.selectedAppFeature === index;
  }
  get isAppFeatureLeftSelected() {
    return this.selectedAppFeature === 0 || (this.selectedAppFeature > 0 && this.selectedAppFeature < 3);
  }
  get isAppFeatureRightSelected() {
    return this.selectedAppFeature >= 3;
  }
  
  public appFeatureItems = appFeatureItems;
  public selectedAppFeature: number = null;
  public isOnAppFeature: boolean = false;
  @ViewChildren('appFeatureSwitcher') private appFeatureSwitchers: QueryList<ElementRef>;

  onIntersectAppFeature(enter: boolean) {
    this.isOnAppFeature = enter;
  }

  onIntersectAppFeatureItem(select: boolean, index: number) {
    if(this.isOnAppFeature) {
      if(select) {
        this.selectedAppFeature = index;
      } else if(index > 0) {
        this.selectedAppFeature = index - 1;
      } else {
        this.selectedAppFeature = null;
      }    
    } else {
      this.selectedAppFeature = null;
    }
  }
  
  onClickAppFeatureItem(index: number) {
    if(!this._uService.isServer) {
      let topEl = (this.appFeatureSwitchers.toArray()[index].nativeElement as HTMLDivElement).getBoundingClientRect().top;
      // if(this.selectedAppFeature > index)
      window.scrollTo({top: topEl + window.scrollY});
      setTimeout(() => {
        this.selectedAppFeature = index;
      }, 10)  
    }
  }
  /** APP END */

  /** CITIES */
  public citiesFeatured: {id: CityId, label: string}[];
  /** CITIES END */

  /** BLOGS */
  public blogs: Blog[];
  async getBlog() {
    const query = new BlogSearchQuery({count: 3});
    this._sharedService.getNoAuth('/blog/get-all', query.json ).subscribe((res: IBlogSearchResult) => {
      if(res.statusCode === 200) {
        const blogs = [];
        res.data.data.forEach(d => {
          blogs.push(new Blog(d));
        });
        this.blogs = blogs;
      } else {
        console.log(res.message);
        this.blogs = [];
      }
    }, (error) => {
      console.log(error);
      this.blogs= [];
    });
  }
  /** BLOGS END */
}

const appFeatureItems = [
  [
    {
      icon: 'verified-outline', 
      title: 'Search for health and wellness practitioners',
      content: 'Search for health and wellness practitioners',
    },
    {
      icon: 'checkbox-square-outline',
      title: 'Search for health and wellness practitioners',
      content: 'Read reviews and make informed decisions about your care when booking appointments',
    },
    {
      icon: 'users-outline',
      title: 'Stay connected with your favourite experts',
      content: 'Get notified when experts you follow share new content',
    }
  ],
  [
    {
      icon: 'book-open-outline',
      title: 'Browse and learn from our content library',
      content: 'View by category and filter by media type to find expert-created content that matters to you',
    },
    {
      icon: 'tags-2-outline',
      title: 'Discover select deals on expert-recommended products',
      content: 'Browse our product offerings page for deals to support your health and wellness journey',
    },
    {
      icon: 'shield-check-outline',
      title: 'Safe & Secure',
      content: 'Your privacy and security is ensured (PIPEDA/HIPPA compliant)',
    }
  ],
]

const introductionPostType = {
  note: {
    icon: '',
    color: '',

    title: 'Notes',
    content: 'Create any types of events too easy',
  }
}