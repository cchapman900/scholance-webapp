import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: User;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const user_id = this.route.snapshot.paramMap.get('user_id');
    if (!user_id) {
      this.userService.authenticatedUser$
        .subscribe((user) => {
          this.user = user;
        })
    } else {
      this.getUser(user_id)
    }
  }

  getUser(user_id) {
    this.userService.getUser(user_id)
      .subscribe((user) => {
        this.user = user;
      })
  }

}
