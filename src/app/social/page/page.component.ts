import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialPost } from 'src/app/models/social-post';
import { SharedService } from 'src/app/shared/services/shared.service';
import { SocialService } from '../social.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public post: SocialPost;

  private userId: string;
  private postId: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _socialService: SocialService,
    private _sharedService: SharedService,
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe((param: {userid: string, postid: string}) => {
      this.userId = param.userid;
      this.postId = param.postid;

      this.initPost();
    }); 
  }

  initPost() {
    return new Promise((resolve, reject) => {
      const post = this._socialService.postOf(this.postId);
      if(post) {
        this.post = post;
        resolve(true);
      } else {
        const path = `blog/get-by-slug/${this.postId}`;
        this._sharedService.getNoAuth(path).subscribe((res: any) => {
          if(res.statusCode === 200) {
            this._socialService.saveCacheSingle(res.data);
            this.post = this._socialService.postOf(this.postId);

            resolve(true);
          } else {
            console.log(res);
            reject(res.message);
          }
        }, err => {
          console.log(err);
          reject(err);
        });   

      }  
    });
  }

}