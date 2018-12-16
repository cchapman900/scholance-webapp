import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errors = [];

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  login(email, password) {
    if (!email) {
      this.errors.push('Email is required');
    }

    if (this.errors.length === 0) {
      this.auth.login(email, password)
    }
  }

}
