import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';

const routes: Routes = [
  {
    path: "subscriptionplan",
    component: SubscriptionPlanComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
