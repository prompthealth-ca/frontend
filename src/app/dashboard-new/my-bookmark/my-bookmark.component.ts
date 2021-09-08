import { Component, OnInit } from '@angular/core';
import { IResponseData } from 'src/app/models/response-data';
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

  public bookmarks = [];
  constructor(
    private _sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this._sharedService.get('social/get-bookmarks').subscribe((res: IResponseData) => {
      res.data.forEach((data: ISocialPost) => {
        this.bookmarks.push( 
          data.contentType == 'NOTE' ? new SocialNote(data) :
          data.contentType == 'ARTICLE' ? new SocialArticle(data) :
          data.contentType == 'EVENT' ? new SocialEvent(data) :
          new SocialPostBase(data)
        );
      });
    })
  }

}
