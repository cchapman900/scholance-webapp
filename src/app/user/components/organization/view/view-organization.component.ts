import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../../services/organization.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-view-organization',
  templateUrl: './view-organization.component.html',
  styleUrls: ['./view-organization.component.css']
})
export class ViewOrganizationComponent implements OnInit {

  constructor(
    private organizationService: OrganizationService,
    public userService: UserService
  ) { }

  ngOnInit() {
  }

  removeUserFromOrganization(): void {
    this.organizationService.removeUserFromOrganization(
      this.userService.authenticatedUser.organization._id,
      this.userService.authenticatedUser._id
    )
      .subscribe(() => {
      })
  }

}
