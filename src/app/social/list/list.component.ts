import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProfileManagementService } from 'src/app/dashboard/profileManagement/profile-management.service';
import { IGetSocialContentsResult } from 'src/app/models/response-data';
import { ISocialPostSearchQuery, SocialPostSearchQuery } from 'src/app/models/social-post-search-query';
import { SocialNote } from 'src/app/models/social-note';
import { SharedService } from 'src/app/shared/services/shared.service';
import { expandVerticalAnimation, fadeAnimation } from 'src/app/_helpers/animations';
import { environment } from 'src/environments/environment';
import { SocialPostTaxonomyType, SocialService } from '../social.service';
import { ISocialPost } from 'src/app/models/social-post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [expandVerticalAnimation, fadeAnimation],
})
export class ListComponent implements OnInit {

  get isEligibleToPost() { return (this.user && this.user.role != 'U');}
  get user() { return this._profileService.profile; }

  public newPosts: ISocialPost[] = [];

  public posts: ISocialPost[] = null;

  public countPerPage: number = 20;
  public selectedTopicId: string;
  public selectedTaxonomyType: SocialPostTaxonomyType;

  public isLoading: boolean = false;
  public isMorePosts: boolean = true;

  private subscriptionLoginStatus: Subscription;

  @HostListener('window:scroll', ['$event']) async onWindowScroll(e: Event) {
    if(!this.isLoading && this.isMorePosts && document.body && this.posts && this.posts.length > 0) {
      const startLoad = !!(document.body.scrollHeight < window.scrollY + window.innerHeight * 2);
      if(startLoad) {
        console.log('startLoad');
        this.isLoading = true;
        const postsFetched = await this.fetchPosts();
        postsFetched.forEach(p => {
          this.posts.push(p);
        });
      }
    }
  }

  constructor(
    private _route: ActivatedRoute,
    private _socialService: SocialService,
    private _sharedService: SharedService,
    private _profileService: ProfileManagementService,
    private _changeDetector: ChangeDetectorRef,
  ) { }

  ngOnDestroy() {
    if(this.subscriptionLoginStatus) {
      this.subscriptionLoginStatus.unsubscribe();
    }
  }

  ngOnInit(): void {
    this._route.params.subscribe((param: {taxonomyType: SocialPostTaxonomyType, topicId: string}) => {
      this.selectedTaxonomyType = param.taxonomyType || 'feed';
      this.selectedTopicId = param.topicId;
      this.checkLoginStatusAndInitPost()
    });
  }

  checkLoginStatusAndInitPost() {
    const status = this._profileService.loginStatus;
    if(status == 'loggedIn' || status == 'notLoggedIn') {
      this.initPosts();
    }
    
    if(!this.subscriptionLoginStatus) {
      this.subscriptionLoginStatus = this._profileService.loginStatusChanged().subscribe(res => {
        if(res == 'loggedIn' || res == 'notLoggedIn') {
          this.initPosts();
        }
      });
    }
  }


  async initPosts() {
    this.disposeCacheIfNeeded();
    this.posts = null;
    const posts = this._socialService.postsOf(this.selectedTaxonomyType);
    const metadata = this._socialService.metadataOf(this.selectedTaxonomyType);
    if(metadata) {
      this.isMorePosts = metadata.existMorePost;
    }
    if(!!posts) {
      setTimeout(() => {
        this.posts = posts;
        this._changeDetector.detectChanges();
        console.log('set posts from cache')
      }, 100);
    } else {
      try {
        this.posts = await this.fetchPosts(); 
      } catch (error) {
        console.log(error)
        this.posts = [];
      }
    }
  }

  disposeCacheIfNeeded() {
    const meta = this._socialService.metadataOf(this.selectedTaxonomyType);
    // if(this.selectedTaxonomyType == 'feed') {
    //   const userId = this.user ? this.user._id : null;
    //   const userIdInMeta = meta && meta.userId ? meta.userId : null;
    //   const userIdMatched = !!(userId == userIdInMeta);
    //   if(userId != userIdInMeta) {
    //     this._socialService.disposeCacheOf('feed');
    //   }
    // }

    const topicId = this.selectedTopicId ? this.selectedTopicId : null;
    const topicIdInMeta = meta && meta.topic ? meta.topic : null;
    if(topicId != topicIdInMeta) {
      this._socialService.disposeCacheOf(this.selectedTaxonomyType);
    }
  }

  fetchPosts(): Promise<ISocialPost[]> {
    return new Promise((resolve, reject) => {
      const tax = this.selectedTaxonomyType;
      
      const params: ISocialPostSearchQuery = {
        count: this.countPerPage,
        ... (this.selectedTopicId) && {tags: [this.selectedTopicId]},
        ... (this.posts && this.posts.length > 0) && {
          page: Math.ceil(this.posts.length / this.countPerPage) + 1,
          timestamp: this.posts[this.posts.length - 1].createdAt,
        },
      }

      let req: Observable<any>;
      if (tax == 'feed') {
        const query = new SocialPostSearchQuery(params);
        if(this.user) {
          req = this._sharedService.get('note/get-feed' + query.toQueryParams());
        } else {
          req = this._sharedService.getNoAuth('note/get-feed' + query.toQueryParams());
        }
      } else {
        if (tax == 'article') {
          params.contentType = 'ARTICLE';
        } else if(tax == 'media') {
          params.hasMedia = true;
        } else if(tax == 'event') {
          params.contentType = 'EVENT';
          params.sortBy = 'eventStartTime';
          params.order = 'asc';
          const meta = this._socialService.metadataOf('event');
          if(meta && meta.eventTimeRange) {
            params.eventTimeRange = meta.eventTimeRange;
          } else {
            const now = new Date();
            params.eventTimeRange = [now.toISOString()];
          }
        }

        const query = new SocialPostSearchQuery(params);
        if(this.user) {
          req = this._sharedService.get('note/filter' + query.toQueryParams());
        } else {
          req = this._sharedService.getNoAuth('note/filter' + query.toQueryParams());
        }
      } 

      this.isLoading = true;
      req.subscribe((res: IGetSocialContentsResult) => {
        this.isLoading = false;
        if(res.statusCode === 200) {
          this.isMorePosts = (res.data.data.length < this.countPerPage) ? false : true;
          const posts = this._socialService.saveCache(
            res.data.data, 
            this.selectedTaxonomyType, 
            {
              userId: this.user ? this.user._id : null, 
              topic: this.selectedTopicId, 
              existMorePost: this.isMorePosts,
            }
          );
          resolve(posts);
        } else {
          this.isMorePosts = false;
          reject(res.message);
        }
      }, error => {
        this.isLoading = false;
        this.isMorePosts = false;
        console.log(error);
        reject('Something went wrong. Please try again later');
      });
    });
  }

  onPublishNewPost(data: ISocialPost) {
    data.author = this._profileService.user;

    this.newPosts.unshift(new SocialNote(data));
  }
}
