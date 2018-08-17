import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Asset} from '../../../../project/models/asset.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-portfolio',
  templateUrl: './update-portfolio.component.html',
  styleUrls: ['./update-portfolio.component.css']
})
export class UpdatePortfolioComponent implements OnInit {

  completedProjects: [{
    project: {
      title: string,
      organization: string,
      summary: string
    },
    submission: {
      assets: [Asset],
      commentary: string
    },
    visible: boolean
  }];

  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.authenticatedUser$  // TODO: Figure out why you need to refresh page for portfolio to work
      .subscribe((user) => {
        this.completedProjects = user.completedProjects;
      })
  }

  moveToTop(index: number) {
    this.completedProjects.splice(0, 0, this.completedProjects.splice(index, 1)[0]);
  }

  moveToBottom(index: number) {
    this.completedProjects.splice(this.completedProjects.length - 1, 0, this.completedProjects.splice(index, 1)[0]);
  }

  toggleVisibility(index: number) {
    this.completedProjects[index].visible = !this.completedProjects[index].visible;
  }

  updateCompletedProjects() {
    this.userService.updateCompletedProjects(this.userService.authenticatedUser, this.completedProjects)
      .subscribe((response) => {
        this.router.navigate(['users', this.userService.authenticatedUser._id, 'portfolio']);
      })
  }

}
