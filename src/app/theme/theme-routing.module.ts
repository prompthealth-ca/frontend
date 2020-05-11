import { NgModule } from '@angular/core';
import { CanActivate, Routes, RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { AuthModule } from '../auth/auth.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './../home/home.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { AuthGuardService as AuthGuard } from '../auth/auth-gaurd.service';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        loadChildren: () => HomeModule
      },
      {
        path: 'auth',
        loadChildren: () => AuthModule,
      },
      {
        path: 'dashboard',
        loadChildren: () => DashboardModule,
        canActivate: [AuthGuard] 
      },
    ]
  },

  { 
    path: '**', 
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
