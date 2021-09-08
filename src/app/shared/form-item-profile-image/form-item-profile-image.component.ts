import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ProfileManagementService } from 'src/app/dashboard/profileManagement/profile-management.service';
import { Profile } from 'src/app/models/profile';
import { IGetProfileResult } from 'src/app/models/response-data';
import { environment } from 'src/environments/environment';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'form-item-profile-image',
  templateUrl: './form-item-profile-image.component.html',
  styleUrls: ['./form-item-profile-image.component.scss']
})
export class FormItemProfileImageComponent implements OnInit {

  @Input() data: string;
  @Output() onChange = new EventEmitter<string>();
  @Output() startUpload = new EventEmitter<void>();
  @Output() doneUpload = new EventEmitter<void>();

  get user(): Profile { return this._profileService.profile; }

  public preview: string|ArrayBuffer;
  private image: Blob | File;
  private imagename: string;

  public isUploading: boolean = false;

  private _s3 = environment.config.AWS_S3;

  @ViewChild('input') private input: ElementRef;

  constructor(
    private _sharedService: SharedService,
    private _profileService: ProfileManagementService,
  ) { }

  ngOnInit(): void {
    if(this.data) {
      this.preview = this._s3 + this.data;
    }
  }

  onClickProfileImage() {
    const el = this.input ? this.input.nativeElement : null;
    if(el) {
      el.click();
    }
  }

  async onSelectProfileImage(e: Event) {
    const files = (e.target as HTMLInputElement).files;
    if(files && files.length > 0) {
      try {
        const result = await this._sharedService.shrinkImageByFixedWidth(files[0], 800);
        const reader = new FileReader();
        reader.readAsDataURL(result.file);
        reader.onloadend = () => {
          this.preview = reader.result;
          this.image = result.file;
          this.imagename = result.filename;
          
          this.uploadProfileImage();
        }
      } catch (error) {
        console.log(error);
        return;
      }
    }
    // this._profileService.update({profileImage: imageURL});
  }

  uploadProfileImage() {
    return new Promise((resolve, reject) => {
      this.isUploading = true;
      this.startUpload.emit();
  
      const formData = new FormData();
      formData.append('_id', this.user._id);
      formData.append('profileImage', this.image, this.imagename);
  
      this._sharedService.imgUpload(formData, 'user/imgUpload').subscribe((res: IGetProfileResult) => {
        this.isUploading = false;
        this.doneUpload.emit();
        if(res.statusCode == 200) {
          this.onChange.emit(res.data.profileImage);
          resolve(res.data.profileImage);
        } else {
          console.log(res.message);
          this.onChange.emit(null);
          reject();
        }
      }, error => {
        this.doneUpload.emit();
        this.onChange.emit(null);
        console.log(error);
        reject();
      });
    });
  }

  removeProfileImage(e: Event) {
    e.stopPropagation();
    e.preventDefault();

    this.preview = null;
    this.image = null;
    this.imagename = null;

    this.onChange.emit(null);
  }
}
