import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: "app-listing",
  templateUrl: "./listing.html",
  styleUrls: ["./listing.scss"]
})
export class ListingComponent implements OnInit {
  

  id: number;
  private sub: any;
  doctorsListing = [];
  compareList = [];
  constructor(
    private route: ActivatedRoute,
    private _sharedService:SharedService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.id;
   });
   this.listing();
  }

  listing() {
    this._sharedService.loader('show');
    const payload = {
      ids: [this.id],
      // ids: [],
    }
    let path = 'user/filter';
    this._sharedService.post(payload, path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        
       console.log('res', res);
       this.doctorsListing = res.data;
        this.toastr.success(res.message);
      } else {
        this.toastr.error(res.message);

      }
    }, err => {
      this._sharedService.loader('hide');
    });

  }
  compareFields(doc) {
    const index = this.compareList.findIndex((e) => e.userId === doc.userId);

    if (index === -1) {
        this.compareList.push(doc);
    } 
  }
  clearCompareList() {
    this.compareList = [];
  }
  removefromCopare(userId) {
    this.compareList.forEach((ele, index) => {
      if(ele.userId === userId) this.compareList.splice(index, 1);
    });
  }
}
