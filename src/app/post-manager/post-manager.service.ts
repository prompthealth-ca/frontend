import { Injectable } from '@angular/core';
import { Blog, IBlog } from '../models/blog';
import { IBlogCategory } from '../models/blog-category';

@Injectable({
  providedIn: 'root'
})
export class PostManagerService {

  private postCache: MyPostCache;
  private categoryCache: IBlogCategory[] = null;
  private tagCache: IBlogCategory[] = null;
  private _countPerPage: number = 12;
  private _statuses: Blog['status'][] = ['HIDDEN', 'DRAFT', 'PENDING', 'APPROVED', 'REJECTED'];
  
  private _isEditorLocked: boolean = false;
 
  get countPerPage() { return this._countPerPage; }
  get categories() { return this.categoryCache; }
  get tags() { return this.tagCache; }
  get statuses() { return this._statuses; }
  get isEditorLocked() { return this._isEditorLocked; }

  categoryNameOf(catId: string) {
    let res: string = null;
    if(this.categories) {
      for(let cat of this.categories) {
        if(cat._id == catId) {
          res = cat.title;
          break;
        }
      }
    }
    return res;
  }

  statusNameOf(status: Blog['status'] | string) {
    let res: string = null;
    switch(status) {
      case ('HIDDEN'):    res = 'Deleted';      break;
      case ('DRAFT'):     res = 'Draft';        break;
      case ('PENDING'):   res = 'Under review'; break;
      case ('APPROVED'):  res = 'Published';    break;
      case ('REJECTED'):  res = 'Rejected';     break;
      default:            res = null;           break;
    }
    return res;
  }

  pageTotalOf(catId: string){
    let res = 0;
    const postsAll = this.postsAllOf(catId);
    if(postsAll) {
      const postsTotal = postsAll.length;
      res = Math.ceil(postsTotal / this.countPerPage);
    }
    return res;
  }

  postOf(id: string) {
    const res = this.postCache.dataMapById[id];
    return res || null;
  }

  postsPerPageOf(catId: string = null, page: number = 1, status: Blog['status'] | 'ALL' = null) {
    const from = this.countPerPage * (page - 1);
    const to = this.countPerPage * page;
    const postsAll = this.postsAllOf(catId, status);
    let res: Blog[] = null;
    if(postsAll) {
      res = postsAll.slice(from, to);      
    }
    return res;
  }

  postsAllOf(catId: string, status: Blog['status'] | 'ALL' = null) {
    let res: Blog[] = null;
    if(this.postCache.dataAll) {
      res = this.postCache.dataAll.filter(b => {
        if(catId) {
          return b.catId == catId;
        } else {
          return true;
        }
      });
      res = res.filter(b => {
        if(status == 'ALL') {
          return true;
        } else if(status) {
          return b.status == status;
        } else {
          return b.status != 'HIDDEN';
        }
      });
    }
    return res;
  }

  constructor() { 
    this.postCache = {
      dataMapById: {},
      dataAll: null,
    }
  }

  lockEditor() {
    this._isEditorLocked = true;
  }
  unlockEditor() {
    this._isEditorLocked = false;
  }


  saveCache(data: IBlog[]) {
    const list: Blog[] = []
    data.forEach(d => {
      this.saveCacheSingle(d);
      const b = this.postCache.dataMapById[d._id];
      list.push(b);
    });
    this.postCache.dataAll = list;
  }

  saveCacheSingle(data: IBlog) {
    if(!(data._id in this.postCache.dataMapById)) {
      this.postCache.dataMapById[data._id] = new Blog(data);
    }
  }

  saveCacheCategories(data: IBlogCategory[]) {
    this.categoryCache = data;
  }
  
  saveCacheTags(data: IBlogCategory[]) {
    this.tagCache = data;
  } 
}


interface MyPostCache {
  dataMapById: { [k: string]: Blog }  
  dataAll: Blog[];
}