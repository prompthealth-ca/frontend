import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { FAQComponent } from "./faq/faq.component";
import { PricvacyPolicyComponent } from "./pricvacy-policy/pricvacy-policy.component";
import { TermsConditionsComponent } from "./terms-conditions/terms-conditions.component";
import { LoyalityProgramsComponent } from "./loyality-programs/loyality-programs.component";
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ClientComponent } from './client/client.component';
import { ProffesionalComponent } from './proffesional/proffesional.component';
import { EnterpriceComponent } from './enterprice/enterprice.component';
import { PricingComponent } from './pricing/pricing.component';
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "faq",
    component: FAQComponent
  },
  {
    path: "policy",
    component: PricvacyPolicyComponent
  },
  {
    path: "term&conditions",
    component: TermsConditionsComponent
  },
  {
    path: "loyalty",
    component: LoyalityProgramsComponent
  },
  {
    path: "contact-us",
    component: ContactUsComponent
  },
  {
    path: "client",
    component: ClientComponent
  },
  {
    path: "professional",
    component: ProffesionalComponent
  },
  {
    path: "enterprise",
    component: EnterpriceComponent
  },
  {
    path: "pricing",
    component: EnterpriceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
