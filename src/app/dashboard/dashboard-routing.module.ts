import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { SubscriptionPlanComponent } from "./subscription-plan/subscription-plan.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { SubscriptionProfessionalComponent } from "./subscription-professional/subscription-professional.component";
import { QuestionnaireComponent } from "./questionnaire/questionnaire.component";
import { UserQuestionaireComponent } from './user-questionaire/user-questionaire.component';
import { ListingComponent } from "./listing/listing.component";
import { ListingcompareComponent } from "./listingcompare/listingcompare.component";
import { DetailComponent } from "./detail/detail.component";
import { ProfileManagementModule } from "./profileManagement/profile-mangement.module";
import { ProfessionalRegisterComponent } from "./professional-register/professional-register.component";
import { ProfessionalHomeComponent } from './professional-home/professional-home.component';
import { 
  AuthGuardService as AuthGuard  } from '../auth/auth-gaurd.service';

const routes: Routes = [
  {
    path: "subscriptionplan",
    component: SubscriptionPlanComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "professional",
    component: ProfessionalHomeComponent
  },
  {
    path: "subscriptionplan-professional",
    component: SubscriptionProfessionalComponent
  },
  {
    path: "questionnaire/:type",
    component: QuestionnaireComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: "questionnaire/u",
    component: UserQuestionaireComponent,
    canActivate: [AuthGuard],
    redirectTo: 'questions/User'
  },
  {
    path: "questions/User",
    component: UserQuestionaireComponent,
    canActivate: [AuthGuard] 
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
    path: "detail/:id",
    component: DetailComponent
  },
  {
    path: 'profilemanagement',
    loadChildren: () => ProfileManagementModule,
    canActivate: [AuthGuard],
    // redirectTo: 'profilemanagement/my-profile'
  },
  {
    path: "professional-info",
    component: ProfessionalRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), GooglePlaceModule],
  exports: [RouterModule, ]
})
export class DashboardRoutingModule {}
