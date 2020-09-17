import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogList = [];
  categoryList = [];
  categories: any = []
  defaultImage = 'assets/img/no-image.jpg';

  constructor(
    private _sharedService: SharedService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getBlogList();
    this.getAllCategories();
  }

  getBlogList() {
    this._sharedService.loader('show');
    let path = `blog/get-all?count=10&page=1&frontend=1&categoryId=`
    this._sharedService.getNoAuth(path).subscribe((res: any) => { 
      if (res.statusCode === 200) {
        this.blogList = res.data.data;
      }else {
        this.toastr.error(res.message);
      }
      this._sharedService.loader('hide');
    }, (error) => {
      this._sharedService.loader('hide');
    });
  }
  getAllCategories() {
    this._sharedService.loader('show');
    let path = `category/get-categories`;
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.categories = res.data;
      }else {
        this.toastr.error(res.message);
      }
    }, (error) => {
      this._sharedService.loader('hide');
    });
  }
}
