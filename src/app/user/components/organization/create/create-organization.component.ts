import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../../services/organization.service';
import {User} from '../../../models/user.model';
import {Organization} from '../../../models/organization.model';
import {UserService} from '../../../services/user.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {
  organization: Organization;
  user: User;

  constructor(
    private organizationService: OrganizationService,
    private userService: UserService,
    private router: Router
  ) {
    this.organization = new Organization();
  }

  ngOnInit() {
  }

  addUserToOrganization(organization_id: string): void {
    this.userService.authenticatedUser$.subscribe((user) => {
      this.organizationService.addUserToOrganization(organization_id, this.user._id)
        .subscribe((organization) => {

          this.router.navigate(['organizations', organization_id, 'update']);
        })
    })
  }

  create(): void {
    this.organizationService.createOrganization(this.organization)
      .subscribe(() => {
        // this.goBack()
      });
  }


}
