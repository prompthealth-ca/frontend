import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-videos-blogs',
  templateUrl: './videos-blogs.component.html',
  styleUrls: ['./videos-blogs.component.scss']
})
export class VideosBlogsComponent implements OnInit {
  userId: '';
  videosForm: FormGroup;
  videosList;
  addMore = false;

  reg = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/

  constructor(
    private _fb: FormBuilder,
    private sharedService: SharedService,
    private toastrService: ToastrService
  ) {
   }
   get formArr() {
    return this.videosForm.get('data') as FormArray;
  }
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('user'))._id;
    this.videosForm = this._fb.group({
        data: this._fb.array([this.initItemRows()])
    });
    this.getProfileDetails();
    console.log('>>>>',this.formArr.controls[0]);
  }
  get url(): FormArray {
    return this.videosForm.get('url') as FormArray;
  } 
  getProfileDetails() {
    let path = `user/get-profile/${this.userId}`;
    this.sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.videosList = res.data[0].videos;

      } else {
        this.sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this.sharedService.checkAccessToken(err);
    });
  }
  initItemRows() {
    return this._fb.group({
      // list all your form controls here, which belongs to your form array
      title: ['', [Validators.required]],
      url: ['', [Validators.required, Validators.pattern(this.reg)]],
    });
  }
  addNewRow() {
    this.formArr.push(this.initItemRows());
  }
  
  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  saveVideos() {
    const path = `user/addVideo`;
    const payload = { user_id: this.userId, data: this.videosForm.value.data };
    this.sharedService.loader('show');
    this.sharedService.post(payload, path).subscribe((res: any) => {
      this.sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.toastrService.success(res.message);
        // this._router.navigate(['/home']);
      } else {
        this.toastrService.error(res.message);

      }
    }, err => {
      this.sharedService.loader('hide');
    });
    
  }
  deleteVideo(i) {
    console.log('DeleteVideo', i);

    this.sharedService.loader('show');
    const path = `user/removeVideo/${this.userId}/${i}`;
    console.log('DeleteVideo', path);
    this.sharedService.deleteContent(path).subscribe((res: any) => {
      this.sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.toastrService.success(res.message);
        this.videosList.forEach((ele, index) => {
          if(ele._id === i) this.videosList.splice(index, 1);
        });
        // this._router.navigate(['/home']);
      } else {
        this.toastrService.error(res.message);

      }
    }, err => {
      this.sharedService.loader('hide');
    });
    
  }
}

