import { Component, OnInit } from '@angular/core';
import { ProfileManagementService } from 'src/app/dashboard/profileManagement/profile-management.service';
import { GetQuery } from 'src/app/models/get-query';
import { Profile } from 'src/app/models/profile';
import { IGetSocialContentsByAuthorResult } from 'src/app/models/response-data';
import { SocialArticle } from 'src/app/models/social-article';
import { SocialEvent } from 'src/app/models/social-event';
import { SocialNote } from 'src/app/models/social-note';
import { ISocialPost, SocialPostBase } from 'src/app/models/social-post';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-my-bookmark',
  templateUrl: './my-bookmark.component.html',
  styleUrls: ['./my-bookmark.component.scss']
})
export class MyBookmarkComponent implements OnInit {

  get user() { return this._profileService.profile; }
  get bookmarks(): ISocialPost[] { return this.user.bookmarks; }
  get currentPage(): number { return this.bookmarks ? Math.ceil(this.bookmarks.length / this.countPerPage) + 1 : 1; }

  public existsMore = true;
  public isLoading = false;

  private countPerPage = 20;

  constructor(
    private _sharedService: SharedService,
    private _profileService: ProfileManagementService,
  ) { }

  ngOnInit(): void {
    if(this.user.isBookmarksChanged) {
      this.user.disposeBookmarks();
    }

    if(!this.bookmarks) {
      this.fetchBookmarks();
    } else {
      this.existsMore = this.currentPage * this.countPerPage == this.bookmarks.length;
    }
  }

  fetchBookmarks() {
    const query = new GetQuery({ page: this.currentPage, count: this.countPerPage });

    this.isLoading = true;
    this._sharedService.get('social/get-bookmarks' + query.toQueryParamsString()).subscribe((res: IGetSocialContentsByAuthorResult) => {
      this.isLoading = false;
      if(res.statusCode == 200) {
        this.user.setBookmarks(res.data);
        this.existsMore = !!(res.data.length == this.countPerPage)
      } else {
        console.log(res.message);
        this.user.setBookmarks([]);
        this.existsMore = false;
      }
    }, error => {
      console.log(error);
      this.user.setBookmarks([]);
      this.isLoading = false;
      this.existsMore = false;
    });
  }
}
