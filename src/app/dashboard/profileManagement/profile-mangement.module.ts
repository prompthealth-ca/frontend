import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProfileManagementRoutingModule } from './profile-mangement-routing.module'

import { WrapperComponent } from './wrapper/wrapper.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MySubscriptionComponent } from './my-subscription/my-subscription.component';
import { MyProfessionalInfoComponent } from './my-professional-info/my-professional-info.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { MyPaymentComponent } from './my-payment/my-payment.component';
import { AddProfessionalComponent } from './add-professional/add-professional.component';
import { MyFavouriteComponent } from './my-favourite/my-favourite.component';
import { ReviewsRatingsComponent } from './reviews-ratings/reviews-ratings.component';
import { VideosBlogsComponent } from './videos-blogs/videos-blogs.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    WrapperComponent,
    MyProfileComponent,
    MySubscriptionComponent,
    MyProfessionalInfoComponent,
    MyBookingComponent,
    MyPaymentComponent,
    AddProfessionalComponent,
    MyFavouriteComponent,
    ReviewsRatingsComponent,
    VideosBlogsComponent,
  ],
  imports: [
    AgmCoreModule.forRoot(  {
      apiKey: 'AIzaSyB2RgWanHLf385ziPuRTY2d19hZAWVHbYs',
      libraries: ['places']
    }),
    CommonModule, ProfileManagementRoutingModule, FormsModule]
})
export class ProfileManagementModule {}
