import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedService } from './services/shared.service';
import { PreviousRouteService } from './services/previousUrl.service';
import { SearchPipe } from '../shared/pipes/search-pipe';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    // FlashMessagesModule
  ],
  providers: [
    PreviousRouteService,
    SharedService
  ],
  declarations: [
    UserSidebarComponent,
    SearchPipe,

  ],
  exports: [
    UserSidebarComponent,
    SearchPipe
  ]
})
export class SharedModule { }
