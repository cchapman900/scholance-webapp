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
  organization: Organization;

  constructor(
    private route: ActivatedRoute,
    private organizationService: OrganizationService,
    public userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }

  update(): void {
    this.organizationService.updateOrganization(this.organization)
      .subscribe(() => {
        // this.goBack()
      });
  }

}
