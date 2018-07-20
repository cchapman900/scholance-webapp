import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import {OrganizationService} from '../../../services/organization.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: User;
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private organizationService: OrganizationService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(): void {
    this.userService.authenticatedUser$.subscribe((user) => {
      this.user = user;
      console.log(user)
    })
  }

  goBack(): void {
    this.location.back();
  }

  removeUserFromOrganization(): void {
    this.userService.authenticatedUser$.subscribe((user) => {
      this.organizationService.removeUserFromOrganization(this.user.organization._id, this.user._id)
        .subscribe(() => {
        })
    })
  }

  update(): void {
    console.log(this.user);
    this.submitted = true;
    this.userService.updateUser(this.user)
      .subscribe(() => {
        // this.goBack()
      });
  }

}
