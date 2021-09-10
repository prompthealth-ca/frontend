import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from './base/base.component';
import { GuardIfNotLoggedInGuard } from '../auth/guard-if-not-logged-in.guard';
import { SharedModule } from '../shared/shared.module';
import { MyFollowComponent } from './my-follow/my-follow.component';
import { GuardIfNotEligbleToCreatePostGuard } from '../social/guard-if-not-eligble-to-create-post.guard';
import { FollowListComponent } from './follow-list/follow-list.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SocialItemsModule } from '../social-items/social-items.module';
import { CategoryService } from '../shared/services/category.service';
import { NgxStripeModule, StripeService } from 'ngx-stripe';
import { environment } from 'src/environments/environment';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AgmCoreModule } from '@agm/core';
import { MyPasswordComponent } from './my-password/my-password.component';
import { MyBookmarkComponent } from './my-bookmark/my-bookmark.component';
import { MyBookingComponent } from './my-booking/my-booking.component';

const routes: Routes = [
  { path: '', component: BaseComponent, canActivate: [GuardIfNotLoggedInGuard], children: [
    { path: 'profile', component: MyProfileComponent },
    { path: 'follow', component: MyFollowComponent, children: [
      { path: 'followings', component: FollowListComponent, data: {type: 'following'}, },
      { path: 'followers', component: FollowListComponent, data: {type: 'followed'}, canActivate: [GuardIfNotEligbleToCreatePostGuard], },
      { path: '', redirectTo: 'followings'},
    ]},

    { path: 'bookings', component: MyBookingComponent, },
    { path: 'bookmarks', component: MyBookmarkComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'password', component: MyPasswordComponent },
  ]},
];

@NgModule({
  declarations: [
    BaseComponent,
    MyFollowComponent,
    FollowListComponent,
    NotificationsComponent,
    MyProfileComponent,
    MyPasswordComponent,
    MyBookmarkComponent,
    MyBookingComponent,
  ],
  providers: [
    CategoryService,
    StripeService,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SocialItemsModule,
    NgxStripeModule.forRoot(environment.config.stripeKey),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDDfIO3nUUgAA_QCs2XTv2xvd8t9-0oYDs',
      language: 'en',
      libraries: ['places']
    }),

  ]
})
export class DashboardNewModule { }
