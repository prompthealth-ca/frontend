import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes, Route } from '@angular/router';
import { PageComponent } from './page/page.component';
import { SharedModule } from '../shared/shared.module';
import { CardSubscribeComponent } from './card-subscribe/card-subscribe.component';
import { ModalEventComponent } from './modal-event/modal-event.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from '../shared/services/category.service';
import { NgxStripeModule, StripeService } from 'ngx-stripe';
import { environment } from 'src/environments/environment';
import { CardNewPostComponent } from './card-new-post/card-new-post.component';
import { QuillModule } from 'ngx-quill';
import { EditorComponent } from './editor/editor.component';
import { BaseComponent } from './base/base.component';
import { GuardIfEditorLockedGuard } from './guard-if-editor-locked.guard';
import { ProfileComponent } from './profile/profile.component';
import { ProfileAboutComponent } from './profile-about/profile-about.component';
import { ProfileReviewComponent } from './profile-review/profile-review.component';
import { ProfileServiceComponent } from './profile-service/profile-service.component';
import { ProfileFeedComponent } from './profile-feed/profile-feed.component';
import { AuthModule } from '../auth/auth.module';
import { GuardIfNotEligbleToCreatePostGuard } from './guard-if-not-eligble-to-create-post.guard';
import { AgmCoreModule } from '@agm/core';
// import { DraftComponent } from './draft/draft.component';
import { ProfileContactComponent } from './profile-contact/profile-contact.component';
import { ProfileFollowListComponent } from './profile-follow-list/profile-follow-list.component';
import { SocialItemsModule } from '../social-items/social-items.module';
import { NotificationComponent } from './notification/notification.component';
import { GuardIfNotLoggedInGuard } from '../auth/guard-if-not-logged-in.guard';


const routes: Routes = [
  { path: '', component: BaseComponent, children: [
    /** PUBLIC PROFILE */
    { path: 'profile/:userid', component: ProfileComponent, children: [
      { path: '', component: ProfileAboutComponent, data: {order: 1} } ,
      { path: 'service', component: ProfileServiceComponent, data: {order:2} } ,
      { path: 'feed', component: ProfileFeedComponent, data: {order: 3} },
      { path: 'review', component: ProfileReviewComponent, data: {order: 4} },
    ] },
    { path: 'profile/:userid/followings', component: ProfileFollowListComponent, data: {type: 'following'}},

    /** CONTENT */
    { path: 'content/:postid', component: PageComponent },
    { path: 'content', pathMatch: 'full', redirectTo: 'feed' },

    /** EDITOR */
    { path: 'create/article', component: EditorComponent, data: {type: 'article'}, canActivate: [GuardIfNotEligbleToCreatePostGuard], canDeactivate: [GuardIfEditorLockedGuard] },
    { path: 'create/event', component: EditorComponent, data: {type: 'event'}, canActivate: [GuardIfNotEligbleToCreatePostGuard], canDeactivate: [GuardIfEditorLockedGuard] },
    { path: 'create', redirectTo: 'create/article' },
    // { path: 'draft', component: DraftComponent, canActivate: [GuardIfNotEligbleToCreatePostGuard] },

    { path: 'notification', component: NotificationComponent, canActivate: [GuardIfNotLoggedInGuard], },

    /** FEED */
    { path: '', component: HomeComponent, children: [
      { path: ':taxonomyType', component: ListComponent },
      { path: ':taxonomyType/:topicId', component: ListComponent },  

      { path: '', pathMatch: 'full', redirectTo: 'feed', },

    ]},
  ]},

];


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent, 
    PageComponent, 
    CardSubscribeComponent, 
    ModalEventComponent, 
    CardNewPostComponent, 
    EditorComponent,
    BaseComponent,
    ProfileComponent,
    ProfileAboutComponent,
    ProfileReviewComponent,
    ProfileServiceComponent,
    ProfileFeedComponent,
    // DraftComponent,
    ProfileContactComponent,
    ProfileFollowListComponent,
    NotificationComponent,
  ],
  providers: [
    CategoryService,
    StripeService,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SocialItemsModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbRhC6h9Pp43-5t_Knyrd_ewAdLMIJtCg',
      libraries: ['places']
    }),
    NgxStripeModule.forRoot(environment.config.stripeKey),
    RouterModule.forChild(routes),
    QuillModule.forRoot( {formats: ['bold', 'italic', 'underline', 'header', 'list', 'link', 'image', 'video', 'code-block']}),
  ],
  exports: [
  ],
})
export class SocialModule { }
