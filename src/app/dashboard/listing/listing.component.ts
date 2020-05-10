import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import * as Rx from "rxjs";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
import { BehaviorService } from '../../shared/services/behavior.service';
@Component({
  selector: "app-listing",
  templateUrl: "./listing.html",
  styleUrls: ["./listing.scss"]
})
export class ListingComponent implements OnInit {
  id;
  zipcode;
  private sub: any;
  doctorsListing = [];
  compareList = [];
  constructor(
    private behaviorService: BehaviorService,
    private route: ActivatedRoute,
    private router: Router,
    private _sharedService:SharedService,
    private toastr: ToastrService,
  ) {
    this.zipcode = this.route.snapshot.queryParams['zipcode'];
    this.id = this.route.snapshot.queryParams['id'] ? [this.route.snapshot.queryParams['id']] : [] ;
  }

  ngOnInit(): void {
   this.listing();
  }

  listing() {
    this._sharedService.loader('show');
    let payload;
    if (this.zipcode) {
      payload = {
        ids: [],
        zipcode: this.zipcode
      }
    } else {

      payload = {
        ids: this.id,
      }
    }
    let path = 'user/filter';
    this._sharedService.post(payload, path).subscribe((res: any) => {
      if (res.statusCode = 200) {
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
    this.behaviorService
  }
  clearCompareList() {
    this.compareList = [];
  }
  removefromCopare(userId) {
    this.compareList.forEach((ele, index) => {
      if(ele.userId === userId) this.compareList.splice(index, 1);
    });
  }

  compareDoc() {
    this.behaviorService.changeCompareIds(this.compareList);
    this.router.navigate(['/dashboard/listingCompare']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
