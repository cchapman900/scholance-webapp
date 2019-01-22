import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../../../user/services/organization.service';
import {User} from '../../../../user/models/user.model';
import {UserService} from '../../../../user/services/user.service';
import {Organization} from '../../../../user/models/organization.model';

@Component({
  selector: 'app-account-setup-organization',
  templateUrl: './account-setup-organization.component.html',
  styleUrls: ['./account-setup-organization.component.css']
})
export class AccountSetupOrganizationComponent implements OnInit {
  user: User;
  suggestedOrganizations: Organization[];

  constructor(
    private userService: UserService,
    private organizationService: OrganizationService
  ) { }

  ngOnInit() {
    this.userService.authenticatedUser$
      .subscribe((user) => {
        this.user = user;
        if (!this.user.organization) {
          this.getSuggestedOrganization()
        }
      })
  }

  signUpLiaisonToOrganization(organization_id: string): void {
    this.organizationService.addUserToOrganization(organization_id, this.user._id)
      .subscribe((response) => {

      })
  }

  getSuggestedOrganization(): void {
    const emailDomain = this.user.email.split('@')[1];
    this.organizationService.listOrganizations(emailDomain)
      .subscribe((organizations) => {
        this.suggestedOrganizations = organizations
      })
  }

}
