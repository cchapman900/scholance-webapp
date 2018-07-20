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
  organizationSearch: Organization[];
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor(
    private organizationService: OrganizationService,
    private userService: UserService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.organization = new Organization();
    this.searchOrganizations();
    this.getUser();
  }

  searchOrganizations(): void {
    this.userService.authenticatedUser$.subscribe((user) => {
      const domain = user.email.split('@')[1];
      console.log(domain);
      this.organizationService.listOrganizations(domain)
        .subscribe((organizations) => {
          this.organizationSearch = organizations;
          console.log(organizations)
        })
    })
  }

  getUser(): void {
    this.userService.authenticatedUser$
      .subscribe((user) => {
        console.log(user._id)
        this.user = user;
      })
  }

  addUserToOrganization(organization_id: string): void {
    this.userService.authenticatedUser$.subscribe((user) => {
      this.organizationService.addUserToOrganization(organization_id, this.user._id)
        .subscribe((organization) => {
          console.log(organization);
          this.router.navigate(['organizations', organization_id, 'update']);
        })
    })
  }

  goBack(): void {
    this.location.back();
  }

  create(): void {
    this.submitted = true;
    this.organizationService.createOrganization(this.organization)
      .subscribe(() => {
        // this.goBack()
      });
  }


}
