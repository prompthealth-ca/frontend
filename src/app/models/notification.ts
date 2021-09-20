import { environment } from "src/environments/environment";

export interface ISocialNotification {
  _id: string;
  title?: string;
  body?: string;
  userId?: string;
  isDeleted?: boolean;
  isRead?: boolean;
  image?: string;
  link?: string;
  type?: 'following' | 'new-event' | 'new-article' | 'password-change' | 'new-note' | 'new-promo' | 'new-review' | 'new-recommend' | 'tag-provider';
  iOSLink?: string;
  androidLink?: string;
  createdAt?: Date;

  markAsRead?(): void;
  markAsUnread?(): void;
}

export class SocialNotification implements ISocialNotification{
  get _id() {return this.data._id; }
  get title() { return this.data.title; }
  get body() { return this.data.body; }
  get userId() { return this.data.userId; }
  get isRead() { return this.data.isRead; }
  get image() { return this._image; }
  get link() { return this.data.link; }
  get createdAt() { return new Date(this.data.createdAt); }

  get linkToTarget() {
    let link = '';
    if(this.data.type == 'tag-provider') {
      link = '/dashboard/profilemanagement/add-professionals';
    } else {
      if(this.data.link) {
        switch(this.data.type) {
          case 'new-recommend':
          case 'new-review':
          case 'following': link = '/community/profile/' + this.data.link; break;
          case 'new-note':
          case 'new-article':
          case 'new-event': link = '/community/content/' + this.data.link; break;
        }      
      }
    }
    return link;
  }

  private _s3 = environment.config.AWS_S3;
  private _image: string;

  constructor(private data: ISocialNotification) {
    if(data.type == 'password-change' || data.type == 'tag-provider') {
      this._image = '/assets/img/logo-sm-white.png';
    } else {
      this._image = data.image ? (this._s3 + data.image) : null;
    }
  }

  markAsRead() {
    this.data.isRead = true;
  }

  markAsUnread() {
    this.data.isRead = false;
  }
}