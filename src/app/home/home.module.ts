import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
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
import { PricingComponent } from './pricing/pricing.component';
// import { ProfessionalRegisterComponent } from '../dashboard/professional-register/professional-register.component';

import { AgmCoreModule } from '@agm/core';
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
    PricingComponent,
    // ProfessionalRegisterComponent
  ],
  imports: [
    NgxSpinnerModule,
    AgmCoreModule.forRoot(  {
      apiKey: 'AIzaSyB2RgWanHLf385ziPuRTY2d19hZAWVHbYs',
      libraries: ['places']
    }),
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule {}
