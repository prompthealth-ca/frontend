import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';


const routes: Routes = [
  { path: 'create', component: EditorComponent},
  { path: 'edit/:id', component: EditorComponent },
  { path: '', redirectTo: '1' },
  { path: ':page', component: ListComponent },
]

@NgModule({
  declarations: [ListComponent, EditorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule, 
    FormsModule,
    NgbModule,
    PaginationModule,
    NgMultiSelectDropDownModule.forRoot(),
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'clean'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }, 'blockquote'],       
          [{ 'header': 1 }, { 'header': 2 }],              
          [{ 'color': [] }, { 'background': [] }],       
          ['link', 'image', 'video']                      
        ],
      },
    }),
    SharedModule,
  ],
  providers: [
    PaginationConfig,
  ],
})
export class PostManagerModule { }
