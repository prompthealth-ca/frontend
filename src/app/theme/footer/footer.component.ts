import { Component, OnInit } from '@angular/core';
import { QuestionnaireAnswer, QuestionnaireService } from 'src/app/shared/services/questionnaire.service';
import { locations } from 'src/app/_helpers/location-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor(
    private _qService: QuestionnaireService,
  ) { }

  public typeOfProviderListHighlight: QuestionnaireAnswer[]; /** only contains 2 type of providers */
  public countCities: number = 0;
  public countTypeOfProviders: number = 0;
  
  ngOnInit() {
    this.countCities = Object.keys(locations).length;
    
    this._qService.getSitemap().then(data => { 
      this.typeOfProviderListHighlight =data.typeOfProvider.answers.slice(0,2);
      this.countTypeOfProviders = data.typeOfProvider.answers.length;
    });
  }
}
