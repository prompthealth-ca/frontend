import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
import { Meta, Title } from '@angular/platform-browser';

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
    private router: Router,
    private _sharedService: SharedService,
    private toastr: ToastrService,
    private title: Title,
    private meta: Meta
  ) {
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
      let url: string = "https://prompthealth.ca";
      let img: string = "https://prompthealth.ca/assets/img/logo.png";
      if (res.statusCode === 200) {
        this.blogList = res.data;
        let des=""
        
        if(this.blogList.description){
          des = this.removeTags(this.blogList.description)
        }
        
        this.title.setTitle(this.blogList.title);
        this.meta.updateTag({ name: 'title', content: this.blogList.title});
        this.meta.updateTag({ property: 'og:title', content: this.blogList.title });
        if (des) {
          this.meta.updateTag({ name: 'description', content: des });
          this.meta.updateTag({ property: 'og:description', content: des });
        }
        if (this.router.url) {
          url = url + this.router.url
        }
        this.meta.updateTag({ property: 'og:url', content: url });

        // if (this.blogList.image) {
        //   img = "https://api.prompthealth.ca/blogs/" + this.blogList.image
        // }
        
        this.meta.updateTag({ property: 'og:image', content: img, itemprop: 'image' });
        this.meta.updateTag({ property: 'og:image:url', content: img, itemprop: 'image' });        
        this.meta.updateTag({ property: 'og:image:type', content: 'image/png' });
      }

      else {
        this.toastr.error(res.message);
      }
    }, (error) => {
      this._sharedService.loader('hide');
    });
  }

  removeTags(str) {
    if ((str === null) || (str === ''))
      return false;
    else
      str = str.toString();
    return str.replace(/(<([^>]+)>)/ig, '');
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
