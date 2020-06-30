import { Component, OnInit } from "@angular/core";
import { BehaviorService } from '../../shared/services/behavior.service'
import { SharedService } from '../../shared/services/shared.service';


@Component({
  selector: "app-listingcompare",
  templateUrl: "./listingcompare.html",
  styleUrls: ["./listingcompare.scss"]
})

export class ListingcompareComponent implements OnInit {
 
  compareIds;
  languageQuestion;
  avalibilityQuestion;
  
  public data = [];

  constructor(
    private behaviorService: BehaviorService,
    private sharedService: SharedService,
    ) {}

  ngOnInit(): void {
    this.getProfileQuestion();
    // this.data = this.compareIds[i];
  }

  getProfileQuestion() {
    let path = `questionare/get-profile-questions`;
    this.sharedService.getNoAuth(path).subscribe((res: any) => {
       if (res.statusCode = 200) {

        this.compareIds = this.behaviorService.getCopmareIds().value;

        for (var i = 0; i < this.compareIds.length; ++i) {
          if (this.compareIds[i]) this.data.push(this.compareIds[i]);
        }
        
          res.data.forEach(element => {
          // if(element.question_type ==='service' && element.category_type==="Delivery") {
          //   this.serviceQuestion = element
          // }
          if(element.question_type ==='service' && element.category_type!=="Delivery") {
            this.languageQuestion = element
          }
          if(element.question_type ==='availability') {
            this.avalibilityQuestion = element
          }
        });
       } else {
        //  this.toastr.error(res.message);
  
       }
     }, err => {
       this.sharedService.loader('hide');
     });
  }


}
