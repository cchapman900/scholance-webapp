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
  @Input() comment: Comment;
  @Input() parentUrl: string;
  user: User;

  constructor(
    private userService: UserService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.userService.authenticatedUser$
      .subscribe((user) => {
        this.user = user;
      })
  }

  deleteComment(): void {
    this.commentService.deleteComment(this.parentUrl, this.comment._id)
      .subscribe(() => {
        console.log('deleted comment');
      })
  }

}
