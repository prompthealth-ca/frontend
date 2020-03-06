import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedService } from './services/shared.service';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    // FlashMessagesModule
  ],
  providers: [
    SharedService
  ],
  declarations: [UserSidebarComponent

  ],
  exports: [UserSidebarComponent

  ]
})
export class SharedModule { }
