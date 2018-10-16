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

  portfolioEntries: [{
    project: {
      title: string,
      organization: string,
      liaison: string,
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
        this.portfolioEntries = user.portfolioEntries;
      })
  }

  moveToTop(index: number) {
    this.portfolioEntries.splice(0, 0, this.portfolioEntries.splice(index, 1)[0]);
  }

  moveToBottom(index: number) {
    this.portfolioEntries.splice(this.portfolioEntries.length - 1, 0, this.portfolioEntries.splice(index, 1)[0]);
  }

  toggleVisibility(index: number) {
    this.portfolioEntries[index].visible = !this.portfolioEntries[index].visible;
  }

  updatePortfolioEntries() {
    this.userService.updatePortfolioEntries(this.userService.authenticatedUser, this.portfolioEntries)
      .subscribe((response) => {
        this.router.navigate(['users', this.userService.authenticatedUser._id, 'portfolio']);
      })
  }

}
