import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'

import { UserService } from '../../../services/user.service';
import {OrganizationService} from '../../../services/organization.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    about: new FormControl(''),
    position: new FormControl(''),
    school: new FormControl(''),
    academicFocus: new FormControl(''),
    interests: new FormControl(''),
    linkedin: new FormControl(''),
    twitter: new FormControl(''),
    website: new FormControl(''),
    instagram: new FormControl(''),
  });
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor(
    private route: ActivatedRoute,
    public userService: UserService,
    private organizationService: OrganizationService,
    private router: Router,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.userService.authenticatedUser$
      .subscribe((user) => {
        this.userForm = this.formBuilder.group({
          _id: [user._id],
          name: [user.name, Validators.required],
          email: [user.email, Validators.email],
          about: [user.about],
          position: [user.position],
          school: [user.school],
          academicFocus: [user.academicFocus],
          interests: [user.interests],
          linkedin: [user.linkedin], // TODO: Add validation to verify this is a linkedin
          website: [user.website],
          twitter: [user.twitter],
          instagram: [user.instagram],
        });
      });
  }

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }

  update(): void {
    this.submitted = true;
    this.userService.updateUser(this.userForm.value)
      .subscribe(() => {
        this.goBack()
      });
  }

}
