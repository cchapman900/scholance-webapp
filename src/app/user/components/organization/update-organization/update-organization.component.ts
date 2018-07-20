import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Organization } from '../../../models/organization.model';
import {OrganizationService} from '../../../services/organization.service';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-update-organization',
  templateUrl: './update-organization.component.html',
  styleUrls: ['./update-organization.component.css']
})
export class UpdateOrganizationComponent implements OnInit {
  user: User;
  organization: Organization;
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor(
    private route: ActivatedRoute,
    private organizationService: OrganizationService,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(): void {
    this.userService.authenticatedUser$.subscribe((user) => {
      this.user = user;
      this.organization = user.organization;
      console.log(user)
    })
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    console.log(this.user);
    this.submitted = true;
    this.organizationService.updateOrganization(this.organization)
      .subscribe(() => {
        // this.goBack()
      });
  }

}
