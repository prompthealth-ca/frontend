import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgxPaginationModule } from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core';
import { NgxSpinnerModule } from 'ngx-spinner';

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

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MyAmenitiesComponent } from './my-amenities/my-amenities.component';
import { SharedModule } from '../../shared/shared.module';
import { MyProductComponent } from './my-product/my-product.component';
import { RatingsComponent } from '../../shared/ratings/ratings.component';
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
    MyAmenitiesComponent,
    MyProductComponent,
    RatingsComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    AgmCoreModule.forRoot(  {
      apiKey: 'AIzaSyDtIw6iEt9H0fIV-5KloJorfbDy-zudhGk',
      libraries: ['places']
    }),
    NgxPaginationModule,NgxSpinnerModule,
    SharedModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,
    CommonModule, ProfileManagementRoutingModule, ReactiveFormsModule, FormsModule, ]
    
})
export class ProfileManagementModule {}
