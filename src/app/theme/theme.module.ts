import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from '@agm/core';
import { NgxStripeModule } from 'ngx-stripe';
import { ThemeRoutingModule } from './theme-routing.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { FlashMessagesModule } from 'ngx-flash-messages';



import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-gaurd.service';
import { RoleGuardService } from '../auth/role-guard.service';
import { ThankuPageComponent } from './thanku-page/thanku-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SubscribeComponent,
    ThankuPageComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    RoleGuardService,
  ],
  imports: [
    AgmCoreModule.forRoot(  {
      apiKey: 'AIzaSyCbRhC6h9Pp43-5t_Knyrd_ewAdLMIJtCg',
      libraries: ['places']
    }),
    GooglePlaceModule,
    CommonModule,
    ThemeRoutingModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_live_51HMSVQHzvKsIv7FclCIgEYNrD4tlvjzZRTDx43Y54pVY3vjQ8MhFuOntQMY094MZ49bDzOdFf2A2tkYdTwSag9ij00xDUu4xnU'),
    SharedModule,
    FlashMessagesModule

  ]
})
export class ThemeModule { }
