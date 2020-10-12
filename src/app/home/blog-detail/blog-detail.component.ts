import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blogList: any;
  defaultImage = 'assets/img/no-image.jpg';
  categoryList = [];
  private sub: any;
  id = '';
  socialShare: boolean = false;
  socialSharing: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private _sharedService: SharedService,
    private toastr: ToastrService,) {
  }

  ngOnInit(): void {
    this.sub = this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getBlog()
    this.getAllCategories();
  }

  changeSocialLink(value) {
    if (value == 'fb') {
      this.socialSharing = 'fb';
    } else {
      this.socialSharing = 'in';
    }
  }

  getBlog() {
    let path = `blog/get-by-slug/${this.id}`
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.blogList = res.data;
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
