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



import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-gaurd.service';
import { RoleGuardService } from '../auth/role-guard.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SubscribeComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    RoleGuardService,
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
