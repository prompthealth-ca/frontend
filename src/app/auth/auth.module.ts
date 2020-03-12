import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

// import { AgmCoreModule } from '@agm/core';

import { ReactiveFormsModule } from '@angular/forms';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ContactUspageComponent } from './contact-uspage/contact-uspage.component';
import { ProfessionalRegistrationComponent } from './professional-registration/professional-registration.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';



@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    NgxSpinnerModule,
    // NgxIntlTelInputModule,
    ReactiveFormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyB84_b3sz-C67ERkmEnQXAu_EglmB-AG1g',
    //   libraries: ['places']
    // })
  ],
  declarations: [
    LoginSignupComponent,
    ForgotPasswordComponent,
    ContactUspageComponent,
    ProfessionalRegistrationComponent,
    UserRegistrationComponent,
  ]
})
export class AuthModule { }
