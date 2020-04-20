import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { SubscriptionPlanComponent } from "./subscription-plan/subscription-plan.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { SubscriptionProfessionalComponent } from "./subscription-professional/subscription-professional.component";
import { QuestionnaireComponent } from "./questionnaire/questionnaire.component";
import { ListingComponent } from "./listing/listing.component";
import { ListingcompareComponent } from "./listingcompare/listingcompare.component";
import { DetailComponent } from "./detail/detail.component";
import { ProfileManagementComponent } from "./profileManagement/profileManagement.component";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProfessionalHomeComponent } from './professional-home/professional-home.component';

@NgModule({
  declarations: [
    SubscriptionPlanComponent,
    UserDetailsComponent,
    SubscriptionProfessionalComponent,
    QuestionnaireComponent,
    ListingComponent,
    ListingcompareComponent,
    DetailComponent,
    ProfileManagementComponent,
    ProfessionalHomeComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, NgxSpinnerModule, FormsModule, NgMultiSelectDropDownModule.forRoot()]
})
export class DashboardModule {}
