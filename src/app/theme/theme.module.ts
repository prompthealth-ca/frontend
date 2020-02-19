import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeRoutingModule } from './theme-routing.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SubscribeComponent],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    ReactiveFormsModule,
    SharedModule

  ]
})
export class ThemeModule { }
