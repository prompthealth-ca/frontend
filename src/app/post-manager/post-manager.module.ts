import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes = [
  { path: '', component: ListComponent },
  { path: 'create', component: EditorComponent, data: {new: true}},
]

@NgModule({
  declarations: [ListComponent, EditorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule, 
    FormsModule,
    NgbModule,
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
  ]
})
export class PostManagerModule { }
