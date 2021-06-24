import { Component, OnInit } from '@angular/core';
import Quill from 'quill';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { validators } from 'src/app/_helpers/form-settings';
import { SharedService } from 'src/app/shared/services/shared.service';
import { IBlogCategory } from 'src/app/models/blog-category';
import { IBlog } from 'src/app/models/blog';
import { ActivatedRoute } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {

  get f() {return this.form.controls; }

  categoryOf(id: string) {
    let cat: IBlogCategory = null;
    if (this.categories) {
      for (let c of this.categories) {
        if (c._id == id) {
          cat = c;
          break;
        }
      }
    }
    return cat;
  }

  tagOf(id: string) {
    let tag: IBlogCategory = null;
    if (this.tags) {
      for (let t of this.tags) {
        if(t._id == id) {
          tag = t;
          break;
        }
      }
    }
    return tag;
  }

  public categories: IBlogCategory[];
  public tags: IBlogCategory[];
  private post: IBlog;

  private form: FormGroup;
  public selectedCategories: IBlogCategory[] = [];
  public selectedTags: IBlogCategory[] = []

  public isSubmitted: boolean = false;
  public isUploading: boolean = false;

  public dropdownSettingCategories: IDropdownSettings = {
    singleSelection: true,
    idField: '_id',
    textField: 'title',
    itemsShowLimit: 6,
    allowSearchFilter: true,
  }

  public dropdownSettingTags: IDropdownSettings = {
    singleSelection: false,
    idField: '_id',
    textField: 'title',
    selectAllText: 'Select All',
    unSelectAllText: 'Deselect All',
    itemsShowLimit: 6,
    allowSearchFilter: true,
  }

  constructor(
    private _sharedService: SharedService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      _id: new FormControl(null),
      status: new FormControl(false),
      title: new FormControl(null),
      description: new FormControl(null),
      categoryId: new FormControl(null),
      tags: new FormArray([]),
      videoLinks: new FormArray([]),
      podcastLinks: new FormArray([]),
      readLength: new FormControl(0),
      author: new FormControl('test'),
      headliner: new FormControl(false),
    });

    this._route.params.subscribe((params: {id: string}) => {
      const promiseAll = [
        this.initCategories(),
        this.initTags(),
      ];
      if(params.id) {
        promiseAll.push(this.initPost(params.id))
      }

      Promise.all(promiseAll).then(() => {
        this.initForm();
      }).catch((err) => {
        console.log(err);
      }).finally(() => {

      });
    });
  }

  initPost(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {

    });
  }

  initCategories(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const path = `category/get-categories`;
      this._sharedService.getNoAuth(path).subscribe((res: any) => {
        if (res.statusCode === 200) {
          this.categories = res.data;        
          resolve(true);
        }else {
          console.log(res);
          reject(res.message);
        }
      }, (error) => {
        console.log(error);
        reject(error);
      });
    });
  }

  initTags() {
    return new Promise((resolve, reject) => {
      const path = `tag/get-all`;
      this._sharedService.getNoAuth(path).subscribe((res: any) => {
        if (res.statusCode === 200) {
          this.tags = res.data.data;
          resolve(true);
        }else {
          console.log(res);
          reject(res.message);
        }
      }, (error) => {
        console.log(error);
        reject(error);
      });
    });
  }

  initForm() {
    if(this.post) {
      this.f.title.setValue(this.post.title);
      this.f.description.setValue(this.post.description);
      this.f.status.setValue(this.post.status || false);

      if(this.post.categoryId) {
        this.selectedCategories = [this.post.categoryId];
      }

      if(this.post.tags) {
        this.selectedTags = this.post.tags;
      }
    } else {
      let catDefault: IBlogCategory = null;
      for(let c of this.categories) {
        if(c.slug.match(/knowledge|article/)) {
          catDefault = c;
          break;
        }
      }
      this.selectedCategories = [catDefault];
    }
  }

  changedEditor(e: EditorChangeContent | EditorChangeSelection) {
    if('html' in e) {
      this.f.description.setValue(e.html);
    }
  }

  onSubmit(publish: boolean = false) {
    this.isSubmitted = true;

    this.f.categoryId.setValue( this.selectedCategories.length > 0 ? this.selectedCategories[0]._id : null );

    const fTags = this.f.tags as FormArray;
    fTags.clear();
    this.selectedTags.forEach(t => {
      fTags.push(new FormControl(t._id));
    });

    if(publish) {
      this.resetValidators(this.f.status.value);
    } else {
      this.resetValidators(true);
    }

    if(this.form.invalid) {
      return;
    }

    const data = this.form.value;
    let url: string = '';
    if(!data._id) {
      delete data._id;
      url = 'blog/create';
    } else {
      url = 'blog/edit';
    }
    console.log(data);

    this.isUploading = true;
    this._sharedService.post(data, url).subscribe((res: any) => {
      this.isSubmitted = false;
      this.isUploading = false;
      console.log(res);
    }, (err) => {
      this.isUploading = false;
      console.log(err);
    });
  }

  resetValidators(published: boolean = false) {

    this.f.title.clearValidators();
    this.f.description.clearValidators();
    this.f.categoryId.clearValidators();
    this.f.tags.clearValidators();

    this.f.title.setValidators( published ? validators.publishPostTitle : validators.savePostTitle);
    this.f.description.setValidators( published ? validators.publishPostDescription : validators.savePostDescription);
    this.f.categoryId.setValidators( published ? validators.publishPostCategory : validators.savePostCategory);
    this.f.tags.setValidators( published ? validators.publishPostTags : validators.savePostTags);
  }
}
