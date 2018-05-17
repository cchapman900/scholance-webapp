import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: User;
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(): void {
    this.userService.authenticatedUser$.subscribe((user) => {
      this.user = user;
    })
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    console.log(this.user);
    this.submitted = true;
    this.userService.updateUser(this.user)
      .subscribe(() => {
        // this.goBack()
      });
  }

}
