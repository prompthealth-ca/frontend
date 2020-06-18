import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CookieService } from "ngx-cookie-service";
import { BehaviorService } from "./shared/services/behavior.service";
import { CanonicalLinkService } from "./shared/services/link.service";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";

import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxPaginationModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [
    BehaviorService,
    CookieService,
    CanonicalLinkService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
