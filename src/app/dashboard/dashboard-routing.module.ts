import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SubscriptionProfessionalComponent } from './subscription-professional/subscription-professional.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
