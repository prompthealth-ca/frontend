import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [SubscriptionPlanComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxSpinnerModule,
    FormsModule
  ]
})
export class DashboardModule { }
