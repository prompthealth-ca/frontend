import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";

import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../../shared/services/shared.service';
@Component({
  selector: 'app-my-amenities',
  templateUrl: './my-amenities.component.html',
  styleUrls: ['./my-amenities.component.scss']
})
export class MyAmenitiesComponent implements OnInit {
  addAmenitiesForm: FormGroup;
  userId = '';
  addMore = false;
  imagesList = [];
  defaultAmenities = []
  addAmenity = [];
  selectedAmenityId;
  uploadAmenity = {};
  imagePushed = ''
  savedAminities = [];
  aminityObject
  submitted = false;
  constructor(
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('user'))._id;
    this.getDefaultAmenities();
    this.getSavedAmenties();
  }
  getDefaultAmenities() {
    
    let path = `amenity/get-default-aminities?frontend=0`;
    this.sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.defaultAmenities = res.data;

      } else {
        this.sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this.sharedService.checkAccessToken(err);
    });

  }
  getSelectedAmenties(event, amenity) {
    console.log('event', event, amenity);
      if(event.target.checked) {
      this.selectedAmenityId = amenity._id;
      this.imagesList = [];
      this.uploadAmenity = {
        userId: this.userId,
        defaultamenityId: amenity._id,
        images: [],
      }
      this.saveAmenities();
    } else {
      this.deleteAmenity(amenity._id);
    }
  }
  imageUpload(id) {
    this.imagePushed = id;
  }
  onFileSelect(event) {
    const formData: FormData = new FormData();
    let input = new FormData();
    for (var i = 0; i < event.target.files.length; i++) {
      input.append('images', event.target.files[i]);
    }
    this.spinner.show();
    this.sharedService.imgUpload(input, 'common/imgMultipleUpload').subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.imagesList = res.data;
        this.uploadAmenity['images'] = res.data;
        this.saveAmenities();
        this.spinner.hide();
        this.toastr.success(res.message);
      }
      else {
        this.toastr.error(res.message);
      }
    }, err => {
      this.spinner.hide();
      this.toastr.error('There are some errors, please try again after some time !', 'Error');
    });

  }
  getSavedAmenties() {
    const path = `amenity/get-all/?userId=${this.userId}&count=10&page=1&frontend=0`;
    this.sharedService.get(path).subscribe((res: any) => {
      this.spinner.show();
      if (res.statusCode === 200) {
        this.savedAminities = res.data.data;
        console.log('this.savedAminities-------', res, this.savedAminities);
      }

      else {
        this.sharedService.showAlert(res.message, 'alert-danger');
        this.spinner.hide();
      }
    }, (error) => {
      this.spinner.hide();
    });
  }
  
  saveAmenities() {
    console.log('Data', this.uploadAmenity);
    this.spinner.show();
    const path = `amenity/create`;
    this.sharedService.post(this.uploadAmenity, path).subscribe((res: any) => {
      this.spinner.show();
      if (res.statusCode === 200) {
        this.toastr.success(res.message);
        console.log('this.defaultAmenities ===', res, this.defaultAmenities)
        this.spinner.hide();
      }

      else {
        this.sharedService.showAlert(res.message, 'alert-danger');
        this.spinner.hide();
      }
    }, (error) => {
      this.spinner.hide();
    });
  }
  deleteAmenity(id) {
    console.log('delete id', id);

    this.spinner.show();
    const path = `amenity/delete/${id}`;
    console.log('DeleteVideo', path);
    this.sharedService.deleteContent(path).subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.toastr.success(res.message);
        this.savedAminities.forEach((ele, index) => {
          if(ele._id === id) this.savedAminities.splice(index, 1);
        });
        // this._router.navigate(['/home']);
        this.spinner.hide();
      } else {
        this.toastr.error(res.message);

      }
    }, err => {
      this.spinner.hide();
    });
  }
  editAmenity(amenity) {
    console.log('editAmenity prod', amenity);
  }
}
