import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HomeModule } from '../home/home.module';
import { AuthModule } from '../auth/auth.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './../home/home.component';
import { DashboardModule } from '../dashboard/dashboard.module';

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
        path: '',
        // loadChildren: 'app/home/home.module#HomeModule'
        loadChildren: () => HomeModule
      },
      {
        path: 'auth',
        // loadChildren: 'app/auth/auth.module#AuthModule',
        loadChildren: () => AuthModule,
      },
      {
        path: 'dashboard',
        // loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
        loadChildren: () => DashboardModule,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
