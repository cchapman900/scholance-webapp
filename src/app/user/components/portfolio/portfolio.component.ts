import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';
import {Entry} from '../../../project/models/entry.model';
import {Project} from '../../../project/models/project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  user: User;
  portfolioEntries: any;

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
        this.portfolioEntries = user.portfolioEntries;
      })
  }

}
