import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SubscriptionProfessionalComponent } from './subscription-professional/subscription-professional.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ListingComponent } from './listing/listing.component';
import { ListingcompareComponent } from './listingcompare/listingcompare.component';
import { DetailComponent } from './detail/detail.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProfessionalHomeComponent } from './professional-home/professional-home.component';
import { ProfessionalRegisterComponent } from './professional-register/professional-register.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from '../shared/shared.module';
import { EmbededURLPipe } from '../shared/pipes/embeded-url';
import { NgxPaginationModule } from 'ngx-pagination';

import { AgmCoreModule } from '@agm/core';
import { AddOnCardComponent } from './add-on-card/add-on-card.component';
import { environment } from 'src/environments/environment';
import { DetailTabbarIntersectionObserverDirective } from './detail-tabbar-intersection-observer.directive';

import { UserQuestionaireComponent } from './user-questionaire/user-questionaire.component';
import { QuestionnaireItemSelectComponent } from './questionnaire-item-select/questionnaire-item-select.component';
import { QuestionnaireItemCheckboxComponent } from './questionnaire-item-checkbox/questionnaire-item-checkbox.component';

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
    AddOnCardComponent,
    DetailTabbarIntersectionObserverDirective,
    UserQuestionaireComponent,
    QuestionnaireItemSelectComponent,
    QuestionnaireItemCheckboxComponent,
  ],
  imports: [
    AutocompleteLibModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbRhC6h9Pp43-5t_Knyrd_ewAdLMIJtCg',
      libraries: ['places']
    }),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot(environment.config.stripeKey),
    NgMultiSelectDropDownModule.forRoot(),
    UiSwitchModule,
  ]
})
export class DashboardModule { }
