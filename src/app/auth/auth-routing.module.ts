import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { AppDownloadCompComponent } from './app-download-comp/app-download-comp.component';
import { ContactUspageComponent } from './contact-uspage/contact-uspage.component';

const routes: Routes = [{
	path: 'business',
	component: LoginSignupComponent
}, {
	path: 'forgot-password',
	component: ForgotPasswordComponent
},
{
	path: 'consumer',
	component: AppDownloadCompComponent
},
{
	path: 'contact-us',
	component: ContactUspageComponent
}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule { }
