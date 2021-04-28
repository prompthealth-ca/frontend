import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UniversalService {

  public localStorage: LocalStorage;

  constructor(
    @Inject(PLATFORM_ID) private p: Object,
    private _meta: Meta,
    private _title: Title
  ) {
    if(this.isServer){
      this.localStorage = new LocalStorage();
    }else{
      this.localStorage = localStorage;
    }
  }

  get isServer(){ return isPlatformServer(this.p); }

  setMeta(path: string, meta: MetaData = null){
    if(meta){}
    else if(path == '/'){
      meta = {
        title: 'PromptHealth | Your health and wellness personal assistant',
        keyword: '',
        description: 'Test',
        image: 'https://prompthealth.ca/assets/img/logo.png',
        imageType: 'image/png',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'PromptHealth',
        pageType: 'website',
        robots: 'index, follow',
      }

      const baseUrl = 'https://prompthealth.ca';
      this._title.setTitle(meta.title);
      this._meta.updateTag({name: 'robots', content: meta.robots});
      this._meta.updateTag({name: 'title', content: meta.title});
      this._meta.updateTag({name: 'description', content: meta.description});
      this._meta.updateTag({name: 'og:url', content: baseUrl + path});
      this._meta.updateTag({name: 'og:type', content: meta.pageType});
      this._meta.updateTag({name: 'og:title', content: meta.title});
      this._meta.updateTag({name: 'og:description', content: meta.description});
      this._meta.updateTag({name: 'og:image', content: meta.image});
      this._meta.updateTag({name: 'og:image:width', content: meta.imageWidth.toString()});
      this._meta.updateTag({name: 'og:image:height', content: meta.imageWidth.toString()});
      this._meta.updateTag({name: 'og:image:alt', content: meta.imageAlt});
      this._meta.updateTag({name: 'twitter:title', content: meta.title});
      this._meta.updateTag({name: 'twitter:description', content: meta.description});
      this._meta.updateTag({name: 'twitter:image', content: meta.image});
   }
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
  title: string;
  keyword: string;
  description: string;
  image: string;
  imageType: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  pageType: 'article' | 'website' | 'blog';
  robots: string;
}

type TwitterCardType = 'summary' | 'summary_large_image';
