import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { HomeRoutingModule } from "./home-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "../home/home.component";
import { FAQComponent } from "./faq/faq.component";
import { PricvacyPolicyComponent } from "./pricvacy-policy/pricvacy-policy.component";
import { TermsConditionsComponent } from "./terms-conditions/terms-conditions.component";
import { LoyalityProgramsComponent } from "./loyality-programs/loyality-programs.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { ClientComponent } from "./client/client.component";
import { ProffesionalComponent } from "./proffesional/proffesional.component";
import { EnterpriceComponent } from "./enterprice/enterprice.component";
import { MapComponent } from "./map/map.component";
// import { ProfessionalRegisterComponent } from '../dashboard/professional-register/professional-register.component';

import { AgmCoreModule } from '@agm/core';
import { DoctorFilterComponent } from './doctor-filter/doctor-filter.component';
@NgModule({
  declarations: [
    HomeComponent,
    FAQComponent,
    PricvacyPolicyComponent,
    TermsConditionsComponent,
    LoyalityProgramsComponent,
    ContactUsComponent,
    ClientComponent,
    ProffesionalComponent,
    EnterpriceComponent,
    MapComponent,
    DoctorFilterComponent,
    // ProfessionalRegisterComponent
  ],
  imports: [
    NgxSpinnerModule,
    AutocompleteLibModule,
    AgmCoreModule.forRoot(  {
      apiKey: 'AIzaSyCbRhC6h9Pp43-5t_Knyrd_ewAdLMIJtCg',
      libraries: ['places']
    }),
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeModule {}
