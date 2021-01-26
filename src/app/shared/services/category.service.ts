import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public categoryList;
  constructor(
    private _sharedService: SharedService,
    private toastr: ToastrService
  ) {
    this.getCategoryServices();
  }
  getCategoryServices() {
    this._sharedService.getNoAuth('questionare/get-service').subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.categoryList = [];
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].category_type.toLowerCase() === 'goal') {
            this.categoryList = res.data[i].category;
            break;
          }
        }
        this.categoryList.forEach((cat, i) => {
          let label = cat.item_text.toLowerCase();
          label = label.replace(/[\/\s]/g, '_');
          this.categoryList[i].label = label.replace(/[^0-9a-zA-Z_]/g, '');
        });
      }
    }, (error) => {
      console.error(error);
      this.toastr.error('There are some error please try after some time.');
      this._sharedService.loader('hide');
    });
  }
}
