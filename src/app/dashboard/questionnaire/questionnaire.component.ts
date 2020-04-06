import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  public questionnaire = {

    treatments: '',
   
  };

  public type = "SP";
  public data = [];
  public itemsTotal = 0;
  treatment: any;
  treatmentData = []; 
  specialtiesData = []; 
  age_rangeData = []; 
  customerData = []; 
  discountData = []; 
  languagesData = [];
  priceData = [];
  constructor
    (
      private _router: Router,
      private _route: ActivatedRoute,
      private _sharedService: SharedService, ) { }

  ngOnInit(): void {
    this.getSelectedSkill();
  }

  getSelectedSkill() {
  
    // this._sharedService.loader('show');
    this._sharedService.getlistViaFilter(this.type).subscribe((res: any) => {
      
      // this._sharedService.loader('hide');
      if (res.success) {
        this.data = res.questionare;

        for (let i in this.data) {
          this.treatmentData.push(this.data[i].treatment); 
          this.specialtiesData.push(this.data[i].specialties); 
          this.age_rangeData.push(this.data[i].age_range);
          this.customerData.push(this.data[i].customer);  
          this.discountData.push(this.data[i].discount);  
          this.languagesData.push(this.data[i].languages);  
          this.priceData.push(this.data[i].price);  
          console.log('ttttttttttttttttt', i);

        }

        console.log('this.treatmentData', this.treatmentData);

        
        // this.treatment = res.questionare[0].treatment;
        console.log('sandeep console.', this.data)
        
      } else {
        this._sharedService.checkAccessToken(res.error);
      }
    }, err => {

      this._sharedService.checkAccessToken(err);
    });
  }

  checkCheckBoxvalue(event){
    console.log('sandeep',event.checked)
  }


}
