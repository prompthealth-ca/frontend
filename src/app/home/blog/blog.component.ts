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
    let path = `blog/get-all?count=10&page=1&frontend=1&categoryId=`
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.blogList = res.data.data;
      }

      else {
        this.toastr.error(res.message);
      }
    }, (error) => {
      this._sharedService.loader('hide');
    });
  }
  getAllCategories() {
    let path = `category/get-all?count=10&page=1&frontend=1`;
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.categoryList = res.data.data;
      }

      else {
        this.toastr.error(res.message);
      }
    }, (error) => {
      this._sharedService.loader('hide');
    });
  }
}
