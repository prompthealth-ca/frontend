import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeRoutingModule } from './theme-routing.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { FlashMessagesModule } from 'ngx-flash-messages';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FlashMessagesModule

  ]
})
export class ThemeModule { }
