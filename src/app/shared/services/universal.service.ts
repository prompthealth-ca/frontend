import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UniversalService {

  public localStorage: LocalStorage;
  public sessionStorage: LocalStorage;

  constructor(
    @Inject(PLATFORM_ID) private p: Object,
    private _meta: Meta,
    private _title: Title
  ) {
    if(this.isServer){
      this.localStorage = new LocalStorage();
      this.sessionStorage = new LocalStorage();
    }else{
      this.localStorage = localStorage;
      this.sessionStorage = sessionStorage;
    }
  }

  get isServer(){ return isPlatformServer(this.p); }

  setMeta(path: string, meta: MetaData = {}){
    console.log('path: ', path);
    if(path.match(/\/dashboard\/listing/)){
      meta = {
        title: 'Find practitioners | PromptHealth',
        keyword: '',
        description: 'Find best practitioners in your area or virtual services',
      }
    }
    else if(path.match( /\/dashboard\/detail/)) {
      meta.pageType = 'article';
    }
    else if(path.match(/\/products/)) {

    }
    else if(path == '/blogs') {
      meta = {
        title: 'Blogs | PromptHealth',
        keyword: '',
        description: 'blogs from PromptHealth',
      }
    }
    else if(path.match(/\/blog-category/)) {
    }
    else if(path.match(/\/blog-detail/)) {
      meta.pageType = 'article';
    }
    else if(path == '/'){
      meta = {
        title: 'PromptHealth | Your health and wellness personal assistant',
        keyword: '',
        description: 'Your health and wellness personal assistant',
      }
    }

    if(!meta.image) { 
      meta.image = 'https://prompthealth.ca/assets/img/logo.png'; 
      meta.imageType = 'image/png';
      meta.imageWidth = 400;
      meta.imageHeight = 300;
      meta.imageAlt = 'PromptHealth';
    }
    if(!meta.pageType) { meta.pageType = 'website'; }
    if(!meta.robots) { meta.robots = 'index, follow'; }

    console.log(meta)
    const baseUrl = 'https://prompthealth.ca';
    this._title.setTitle(meta.title);

    /* Twitter have to be first otherwise it's not updated. (I don't know why) */
    this._meta.updateTag({name: 'twitter:title', content: meta.title});
    this._meta.updateTag({name: 'twitter:description', content: meta.description});
    this._meta.updateTag({name: 'twitter:image', content: meta.image});
    this._meta.updateTag({name: 'robots', content: meta.robots});
    this._meta.updateTag({name: 'title', content: meta.title});
    this._meta.updateTag({name: 'description', content: meta.description});
    this._meta.updateTag({name: 'og:url', content: baseUrl + path});
    this._meta.updateTag({name: 'og:type', content: meta.pageType});
    this._meta.updateTag({name: 'og:title', content: meta.title});
    this._meta.updateTag({name: 'og:description', content: meta.description});
    this._meta.updateTag({name: 'og:image', content: meta.image});
    // this._meta.updateTag({name: 'og:image:width', content: meta.imageWidth.toString()});
    // this._meta.updateTag({name: 'og:image:height', content: meta.imageWidth.toString()});
    this._meta.updateTag({name: 'og:image:alt', content: meta.imageAlt});
  }  
}

class LocalStorage implements Storage {
  [name: string]: any;
  readonly length: number;
  clear(): void {}
  getItem(key: string): string | null {return undefined;}
  key(index: number): string | null {return undefined;}
  removeItem(key: string): void {}
  setItem(key: string, value: string): void {}
}


interface MetaData {
  title?: string;
  keyword?: string;
  description?: string;
  image?: string;
  imageType?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  pageType?: 'article' | 'website' | 'blog';
  robots?: string;
}

type TwitterCardType = 'summary' | 'summary_large_image';
