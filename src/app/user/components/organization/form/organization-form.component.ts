import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Organization} from '../../../models/organization.model';
import {OrganizationService} from '../../../services/organization.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.css']
})
export class OrganizationFormComponent implements OnInit {
  @Input() organization: Organization;
  @Input() action: string;
  organizationForm: FormGroup;

  constructor(
    private organizationService: OrganizationService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.organizationForm = this.formBuilder.group({
      _id: [this.organization._id],
      name: [this.organization.name, Validators.required],
      industry: [this.organization.industry],
      about: [this.organization.about],
      linkedin: [this.organization.linkedin], // TODO: Add validation to verify this is a linkedin
      domain: [this.organization.domain],
      twitter: [this.organization.twitter]
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.action === 'create') {
      this.create();
    } else if (this.action === 'update') {
      this.update();
    } else {
      console.log('Unknown action')
    }
  }

  create(): void {
    this.organizationService.createOrganization(this.organizationForm.value)
      .subscribe(() => {
        this.goBack();
      });
  }

  update(): void {
    this.organizationService.updateOrganization(this.organizationForm.value)
      .subscribe(() => {
        this.goBack();
      })
  }

}
