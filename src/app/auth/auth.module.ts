import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContactUspageComponent } from './contact-uspage/contact-uspage.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from '../auth/login/login.component';



@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    NgxSpinnerModule,
    // NgxIntlTelInputModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ContactUspageComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegistrationComponent,
  ]
})
export class AuthModule { }
