import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../../services/organization.service';
import {UserService} from '../../../services/user.service';
import {Organization} from '../../../models/organization.model';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-view-organization',
  templateUrl: './view-organization.component.html',
  styleUrls: ['./view-organization.component.css']
})
export class ViewOrganizationComponent implements OnInit {
  organization: Organization;
  showUpdateButton: boolean;

  constructor(
    private organizationService: OrganizationService,
    public userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const organization_id = this.route.snapshot.paramMap.get('organization_id');
    this.getOrganization(organization_id)
  }

  getOrganization(organization_id): void {
    // TODO DRY this out
    if (!organization_id) {
      this.showUpdateButton = true;
      this.userService.authenticatedUser$
        .subscribe((user) => {
          this.organizationService.getOrganization(user.organization._id)
            .subscribe((organization) => {
              this.organization = organization;
            });
        });
    } else {
      this.organizationService.getOrganization(organization_id)
        .subscribe((organization) => {
          this.organization = organization;
        });
    }
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
