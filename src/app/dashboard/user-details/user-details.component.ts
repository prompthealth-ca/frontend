import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import { SharedService } from '../../shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  @ViewChild('myInput', { static: false })
  myInputVariable: any;
  public userDetails = {
    firstName: '',
    lastName: '',
    company: '',
    URL: '',
    can_address: '',
    mobile: '',
    logo_pic: '',
    image: '',
    short_video: ''
  };
  public _host = environment.config.BASE_URL;
  public response: any;
  private imageSrc: string = '';
  imageSrc1: any;

  constructor(private _router: Router,
    private _activateRouter: ActivatedRoute,
    private _flashMessagesService: FlashMessagesService,
    private changeDetectorRef: ChangeDetectorRef,
    private _sharedService: SharedService,
    private toastr: ToastrService, ) { }

  ngOnInit() {
  }
  save() {

    this._sharedService.loader('show');
    let data = JSON.parse(JSON.stringify(this.userDetails));


    this._sharedService.addUserDetail(data).subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.success) {
        this.response = res;
        this.toastr.success(res.data.message);
        this._router.navigate(['/home']);
      } else {
        this.toastr.error(res.error.message);

      }
    }, err => {
      this._sharedService.loader('hide');
    });


  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);

  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)
    this.uploadImage();
  }


  uploadImage() {
    let object = {
      data: this.imageSrc,
      type: 'users'
    }
    this._sharedService.loader('show');
    this._sharedService.uploadImage(object).subscribe((result: any) => {
      this._sharedService.loader('hide');
      if (result.success) {
        this.userDetails.image = result.data.fullPath;
        console.log('image', this.userDetails.image)
      }
      return true;
    }, err => {
      this._sharedService.loader('hide');
      return false;
    });
  }

  handleInputChange1(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded1.bind(this);
    reader.readAsDataURL(file);

  }
  _handleReaderLoaded1(e) {
    let reader = e.target;
    this.imageSrc1 = reader.result;
    console.log(this.imageSrc1)
    this.uploadImage1();
  }


  uploadImage1() {
    let object = {
      data: this.imageSrc1,
      type: 'logo'
    }
    this._sharedService.loader('show');
    this._sharedService.uploadImage1(object).subscribe((result: any) => {
      this._sharedService.loader('hide');
      if (result.success) {
        this.userDetails.logo_pic = result.data.fullPath;
        console.log('image', this.userDetails.logo_pic)
      }
      return true;
    }, err => {
      this._sharedService.loader('hide');
      return false;
    });
  }

  trim(key) {
    if (this.userDetails[key] && this.userDetails[key][0] == ' ') this.userDetails[key] = this.userDetails[key].trim();
  }
}
