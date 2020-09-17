import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';


@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.scss']
})
export class BlogCategoryComponent implements OnInit {
  blogList = [];
  defaultImage = 'assets/img/no-image.jpg';
  categoryList = [];
  categories: any = [];
  private sub: any;
  id = '';



  constructor(
    private activeRoute: ActivatedRoute,
    public route: Router,
    private _sharedService: SharedService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.sub = this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getBlogList();
      this.getAllCategories();
    });
  }

  getBlogList() {
    this._sharedService.loader('show');
    let path = `blog/get-all?count=10&page=1&frontend=1&categoryId=${this.id}`
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.blogList = res.data.data;
      } else {
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
        this.categoryList = res.data;
      } else {
        this.toastr.error(res.message);
      }
    }, (error) => {
      this._sharedService.loader('hide');
    });
  }
}
