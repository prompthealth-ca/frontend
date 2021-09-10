import { Booking, IBooking } from "./booking";
import { Profile } from "./profile";
import { SocialArticle } from "./social-article";
import { SocialEvent } from "./social-event";
import { SocialNote } from "./social-note";
import { ISocialPost, SocialPostBase } from "./social-post";
import { IUserDetail } from "./user-detail";

export interface IMyProfile {

  email: IUserDetail['email'];

  bookmarks: ISocialPost[];
  isBookmarksChanged: boolean;  
  setBookmarks(posts: ISocialPost[]): void;
  setBookmark(post: ISocialPost): void;
  removeBookmark(post: ISocialPost): void;
  markAsBookmarkChanged(): void;
  disposeBookmarks(): void;

  bookingsAsClient: Booking[];
  bookingsAsProvider: Booking[];
  setBookingsAsClient(bookings: IBooking[]): void;
  setBookingAsClient(booking: IBooking): void;

}

export class MyProfile extends Profile implements IMyProfile{

  get email() { return this.data.email || ''; }
  
  get bookmarks() { return this._bookmarks; }
  get isBookmarksChanged() { return this._isBookmarksChanged; }

  get bookingsAsClient() { return this._bookingsAsClient; }
  get bookingsAsProvider() { return this._bookingsAsPractitioner; }

  private _bookmarks: ISocialPost[] = null;
  private _isBookmarksChanged: boolean = false;
  private _bookingsAsClient: any = null;
  private _bookingsAsPractitioner: any = null;

  
  constructor(protected data: IUserDetail) {
    super(data);
  }

  setBookmarks(posts: ISocialPost[]) {
    if(!this._bookmarks) {
      this._bookmarks = [];
    }
    posts.forEach(post => {
      this.setBookmark(post);
    });
  }

  setBookmark(post: ISocialPost) {
    if(!this._bookmarks) {
      this._bookmarks = [];
    }

    this._bookmarks.push(
      post.contentType == 'NOTE' ? new SocialNote(post) :
      post.contentType == 'ARTICLE' ? new SocialArticle(post) :
      post.contentType == 'EVENT' ? new SocialEvent(post) :
      new SocialPostBase(post)
    )
  }

  removeBookmark(post: ISocialPost) {
    const idx = this._bookmarks.findIndex(item => item._id == post._id);
    this._bookmarks.splice(idx, 1);
  }

  markAsBookmarkChanged() {
    this._isBookmarksChanged = true;
  }

  disposeBookmarks() {
    this._bookmarks = null;
    this._isBookmarksChanged = false;
  }

  setBookingsAsClient(bookings: IBooking[]) {
    if(!this._bookingsAsClient) {
      this._bookingsAsClient = [];
    }
    bookings.forEach(b => {
      this.setBookingAsClient(b);
    });
  }

  setBookingAsClient(booking: IBooking) {
    if(!this._bookingsAsClient) {
      this._bookingsAsClient = [];
    }
    this._bookingsAsClient.push(new Booking(booking));
  }
}