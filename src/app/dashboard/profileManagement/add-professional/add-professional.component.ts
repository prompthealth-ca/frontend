import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable, of} from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-add-professional',
  templateUrl: './add-professional.component.html',
  styleUrls: ['./add-professional.component.scss']
})
export class AddProfessionalComponent implements OnInit {
  addProductForm: FormGroup;
  editProductForm: FormGroup;
  editProductCheck = false;
  submitted = false;
  addMore = false;
  product =[];
  editProductId = '';
  productSearch: '';
  imagesList = [];
  p: number = 1;
  totalProducts = 1
  userId: '';
  constructor(
    private _sharedService: SharedService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('user'))._id;
    this.addProductForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
    this.editProductForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
    this.getProductList();
  }

  get f() { return this.addProductForm.controls; }
  get ef() { return this.editProductForm.controls; }
  getProductList() {
    let path = `product/get-all?userId=${this.userId}&count=10&page=1&frontend=0/`;
    this._sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.product = res.data.data;
        if(this.product.length > 0) this.addMore = false

      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }
  pageChanged(event) {
    console.log('pageChanged', event);
  }
  onFileSelect(event) {
    const formData: FormData = new FormData();
    let input = new FormData();


    input.append('imgLocation', 'products');
    if(event.target.files.length === 1) {

      input.append('images', event.target.files[0]);
      this._sharedService.loader('show');
      this._sharedService.imgUpload(input, 'common/imgUpload').subscribe((res: any) => {
        if (res.statusCode === 200) {
          this.imagesList.push(res.data);
  
          this._sharedService.loader('hide');
        } else {
          this.toastr.error(res.message);
        }
      }, err => {
        this._sharedService.loader('hide');
        this.toastr.error('There are some errors, please try again after some time !', 'Error');
      });

    }
    else {
      for (var i = 0; i < event.target.files.length; i++) {
        input.append('images', event.target.files[i]);
      }
      this._sharedService.loader('show');
      this._sharedService.imgUpload(input, 'common/imgMultipleUpload').subscribe((res: any) => {
        if (res.statusCode === 200) {
          this.imagesList = res.data;
          this._sharedService.loader('hide');
          this.toastr.success(res.message);
        } else {
          this.toastr.error(res.message);
        }
      }, err => {
      this._sharedService.loader('hide');
        this.toastr.error('There are some errors, please try again after some time !', 'Error');
      });
    }
  }
  removefromList(url) {
    this.imagesList.forEach((ele, index) => {
      if(ele === url) this.imagesList.splice(index, 1);
    });
  }
  save() {
    this.submitted = true;
    if (this.addProductForm.invalid) {
      return;
    }
    else {
      const formData = {
        ...this.addProductForm.value,
        'images': this.imagesList ? this.imagesList : [],
      }
    let data = {
      'userId':  this.userId,
      ...formData,
    };
    data['userId'] = this.userId;
    this._sharedService.loader('show');
    const path = `product/create`
    this._sharedService.post(data, path).subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.toastr.success(res.message);
        this.getProductList();
        this.addMore = !this.addMore;
        this.addProductForm.reset();
        this.submitted = false;

      }

      else {
        this._sharedService.showAlert(res.message, 'alert-danger');
      }
    }, (error) => {
      this._sharedService.loader('hide');
    });
    }
  }
  deleteProduct(i) {
    this._sharedService.loader('show');
    const path = `product/delete/${i}`;
    this._sharedService.deleteContent(path).subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.toastr.success(res.message);
        this.product.forEach((ele, index) => {
          if(ele._id === i) this.product.splice(index, 1);
        });
        // this._router.navigate(['/home']);
      } else {
        this.toastr.error(res.message);

      }
    }, err => {
      this._sharedService.loader('hide');
    });
  }
  editProduct(prod) {
    this.editProductCheck = true
    this.editProductForm.controls.title.setValue(prod.slug);
    this.editProductForm.controls.description.setValue(prod.description);
    this.editProductForm.controls.price.setValue(prod.price);
    this.imagesList =  prod.images;
    this.editProductId = prod._id;
    
  }
  updateProduct() {
    if (this.editProductForm.invalid) {
      return;
    }
    else {
      const formData = {
        ...this.editProductForm.value,
        'images': this.imagesList ? this.imagesList : [],
      }
    let body = {
      'userId':  this.userId,
      ...formData,
    };
    body['userId'] = this.userId;
    const path = `product/update/${this.editProductId}`
    this._sharedService.put(body, path).subscribe((res: any) => {
      this._sharedService.loader('hide');
      if (res.statusCode === 200) {
        this.toastr.success(res.message);
        this.getProductList();
        this.editProductCheck = !this.editProductCheck;
        this.addMore = !this.addMore;
        this.addProductForm.reset();
        this.submitted = false;

      }

      else {
        this._sharedService.showAlert(res.message, 'alert-danger');
      }
    }, (error) => {
      this._sharedService.loader('hide');
    });
  }
}
}
