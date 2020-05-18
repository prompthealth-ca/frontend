import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

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
import { MyAmenitiesComponent } from './my-amenities/my-amenities.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    // redirectTo: '/dashboard/profilemanagement/my-profile', pathMatch: 'full' ,
    children: [
      {
        path: "my-profile",
        component: MyProfileComponent
      },
      {
        path: "my-subscription",
        component: MySubscriptionComponent
      },
      {
        path: "my-professional-info",
        component: MyProfessionalInfoComponent
      },
      {
        path: "my-booking",
        component: MyBookingComponent
      },
      {
        path: "my-payment",
        component: MyPaymentComponent
      },
      {
        path: "add-professionals",
        component: AddProfessionalComponent
      },
      {
        path: "my-favourites",
        component: MyFavouriteComponent
      },
      {
        path: "reviews-ratings",
        component: ReviewsRatingsComponent
      },
      {
        path: 'videos-blogs',
        component: VideosBlogsComponent,
      },
      {
        path: 'my-amenities',
        component: MyAmenitiesComponent,
      }
    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileManagementRoutingModule {}
