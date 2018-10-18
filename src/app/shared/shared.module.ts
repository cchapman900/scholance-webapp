import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCommentComponent } from './components/comment/view/view-comment.component';
import { CreateCommentComponent } from './components/comment/create/create-comment.component';
import { CommentService } from './services/comment.service';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from '../messages/messages.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ViewCommentComponent,
    CreateCommentComponent,
    MessagesComponent,
    LoadingComponent
  ],
  exports: [
    ViewCommentComponent,
    CreateCommentComponent,
    MessagesComponent,
    LoadingComponent
  ],
  providers: [CommentService]
})
export class SharedModule { }
