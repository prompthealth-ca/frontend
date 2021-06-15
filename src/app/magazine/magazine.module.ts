import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CardPostComponent } from './card-post/card-post.component';
import { SharedModule } from '../shared/shared.module';

const routes = [
  {path: '', component: HomeComponent},
]

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    CardPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [
    RouterModule
  ],
})
export class MagazineModule { }
