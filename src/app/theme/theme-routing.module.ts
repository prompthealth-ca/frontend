import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HomeModule } from '../home/home.module';
import { AuthModule } from '../auth/auth.module';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        // loadChildren: 'app/home/home.module#HomeModule'
        loadChildren: () => HomeModule
      },
      {
        path: 'auth',
        // loadChildren: 'app/auth/auth.module#AuthModule',
        loadChildren: () => AuthModule,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
