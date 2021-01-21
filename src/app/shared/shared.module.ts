import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
import { ClickOutsideDirective } from './click-outside.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // FlashMessagesModule,
  ],
  providers: [
    PreviousRouteService,
    SharedService
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
  ]
})
export class SharedModule { }
