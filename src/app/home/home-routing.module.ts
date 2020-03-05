import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component";
import { FAQComponent } from './faq/faq.component';
import { PricvacyPolicyComponent } from './pricvacy-policy/pricvacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { LoyalityProgramsComponent } from './loyality-programs/loyality-programs.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'faq',
    component: FAQComponent
  },
  {
    path: 'policy',
    component: PricvacyPolicyComponent
  },
  {
    path: 'term&conditions',
    component: TermsConditionsComponent
  },
  {
    path: 'loyalty',
    component: LoyalityProgramsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
