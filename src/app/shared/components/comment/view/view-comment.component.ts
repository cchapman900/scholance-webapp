import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../models/comment.model';
import {User} from '../../../../user/models/user.model';
import {UserService} from '../../../../user/services/user.service';
import {CommentService} from '../../../services/comment.service';

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit {
  // TODO: I think eventually this should be put into each service. THey should just know how to add their own comments. This is kind crazy
  @Input() comment: Comment;
  @Input() objectIds: {
    project_id?: string,
    entry_id?: string
  };
  @Input() commentType: string;

  constructor(
    public userService: UserService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
  }

  deleteComment(): void {
    this.commentService.deleteComment(this.commentType, this.objectIds, this.comment._id)
      .subscribe(() => {
        location.reload();
      })
  }

}
