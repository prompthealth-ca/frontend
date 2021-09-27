import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileManagementService } from 'src/app/dashboard/profileManagement/profile-management.service';
import { ISocialPost } from 'src/app/models/social-post';
import { UniversalService } from 'src/app/shared/services/universal.service';
import { fadeFastAnimation } from 'src/app/_helpers/animations';

@Component({
  selector: 'card-item-event',
  templateUrl: './card-item-event.component.html',
  styleUrls: ['./card-item-event.component.scss'],
  animations: [fadeFastAnimation,]
})
export class CardItemEventComponent implements OnInit {

  @Input() post: ISocialPost;
  @Input() shorten: boolean = true;

  @Output() onClickButton = new EventEmitter<string>();

  get eligibleToShowPostMenu() {
    return !!(this.post && this.user && this.post.authorId == this.user._id)
  }
  get user() {
    return this._profileService.user;
  }

  public isPopupPostMenuShown = false;
  public alreadySubscribed: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _location: Location,
    private _uService: UniversalService,
    private _profileService: ProfileManagementService,
  ) { }



  ngOnInit(): void {
    this._route.queryParams.subscribe(() => {
      this.alreadySubscribed = this._uService.localStorage.getItem('subscribed') === 'true' ? true : false;
    });
  }

  _onClickButton(e: Event, buttonName: string) {
    e.stopPropagation();
    e.preventDefault();
    this.isPopupPostMenuShown = true;
  }

  markCurrentPosition() {
    this._location.replaceState(this._location.path() + '#' + this.post._id);
  }

  onPopupPostMenuClosed() {
    this.isPopupPostMenuShown = false;
  }
  
}
