import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardNotificationComponent } from './components/card-notification/card-notification.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { CardItemEyecatchComponent } from './components/card-item-eyecatch/card-item-eyecatch.component';
import { CardItemEventComponent } from './components/card-item-event/card-item-event.component';
import { CardItemArticleComponent } from './components/card-item-article/card-item-article.component';
import { CardItemNoteComponent } from './components/card-item-note/card-item-note.component';
import { CardItemCommentComponent } from './components/card-item-comment/card-item-comment.component';
import { CardItemToolbarComponent } from './components/card-item-toolbar/card-item-toolbar.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { FormItemCommentComponent } from './components/form-item-comment/form-item-comment.component';
import { QuillModule } from 'ngx-quill';
import { AlertNotApprovedComponent } from './components/alert-not-approved/alert-not-approved.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryService } from '../shared/services/category.service';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    CardItemEyecatchComponent,
    CardItemArticleComponent,
    CardItemEventComponent,
    CardItemNoteComponent,
    CardItemCommentComponent,
    CardItemToolbarComponent,
    CardNotificationComponent,
    AudioPlayerComponent,
    FormItemCommentComponent,
    AlertNotApprovedComponent,
  ],
  providers: [
    CategoryService,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot( {formats: ['bold', 'italic', 'underline', 'header', 'list', 'link', 'image', 'video', 'code-block']}),
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    CardItemEyecatchComponent,
    CardItemArticleComponent,
    CardItemEventComponent,
    CardItemNoteComponent,
    CardItemCommentComponent,
    CardItemToolbarComponent,
    CardNotificationComponent,
    AudioPlayerComponent,
    FormItemCommentComponent,
    AlertNotApprovedComponent,
  ]
})
export class SocialItemsModule { }
