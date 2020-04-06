import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SubscriptionPlanComponent } from "./subscription-plan/subscription-plan.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { SubscriptionProfessionalComponent } from "./subscription-professional/subscription-professional.component";
import { QuestionnaireComponent } from "./questionnaire/questionnaire.component";
import { ListingComponent } from "./listing/listing.component";
import { ListingcompareComponent } from "./listingcompare/listingcompare.component";
import { DetailComponent } from "./detail/detail.component";
import { ProfileManagementComponent } from "./profileManagement/profileManagement.component";
import { QuestionnaireUserComponent } from './questionnaire-user/questionnaire-user.component';

const routes: Routes = [
  {
    path: "subscriptionplan",
    component: SubscriptionPlanComponent
  },

  {
    path: "userdetails",
    component: UserDetailsComponent
  },

  {
    path: "subscriptionplan-professional",
    component: SubscriptionProfessionalComponent
  },
  {
    path: "questionnaire-sp",
    component: QuestionnaireComponent
  },
  {
    path: "questionnaire-u",
    component: QuestionnaireUserComponent
  },
  {
    path: "listing",
    component: ListingComponent
  },
  {
    path: "listingCompare",
    component: ListingcompareComponent
  },
  {
    path: "detail",
    component: DetailComponent
  },
  {
    path: "profilemanagement",
    component: ProfileManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
