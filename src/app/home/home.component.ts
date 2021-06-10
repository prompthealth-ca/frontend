import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/services/shared.service';
import { HeaderStatusService } from '../shared/services/header-status.service';
import { environment } from 'src/environments/environment';
// import { Partner } from '../models/partner';
// import { PartnerSearchFilterQuery } from '../models/partner-search-filter-query';
import { UniversalService } from '../shared/services/universal.service';
import { Category, CategoryService, SubCategory } from '../shared/services/category.service';
import { IFormItemSearchData } from '../models/form-item-search-data';
import { IUserDetail } from '../models/user-detail';
import { expandVerticalAnimation } from '../_helpers/animations';
import { Professional } from '../models/professional';
import { CityId, getLabelByCityId } from '../_helpers/location-data';

/** for event bright */
// declare function registerEvent(eventId, action): void;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [expandVerticalAnimation],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private _catService: CategoryService,
    // private formBuilder: FormBuilder, /** NO NEED */
    private _sharedService: SharedService,
    private _headerStatusService: HeaderStatusService,
    // private toastr: ToastrService,
    private _uService: UniversalService,
    private _changeDetector: ChangeDetectorRef,
    // _el: ElementRef,
  ) {
    // this.elHost = _el.nativeElement;
  }

    ////// NEW  
    public practitionersFeatured: Professional[];
    public pageCurrentPractitionersFeatured: number = 0
    public countPractitionersFeaturedPerPage: number = 7;
    public citiesFeatured: {id: CityId, label: string}[];

    categoryIcon(cat: Category): string {
      const img = cat.image;
      const img2 = img.toLowerCase().replace(/_/g, '-').replace('.png', '');
      return img2
    }
    subCategoriesString(parent: Category) {
      const categories = [];
      parent.subCategory.forEach(sub => {categories.push(sub.item_text); });
      return categories.join(' / ');
    }

    public categories: Category[];
    public idxTargetSubcategoryInjector: number = null;
    public idxSelectedCategory: number = null;
    private _timerSubcategory: any = null    

    onTapMainCategory(i: number) {
      /** if main category is selected and same main category is clicked, hide subcategory */
      if(this.idxSelectedCategory === i) {
        this.hideSubcategory();
      }
      /** if no main category is selected, show subcategory */
      else if (this.idxSelectedCategory === null) {
        this.showSubcategory(i);
      }
      /** if main category is selected and another main category is clicked, hide current subcategory and then show new subcategory */
      else {
        clearTimeout(this._timerSubcategory);

        this.hideSubcategory();
        this._timerSubcategory = setTimeout(() => {
          this.showSubcategory(i);
          this._changeDetector.detectChanges();            
        }, 300);
      }
    }

    hideSubcategory() {
      this.idxSelectedCategory = null;
      this.idxTargetSubcategoryInjector = null;
    }

    showSubcategory(i: number) {
      this.idxSelectedCategory = i;
      const w = window.innerWidth || 320;
      const colnum = (w < 768) ? 1 : (w < 1200) ? 2 : 3;
      this.idxTargetSubcategoryInjector = (Math.floor(i / colnum) + 1) * colnum - 1;
    }

    changeHeaderShadowStatus(isShown: boolean) {
      if(isShown) {
        this._headerStatusService.showShadow();
      } else {
        this._headerStatusService.hideShadow();
      }
    }  
    ////// NEW END

  AWS_S3 = '';


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
    }));

    const cityIdsFeatured: CityId[] = ['toronto', 'vancouver', 'victoria', 'hamilton', 'richmond', 'burnaby', 'calgary', 'winnipeg'];
    const citiesFeatured: {id: CityId, label: string}[] = [];
    for(let id of cityIdsFeatured) {
      citiesFeatured.push({id: id, label: getLabelByCityId(id)});
    }
    this.citiesFeatured = citiesFeatured;

    const ls = this._uService.localStorage;
    this.AWS_S3 = environment.config.AWS_S3;

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

  /** temporary solution to fill featured practitioners */
  getPractitionersFeatured() {
    this._sharedService.getNoAuth('user/get-paid-spc').subscribe((res: any) => {
      if (res.statusCode === 200) {
        const users: Professional[] = [];
        res.data.forEach((d: IUserDetail) => {
          users.push(new Professional(d._id, d));
        });
        this.practitionersFeatured = users;
      }
    }, (error) => { console.log(error); });
  }
}
