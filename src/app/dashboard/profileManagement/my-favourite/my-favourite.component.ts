import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../../shared/services/shared.service';
@Component({
  selector: 'app-my-favourite',
  templateUrl: './my-favourite.component.html',
  styleUrls: ['./my-favourite.component.scss']
})
export class MyFavouriteComponent implements OnInit {
  favListing = []
  constructor(
    private _sharedService: SharedService,
    private toastr: ToastrService,
  ) { }

  doctorsListing= [1,2,3];

  ngOnInit(): void {
    this.getFavList();
  }
  getFavList() {
    let path = `user/get-favorite`;
    this._sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.favListing = res.data[0].favouriteBy;
        console.log('this.favListing', this.favListing);
      } else {
        this._sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });

  }
  unlikeDoc (id){
    this._sharedService.loader('show');
    this._sharedService.removeFav(id,).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.toastr.success(res.message);
        this.getFavList();
      } else {
        this.toastr.error(res.message);
      }
    }, err => {
      this._sharedService.loader('hide');
    });
  }
}
