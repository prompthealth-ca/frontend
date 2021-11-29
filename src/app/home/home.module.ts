import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { HomeRoutingModule } from "./home-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from "../home/home.component";
import { FAQComponent } from "./faq/faq.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { TermsConditionsComponent } from "./terms-conditions/terms-conditions.component";
import { LoyalityProgramsComponent } from "./loyality-programs/loyality-programs.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { ClientComponent } from "./client/client.component";
import { ProffesionalComponent } from "./proffesional/proffesional.component";
import { EnterpriceComponent } from "./enterprice/enterprice.component";
import { MapComponent } from "./map/map.component";
// import { ProfessionalRegisterComponent } from '../dashboard/professional-register/professional-register.component';

import { AgmCoreModule } from '@agm/core';
import { DoctorFilterComponent } from './doctor-filter/doctor-filter.component';
import { AffiliateComponent } from './affiliate/affiliate.component';
// import { BlogComponent } from './blog/blog.component';
// import { BlogDetailComponent } from './blog-detail/blog-detail.component';
// import { BlogCategoryComponent } from './blog-category/blog-category.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { subscriptionPlanProductComponent } from './subscription-plan-product/subscription-plan-product.component';
import { SharedModule } from '../shared/shared.module';
import { NgxSocialShareModule } from 'ngx-social-share';
import { GetFeaturedTabComponent } from './get-featured-tab/get-featured-tab.component';
// import { ProfilePartnerComponent } from './profile-partner/profile-partner.component';
import { ListingCompanyComponent } from './listing-company/listing-company.component';
import { CardProductComponent } from './_elements/card-product/card-product.component';
import { InvitationComponent } from './invitation/invitation.component';
import { LandingClubhouseComponent } from './landing-clubhouse/landing-clubhouse.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingAmbassadorComponent } from './landing-ambassador/landing-ambassador.component';
// import { DetailComponent } from "./detail/detail.component";
// import { ListingComponent } from "./listing/listing.component";
// import { FilterDropdownComponent } from "./filter-dropdown/filter-dropdown.component";
// import { FilterDropdownInputComponent } from "./filter-dropdown-input/filter-dropdown-input.component";
// import { FilterDropdownLocationComponent } from "./filter-dropdown-location/filter-dropdown-location.component";
// import { FilterDropdownSelectComponent } from "./filter-dropdown-select/filter-dropdown-select.component";
// import { FilterDropdownSliderComponent } from "./filter-dropdown-slider/filter-dropdown-slider.component";
import { ListingcompareComponent } from "./listingcompare/listingcompare.component";
import { PersonalMatchCategoryComponent } from "./personal-match-category/personal-match-category.component";
import { PersonalMatchHealthComponent } from "./personal-match-health/personal-match-health.component";
import { PersonalMatchAgeComponent } from "./personal-match-age/personal-match-age.component";
import { PersonalMatchComponent } from "./personal-match/personal-match.component";
import { PersonalMatchGenderComponent } from "./personal-match-gender/personal-match-gender.component";
import { SubscriptionPlanComponent } from "./subscription-plan/subscription-plan.component";
import { AuthModule } from "../auth/auth.module";
import { SitemapComponent } from './sitemap/sitemap.component';
import { CardTestimonialComponent } from './_elements/card-testimonial/card-testimonial.component';
import { ExpertFinderComponent } from './expert-finder/expert-finder.component';
import { NpnSliderModule } from "npn-slider";
import { AboutComponent } from './about/about.component';
import { AboutPractitionerComponent } from './about-practitioner/about-practitioner.component';
import { ScrollIndicatorComponent } from './_elements/scroll-indicator/scroll-indicator.component';
import { FaqItemComponent } from './_elements/faq-item/faq-item.component';
import { TablePlanFeatureComponent } from './_elements/table-plan-feature/table-plan-feature.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { TagProviderComponent } from './tag-provider/tag-provider.component';
import { AboutPartnerComponent } from './about-partner/about-partner.component';
import { ButtonsModule } from "../buttons/buttons.module";
import { PressReleaseComponent } from "./press-release/press-release.component";


@NgModule({
  declarations: [
    HomeComponent,
    FAQComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    LoyalityProgramsComponent,
    ContactUsComponent,
    ClientComponent,
    ProffesionalComponent,
    EnterpriceComponent,
    MapComponent,
    DoctorFilterComponent,
    AffiliateComponent,
    // BlogComponent,
    // BlogDetailComponent,
    // BlogCategoryComponent,
    SubscriptionComponent,
    UnsubscribeComponent,
    SubscriptionPlanComponent,
    subscriptionPlanProductComponent,
    GetFeaturedTabComponent,
    // ProfilePartnerComponent,
    ListingCompanyComponent,
    CardProductComponent,
    InvitationComponent,
    LandingClubhouseComponent,
    NotFoundComponent,
    LandingAmbassadorComponent,
    // DetailComponent,
    // ListingComponent,
    ListingcompareComponent,
    // FilterDropdownComponent,
    // FilterDropdownInputComponent,
    // FilterDropdownLocationComponent,
    // FilterDropdownSelectComponent,
    // FilterDropdownSliderComponent,
    PersonalMatchComponent,
    PersonalMatchGenderComponent,
    PersonalMatchAgeComponent,
    PersonalMatchHealthComponent,
    PersonalMatchCategoryComponent,
    SitemapComponent,
    CardTestimonialComponent,
    ExpertFinderComponent,
    AboutComponent,
    AboutPractitionerComponent,
    ScrollIndicatorComponent,
    FaqItemComponent,
    TablePlanFeatureComponent,
    AboutCompanyComponent,
    TagProviderComponent,
    AboutPartnerComponent,
    PressReleaseComponent,
    // ProfessionalRegisterComponent
  ],
  imports: [
    FormsModule,
    NgxSpinnerModule,
    AutocompleteLibModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDDfIO3nUUgAA_QCs2XTv2xvd8t9-0oYDs',
      libraries: ['places']
    }),
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    NgxSocialShareModule,
    SharedModule,
    ButtonsModule,
    AuthModule,
    ModalModule.forRoot(),
    NpnSliderModule,
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeModule { }
