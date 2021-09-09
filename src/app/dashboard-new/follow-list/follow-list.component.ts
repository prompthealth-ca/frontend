import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ProfileManagementService } from 'src/app/dashboard/profileManagement/profile-management.service';
import { GetQuery } from 'src/app/models/get-query';
import { Profile } from 'src/app/models/profile';
import { IFollowResult, IGetFollowingsResult, IUnfollowResult } from 'src/app/models/response-data';
import { SharedService } from 'src/app/shared/services/shared.service';
import { UniversalService } from 'src/app/shared/services/universal.service';

@Component({
  selector: 'app-follow-list',
  templateUrl: './follow-list.component.html',
  styleUrls: ['./follow-list.component.scss']
})
export class FollowListComponent implements OnInit {

  get user() { return this._profileService.profile; }
  get followTypeLabel() { 
    let label = '';
    switch(this.followType) {
      case 'followed': label = 'Followers'; break;
      case 'following': label = 'Followings'; break;
    }            
    return label;
  }
  followerNameOf(data: Profile) { return data.name || '(No name)'; }
  
  public follows: Profile[] = null;
  public existsMore: boolean = true;
  public isLoading: boolean = false;
  public isUploading: boolean = false;
  public unfollowIds: string[] = [];

  private followType: FollowType;
  private countPerPage = 40;

  constructor(
    private _profileService: ProfileManagementService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _location: Location,
    private _sharedService: SharedService,
    private _toastr: ToastrService,
    private _uService: UniversalService,
  ) { }

  ngOnDestroy() {
    if(!this.user) {
      return;
    }
    
    if(this.followType == 'following'){
      this.removeUnfollows();
    }
  }

  ngOnInit(): void {
    this._uService.setMeta(this._router.url, {
      title: 'Follow list | PromptHealth Community'
    });

    this._route.data.subscribe((data: {type: FollowType}) => {
      this.followType = data.type;
      this.initFollowData();
      this.removeUnfollows();
    });
  }

  initFollowData() {
    const follows = this.followType == 'following' ? this.user.followings : this.user.followers;
    if(follows) {
      this.follows = follows;
      this.checkExistMore();
    } else {
      this.fetchFollowData()
    }
  }

  fetchFollowData() {
    const page = (this.follows && this.follows.length > 0) ? Math.ceil(this.follows.length / this.countPerPage) : 1;
    const query = new GetQuery({count: this.countPerPage, page: page});
    const path = this.followType == 'following' ? 'social/get-followings' : 'social/get-followeds';
    this.isLoading = true;
    this._sharedService.get(path + query.toQueryParamsString()).subscribe((res: IGetFollowingsResult) => {
      if(res.statusCode == 200) {
        if(this.followType == 'following') {
          this.user.setFollowings(res.data);
        } else {
          this.user.setFollowers(res.data);
        }

        this.follows = this.followType == 'following' ? this.user.followings : this.user.followers;
        this.checkExistMore();
      } else {
        this._toastr.error('Something went wrong. Please try again later');
      }
    }, error => {
      console.log(error);
      this._toastr.error('Something went wrong. Please try again later');
    }, () => {
      this.isLoading = false;
    });
  }

  checkExistMore() {
    const total = this.followType == 'following' ? this.user.numFollowing : this.user.numFollower;
    this.existsMore = !!(this.follows.length < total);
  }

  async onClickFollow(follow: Profile) {
    const isFollowing = this.isFollowing(follow._id);
    let request: any;

    request = isFollowing ? this.unfollow(follow._id) : this.follow(follow._id);

    this.isUploading = true;
    try {
      await request;
      if(isFollowing) {
        this.markAsUnfollow(follow._id);
        this.user.countdownFollowing();
      } else {
        this.markAsFollow(follow._id);
        this.user.countupFollowing();
      }
    } catch(error) {}
    this.isUploading = false;
  }

  isFollowing(userId: string) {
    return !this.unfollowIds.includes(userId);
  }
  markAsUnfollow(userId: string) {
    this.unfollowIds.push(userId);
  }

  markAsFollow(userId: string) {
    const index = this.unfollowIds.indexOf(userId);
    if(index >= 0) {
      this.unfollowIds.splice(index, 1);
    }
  }

  follow(userId: string) {
    return new Promise((resolve, reject) => {
      this._sharedService.post({id: userId}, 'social/follow').subscribe((res: IFollowResult) => {
        if(res.statusCode == 200) {
          resolve(true);
        } else {
          console.log(res.message);
          reject(false);
        }
      }, error => {
        console.log(error);
        reject(false);
      });
    });
  }
  unfollow(userId: string) {
    return new Promise((resolve, reject) => {
      this._sharedService.deleteContent('social/follow/' + userId).subscribe((res: IUnfollowResult) => {
        if(res.statusCode == 200) {
          resolve(true);
        } else {
          console.log(res.message);
          reject(false);
        }
      }, error => {
        console.log(error);
        reject(false);
      })
    })
  }

  removeUnfollows() {
    this.unfollowIds.forEach(id => {
      const follow = this.user.followings.find(item => item._id == id);
      if(follow) {
        this.user.removeFollowing(follow.decode());
      }
    });
    this.unfollowIds = [];
  }

}

type FollowType = 'following' | 'followed';
