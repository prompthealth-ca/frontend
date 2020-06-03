import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxStripeModule } from 'ngx-stripe';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { SubscriptionPlanComponent } from "./subscription-plan/subscription-plan.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { SubscriptionProfessionalComponent } from "./subscription-professional/subscription-professional.component";
import { QuestionnaireComponent } from "./questionnaire/questionnaire.component";
import { ListingComponent } from "./listing/listing.component";
import { ListingcompareComponent } from "./listingcompare/listingcompare.component";
import { DetailComponent } from "./detail/detail.component";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProfessionalHomeComponent } from './professional-home/professional-home.component';
import { ProfessionalRegisterComponent } from "./professional-register/professional-register.component";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from '../shared/shared.module';
import { EmbededURLPipe } from '../shared/pipes/embeded-url';

import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    SubscriptionPlanComponent,
    UserDetailsComponent,
    SubscriptionProfessionalComponent,
    QuestionnaireComponent,
    ListingComponent,
    ListingcompareComponent,
    DetailComponent,
    ProfessionalHomeComponent,
    ProfessionalRegisterComponent,
    EmbededURLPipe,
  ],
  imports: [
    AutocompleteLibModule,
    AgmCoreModule.forRoot(  {
      apiKey: 'AIzaSyCbRhC6h9Pp43-5t_Knyrd_ewAdLMIJtCg',
      libraries: ['places']
    }),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_zqD7pwcCCzFTnYdL8NhZeIl600rcJJW5dU'),
    NgMultiSelectDropDownModule.forRoot()]
})
export class DashboardModule {}
