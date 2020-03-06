import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';


@NgModule({
  declarations: [SubscriptionPlanComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
