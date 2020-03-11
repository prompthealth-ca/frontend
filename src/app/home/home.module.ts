import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { FAQComponent } from './faq/faq.component';
import { PricvacyPolicyComponent } from './pricvacy-policy/pricvacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { LoyalityProgramsComponent } from './loyality-programs/loyality-programs.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [HomeComponent, FAQComponent, PricvacyPolicyComponent, TermsConditionsComponent, LoyalityProgramsComponent],
  imports: [
    NgxSpinnerModule,
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],

})
export class HomeModule { }
