import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {OrganizationService} from '../../../services/organization.service';
import {UserService} from '../../../services/user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Organization} from '../../../models/organization.model';

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
    private formBuilder: FormBuilder
  ) {
    this.userService.authenticatedUser$
      .subscribe((user) => {
        this.organizationService.getOrganization(user.organization._id)
          .subscribe((organization) => {
            this.organization = organization;
          });
        });
  }

  ngOnInit() {}

}
