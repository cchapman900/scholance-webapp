import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../models/user.model';
import {Organization} from '../../../../models/organization.model';
import {OrganizationService} from '../../../../services/organization.service';

@Component({
  selector: 'app-view-user-liaison',
  templateUrl: './view-user-liaison.component.html',
  styleUrls: ['./view-user-liaison.component.css']
})
export class ViewUserLiaisonComponent implements OnInit {
  @Input() user: User;
  suggestedOrganizations: Organization[];

  constructor(
    private organizationService: OrganizationService
  ) { }

  ngOnInit() {
    if (!this.user.organization) {
      this.getSuggestedOrganization()
    }
  }

  signUpLiaisonToOrganization(organization_id: string): void {
    this.organizationService.addUserToOrganization(organization_id, this.user._id)
      .subscribe((response) => {
        console.log('Added user to organization');
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
