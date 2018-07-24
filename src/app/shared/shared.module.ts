import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewCommentComponent} from './components/comment/view/view-comment.component';
import { CreateCommentComponent } from './components/comment/create/create-comment.component';
import { CommentService } from './services/comment.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ViewCommentComponent,
    CreateCommentComponent
  ],
  exports: [
    ViewCommentComponent,
    CreateCommentComponent
  ],
  providers: [CommentService]
})
export class SharedModule { }
