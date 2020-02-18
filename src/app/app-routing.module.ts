import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ThemeModule } from './theme/theme.module';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    //loadChildren: 'theme/theme.module#ThemeModule',
    loadChildren: () => ThemeModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabled'}),HttpClientModule],
  exports: [RouterModule,HttpClientModule]
})
export class AppRoutingModule { }
