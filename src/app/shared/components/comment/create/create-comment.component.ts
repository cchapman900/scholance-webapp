import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../../../services/comment.service';
import {Comment} from '../../../models/comment.model';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {
  @Input() objectIds: {
    project_id?: string,
    entry_id?: string
  };
  @Input() commentType: string;
  text: string;

  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
  }

  createComment(): void {
    this.commentService.createComment(this.commentType, this.objectIds, this.text)
      .subscribe((response) => {
        console.log(response);
      });
  }

}
