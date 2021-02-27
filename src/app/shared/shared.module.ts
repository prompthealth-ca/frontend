import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedService } from './services/shared.service';
import { PreviousRouteService } from './services/previousUrl.service';
import { SearchPipe } from '../shared/pipes/search-pipe';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';

import { SubscriptionPlanItemCardComponent } from './subscription-plan-item-card/subscription-plan-item-card.component';
import { SubscriptionPlanAddonCardComponent } from './subscription-plan-addon-card/subscription-plan-addon-card.component';
import { PriceRangeSwitcherComponent } from './price-range-switcher/price-range-switcher.component';
import { StarRateComponent } from './star-rate/star-rate.component';
import { PostDummyComponent } from './post-dummy/post-dummy.component';
import { FocusDirective } from './focus.directive';
import { CategoryService } from './services/category.service';
import { ClickOutsideDirective } from './click-outside.directive';
import { ScrollDetectorDirective } from './scroll-detector.directive';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { ImageRowComponent } from './image-row/image-row.component';
import { StepperComponent } from './stepper/stepper.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { FormInputAddressComponent } from './form-input-address/form-input-address.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    // FlashMessagesModule,
  ],
  providers: [
    PreviousRouteService,
    SharedService,
    CategoryService
  ],
  declarations: [
    UserSidebarComponent,
    SearchPipe,
    SubscriptionPlanItemCardComponent,
    SubscriptionPlanAddonCardComponent,
    PriceRangeSwitcherComponent,
    StarRateComponent,
    PostDummyComponent,
    FocusDirective,
    ClickOutsideDirective,
    ScrollDetectorDirective,
    SocialButtonsComponent,
    ImageRowComponent,
    StepperComponent,
    FormInputComponent,
    FormTextareaComponent,
    FormInputAddressComponent,
  ],
  exports: [
    UserSidebarComponent,
    SearchPipe,
    SubscriptionPlanItemCardComponent,
    SubscriptionPlanAddonCardComponent,
    PriceRangeSwitcherComponent,
    StarRateComponent,
    PostDummyComponent,
    FocusDirective,
    ClickOutsideDirective,
    ScrollDetectorDirective,
    SocialButtonsComponent,
    ImageRowComponent,
    StepperComponent,
    FormInputComponent,
    FormTextareaComponent,
    FormInputAddressComponent,
  ]
})
export class SharedModule { }
