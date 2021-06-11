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

    private timerCategory: any = null;
    @HostListener('window:resize', ['$event']) WindowResize(e: Event) {
      this.categoryController.disposeAll();
      if(this.timerCategory) {
        clearTimeout(this.timerCategory);
      }

      this.timerCategory = setTimeout(() => {
        if(this.categories) {
          this.categoryController = new CategoryViewerController(this.categories);
          this._changeDetector.detectChanges();
        }
      }, 500); 
    }

    private categories: Category[];
    public categoryController: CategoryViewerController;

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
      this.categoryController = new CategoryViewerController(this.categories);
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

class CategoryViewerController {

  public dataPerRows: {
    categories: Category[];
    categoryInjected: Category;
  }[];

  isCategorySelected(idxRow: number, idxCol: number) {
    const target = this.dataPerRows[idxRow].categories[idxCol];
    const injected = this.dataPerRows[idxRow].categoryInjected;
    return (injected && target._id == injected._id) ? true : false;
  }

  getIconOf(cat: Category): string {
    const img = cat.image;
    const img2 = img.toLowerCase().replace(/_/g, '-').replace('.png', '');
    return img2
  }

  subCategoriesString(parent: Category) {
    const categories = [];
    parent.subCategory.forEach(sub => {categories.push(sub.item_text); });
    return categories.join(' / ');
  }

  onTapMainCategory(idxRow: number, idxCol: number) {
    const data = this.dataPerRows[idxRow];

    if(this.isCategorySelected(idxRow, idxCol)) { this._dispose(data); }
    else {
      const injected = data.categoryInjected;
      const target = data.categories[idxCol];

      if(!injected) { 
        this._inject(data, target); 
      }
      else {
        this._dispose(data);
        this.waitForInject = {idxRow: idxRow, idxCol: idxCol};
      }
    }

    this.isCategorySelected(idxRow, idxCol)
  }

  onAnimationDone() {
    if(this.waitForInject) {
      const data = this.dataPerRows[this.waitForInject.idxRow];
      const target = data.categories[this.waitForInject.idxCol];
      this._inject(data, target);
      this.waitForInject = null;
    }
  }

  disposeAll() {
    this.dataPerRows.forEach(data => { this._dispose(data); });
  }

  private waitForInject: {idxRow: number; idxCol: number} = null;

  private _inject(dataPerRow: CategoryViewerController['dataPerRows'][0], target: Category) {
    dataPerRow.categoryInjected = target;
  }

  private _dispose(dataPerRow: CategoryViewerController['dataPerRows'][0]) {
    dataPerRow.categoryInjected = null;
  }


  constructor(categories: Category[]) {
    this.dataPerRows = [];

    let numcol: number;
    if(!window.innerWidth || window.innerWidth < 768) { numcol = 1; }
    else if(window.innerWidth < 1200) { numcol = 2} 
    else { numcol = 3; }

    const numrow = Math.ceil(categories.length / numcol);

    for (let i=0; i<numrow; i++) {
      const categoriesPerRow = [];
      for (let j=0; j<numcol; j++) {
        let k = i * numcol + j;
        if(k >= categories.length) { break; }

        categoriesPerRow.push(categories[k]);
      }

      if(categoriesPerRow.length == 0) { break; }
      
      this.dataPerRows.push({categories: categoriesPerRow, categoryInjected: null});
    }
  }
}
