import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
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
  typical_hours = []
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
    if(localStorage.getItem('typical_hours')) {
      this.typical_hours = localStorage.getItem('typical_hours').split(',');
    }
    console.log('typical_hours', this.typical_hours)
   this.listing();
  }

  listing() {
    this._sharedService.loader('show');
    let setParams;
    if (this.zipcode) {
      setParams = {
        ids: [],
        zipcode: this.zipcode,
      }
    } else if(this.typical_hours.length && this.typical_hours[0] !== '') {
      setParams = {
        ids: [],
        zipcode: this.zipcode,
        typical_hours: this.typical_hours,
      }
    }
    else {
      setParams = {
        ids: this.id,
      }
    }
    let path = 'user/filter';
    this._sharedService.postNoAuth(setParams, path).subscribe((res: any) => {
      if (res.statusCode = 200) {
       this.doctorsListing = res.data;

        for(let i =0; i<this.doctorsListing.length; i++) {
          if(this.doctorsListing[i].userData.ratingAvg) {
          this.doctorsListing[i].userData.ratingAvg = Math.floor(this.doctorsListing[i].userData.ratingAvg)
          }
        }
        this.toastr.success(res.message);
      } else {
        this.toastr.error(res.message);
      }
    }, err => {
      this._sharedService.loader('hide');
    });
  }
  compareFields(doc, evt) {
    if(evt.target.checked) {
      const index = this.compareList.findIndex((e) => e.userId === doc.userId);

      if (index === -1) {
          this.compareList.push(doc);
      } 
      this.behaviorService
    }
    else {
      this.removefromCopare( doc.userId)
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

  compareDoc() {
    this.behaviorService.changeCompareIds(this.compareList);
    this.router.navigate(['/dashboard/listingCompare']);
  }
  ngOnDestroy() {
    localStorage.removeItem('typical_hours');
  }
}
