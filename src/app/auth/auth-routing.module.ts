import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { ContactUspageComponent } from './contact-uspage/contact-uspage.component';
import { ProfessionalRegistrationComponent } from './professional-registration/professional-registration.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginProfessionalComponent } from './login-professional/login-professional.component';
import { LoginUserComponent } from './login-user/login-user.component';
const routes: Routes = [{
	path: 'signin-up',
	component: LoginSignupComponent
}, {
	path: 'forgot-password',
	component: ForgotPasswordComponent
},

{
	path: 'contact-us',
	component: ContactUspageComponent
},
{
	path: 'registrationp',
	component: ProfessionalRegistrationComponent
},
{
	path: 'registrationu',
	component: UserRegistrationComponent
},
{
	path: 'loginp',
	component: LoginProfessionalComponent
},
{
	path: 'loginu',
	component: LoginUserComponent
}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule { }
