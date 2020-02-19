import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedService } from './services/shared.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    // FlashMessagesModule
  ],
  providers: [
    SharedService
  ],
  declarations: [

  ],
  exports: [

  ]
})
export class SharedModule { }
