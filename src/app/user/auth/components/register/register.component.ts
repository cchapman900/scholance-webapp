import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../../models/user.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;

  constructor(
    public auth: AuthService,
    private route: ActivatedRoute
    ) {
    this.user = new User();
    this.route.queryParams
      .subscribe(params => {
        this.user.userType = params['userType']
      })
  }

  ngOnInit() {
  }

}
