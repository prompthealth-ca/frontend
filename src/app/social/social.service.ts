import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EmbedVideoService } from 'ngx-embed-video';
import { IBlogCategory } from '../models/blog-category';
import { ISocialPost, SocialPost } from '../models/social-post';
@Injectable({
  providedIn: 'root'
})
export class SocialService {

  private categoryCache: IBlogCategory[];
  private tagCache: IBlogCategory[];
  private postCache: PostCache;
  private _targetForEventModal: SocialPost;

  private countPerPage = 24;

  get categories(): any[] {
    return this.categoryCache;
  }

  get tags(): any[] {
    return this.tagCache;
  };

  constructor(
    private _embedService: EmbedVideoService,
    private _sanitizer: DomSanitizer,
  ) { 
    this.categoryCache = null;
    this.postCache = new PostCache();
  }

  taxonomyNameOf(taxonomyId: string) {
    let name: string = null;
    if (taxonomyId.match(/video|podcast/)) {
      name = taxonomyId;
    } else {
      name = this.categoryNameOf(taxonomyId);
      if(!name) {
        name = this.tagNameOf(taxonomyId);
      }
    }
    return name;
  }

  tagNameOf(tagId: string) {
    let name: string = null;
    if(this.tagCache) {
      for(let tag of this.tagCache) {
        if(tag._id == tagId) {
          name = tag.title;
          break;
        }
      }
    }
    return name;
  }

  categoryNameOf(catId: string) {
    let name: string = null;
    if (this.categoryCache) {
      for(let cat of this.categoryCache) {
        if(cat._id == catId) {
          name = cat.title;
          break;
        }
      }
    }
    return name;
  }

  get categoryEvent() {
    let cat: IBlogCategory = null;
    if(this.categoryCache) {
      for (let c of this.categoryCache) {
        if(c.slug.match(/event/)) {
          cat = c;
          break;
        }
      }
    }
    return cat;
  }

  getCategoryBySlug(slug: string) {
    let category: IBlogCategory = null;
    if(this.categoryCache) {
      for(let cat of this.categoryCache) {
        if(cat.slug == slug) {
          category = cat;
          break;
        }
      }
    }
    return category;
  }

  getTagBySlug(slug: string) {
    let tag: IBlogCategory = null;
    if(this.tagCache) {
      for(let t of this.tagCache) {
        if(t.slug == slug) {
          tag = t;
          break;
        }
      }
    }
    return tag;
  }

  postOf(id: string) {
    const data = this.postCache.dataMap;
    if(!data) { 
      return null; 
    } else {
      let result = null;
      for(let _id in data) {
        const d = data[_id];
        if(d._id == id) {
          result = d;
          break;
        }
      }
      return result;
    }
  }

  postsOf(
    taxonomy: SocialPostTaxonomyType = 'feed', 
    page: number = 1,
    from: number = 0, 
    count: number = this.countPerPage, 
  ): SocialPost[] {
    if(this.postCache.dataPerTaxonomy[taxonomy] && this.postCache.dataPerTaxonomy[taxonomy].data) {
      const posts = [];
      const data = this.postCache.dataPerTaxonomy[taxonomy].data;

      let _from = (page - 1) * count + from;
      let _to = _from + count;
      if(_to >= data.length) { _to = data.length; }

      for(let i = _from; i < _to; i++) {
        posts.push(data[i]);
      }

      return posts;
    } else {
      return null;
    }
  }

  get targetForEventModal() { return this._targetForEventModal; }
  setTargetForEventModal(data: SocialPost) { this._targetForEventModal = data; }
  disposeTargetForEventModal(){ this._targetForEventModal = null; }

  saveCache(data: ISocialPost[] = [], taxonomy: SocialPostTaxonomyType = 'feed'): SocialPost[] {
    if(!this.postCache.dataPerTaxonomy[taxonomy].data) {
      this.postCache.dataPerTaxonomy[taxonomy].data = [];
    }
    
    for(let d of data) {
      let idInMap = null;
      for(let id in this.postCache.dataMap) {
        if(d._id == id) {
          idInMap = id
          break;
        }
      }
      if(!idInMap) {
        this.saveCacheSingle(d);
        idInMap = d._id;
      }

      this.postCache.dataPerTaxonomy[taxonomy].data.push(this.postCache.dataMap[idInMap]);
    }

    return this.postCache.dataPerTaxonomy[taxonomy].data;
  }

  saveCacheSingle(data: ISocialPost) {
    if(!this.postCache.dataMap[data._id]) {
      const b = new SocialPost(data);
      b.videoLinks.forEach(v => { b.addEmbedVideo(this.embedVideo(v)); });
      if(b.videoLinks && b.videoLinks.length > 0) {
        b.setEmbedVideoAsThumbnail(this.embedVideoAsThumbnail(b.videoLinks[0]));
      }
      b.podcastLinks.forEach(v => { b.addEmbedPodcast(this.embedPodcast(v)); });
      b.setSanitizedDescription(this._sanitizer.bypassSecurityTrustHtml(b.description));

      this.postCache.dataMap[data._id] = b;
    }
  }

  saveCacheCategories(data: IBlogCategory[]) {
    this.categoryCache = data;
  }

  saveCacheTags(data: IBlogCategory[]) {
    this.tagCache = data;
  }

  createDummyArray(count: number) {
    const data = [];
    for(let i=0; i<count; i++) {
      data.push(null);
    }
    return data;
  }

  embedVideo(data: {title: string, url: string}) {
    const iframe = this._embedService.embed(data.url);
    if(iframe) {
      iframe.title = data.title;
    }
    return iframe;
  }
  embedVideoAsThumbnail(data: {title: string, url: string}) {
    const iframe = this._embedService.embed(data.url, {query: {control: 0, modestbranding: 1, showinfo: 0}, attr: {width: '100%', height: '100%'}})
    if(iframe) {
      iframe.title = data.title;
    }
    return iframe;
  }

  embedPodcast(data: {title: string, url: string}) {
    let url = data.url;
    if (!url.match(/embed/)) {
      url = url.replace(/spotify\.com/, 'spotify.com/embed');
    }
    let iframe = `<iframe src="${url}" width="100%" height="100%" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
    return this._sanitizer.bypassSecurityTrustHtml(iframe);
  }
}

interface IPostCache {
  dataMap: {
    [k: string]: SocialPost;
  },
  dataPerTaxonomy : {
    feed: IPostsPerTaxonomy;
    article: IPostsPerTaxonomy;
    event: IPostsPerTaxonomy;
    media: IPostsPerTaxonomy;
  }
}

class PostCache implements IPostCache {
  public dataMap: IPostCache['dataMap'];
  public dataPerTaxonomy: IPostCache['dataPerTaxonomy'];

  constructor() {
    this.dataMap = {};
    this.dataPerTaxonomy = {
      feed:     {filter: null, data: null,},
      article: {filter: null, data: null,},
      event:   {filter: null, data: null,},
      media:   {filter: null, data: null,},
    }
  }
}

interface IPostsPerTaxonomy {
  data: SocialPost[];
  filter?: {
    topic?: string;
  };
}

export type SocialPostTaxonomyType = 'feed' | 'article' | 'event' | 'media';