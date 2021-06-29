import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileManagementService } from 'src/app/dashboard/profileManagement/profile-management.service';
import { Blog } from 'src/app/models/blog';
import { IBlogCategory } from 'src/app/models/blog-category';
import { BlogSearchQuery } from 'src/app/models/blog-search-query';
import { IUserDetail } from 'src/app/models/user-detail';
import { SharedService } from 'src/app/shared/services/shared.service';
import { UniversalService } from 'src/app/shared/services/universal.service';
import { PostManagerService } from '../post-manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private user: IUserDetail;
  public posts: Blog[];
  public postsTotal: number = 0;
  public catIdSelected: string = null;

  public pageCurrent: number = 1;

  
  get countPerPage() { return this._postsService.countPerPage; }
  
  get categories() {
    return this._postsService.categories || [];
  }
  get categoryNameSelected() {
    return this._postsService.categoryNameOf(this.catIdSelected) || 'All';
  }

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _profileService: ProfileManagementService,
    private _uService: UniversalService,
    private _postsService: PostManagerService,
    private _sharedService: SharedService,
  ) { }

  async ngOnInit() {
    const userLS = this._uService.localStorage.getItem('user');
    if(userLS) {
      this.user = await this._profileService.getProfileDetail(JSON.parse(userLS));
    }

    await this.initCategories();

    this._route.params.subscribe((params: {page: number}) => {
      this.pageCurrent = params.page || 1;
      this.initPosts()
    });
  }

  initCategories(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this._postsService.categories) {
        resolve(true);
      } else {
        const path = `category/get-all`;
        this._sharedService.getNoAuth(path).subscribe((res: any) => {
          if (res.statusCode === 200) {
            this._postsService.saveCacheCategories(res.data.data);
            resolve(true);
          }else {
            console.log(res);
            reject(res.message);
          }
        }, (error) => {
          console.log(error);
          reject(error);
        });
      }  
    });
  }

  initPosts() {
    return new Promise((resolve, reject) => {
      const posts = this._postsService.postsPerPageOf(this.catIdSelected, this.pageCurrent);
      this.setPosts();
      resolve(true);
      if(!posts) {
        const path = 'blog/get-by-author';
        const query = new BlogSearchQuery({ authorId: this.user._id });
        this._sharedService.get(path + query.queryParams).subscribe((res: any) => {
          if(res.statusCode === 200) {
            console.log(res);
            this._postsService.saveCache(res.data);
            this.setPosts();
            resolve(true)
          } else {
            console.log(res.message);
            reject(res.message);
          }
        }, (err) => {
          console.log(err);
          reject(err);
        });
      }
    });
  }


  setPosts() {
    const postsAll = this._postsService.postsAllOf(this.catIdSelected);
    this.postsTotal = postsAll ? postsAll.length : 0;

    this.posts = this._postsService.postsPerPageOf(this.catIdSelected, this.pageCurrent);
  }

  onChangePage(e: any) {
    this._router.navigate(['../', e], {relativeTo: this._route});
  }

  onChangeCategory(category: IBlogCategory = null) {
    this.catIdSelected = category ? category._id : null;
    this.setPosts();
  }
}
