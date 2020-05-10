import { Component, OnInit } from "@angular/core";

import { BehaviorService } from '../../shared/services/behavior.service'
@Component({
  selector: "app-listingcompare",
  templateUrl: "./listingcompare.html",
  styleUrls: ["./listingcompare.scss"]
})
export class ListingcompareComponent implements OnInit {
 
  compareIds;
  constructor(
    private behaviorService: BehaviorService,
    ) {}
  ngOnInit(): void {
    this.compareIds = this.behaviorService.getCopmareIds().value;
    console.log('compareIds', this.compareIds )
  }
}
