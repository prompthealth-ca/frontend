import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SubscriptionPlanComponent } from "./subscription-plan/subscription-plan.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { SubscriptionProfessionalComponent } from "./subscription-professional/subscription-professional.component";
import { QuestionnaireComponent } from "./questionnaire/questionnaire.component";
import { ListingComponent } from "./listing/listing.component";
import { ListingcompareComponent } from "./listingcompare/listingcompare.component";
import { DetailComponent } from "./detail/detail.component";

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
    path: "questionnaire",
    component: QuestionnaireComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
