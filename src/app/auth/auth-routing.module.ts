import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUspageComponent } from './contact-uspage/contact-uspage.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EnterpriseContactComponent } from './enterprise-contact/enterprise-contact.component';

const routes: Routes = [
	{
		path: 'contact-us',
		component: ContactUspageComponent
	},
	{
		path: 'get-in-touch',
		component: EnterpriseContactComponent
	},
	{
		path: 'forgot-password',
		component: ForgotPasswordComponent
	},
	{
		path: 'registration/:type',
		component: RegistrationComponent
	},
	{
		path: 'login/:type',
		component: LoginComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule { }
