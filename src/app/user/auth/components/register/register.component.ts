import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../../models/user.model';
import {ActivatedRoute} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TermsOfServiceComponent} from './terms-of-service/terms-of-service.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  closeResult: string;
  acceptTermsOfService: boolean;
  errors = [];

  constructor(
    public auth: AuthService,
    private route: ActivatedRoute,
    private modalService: NgbModal
    ) {
    this.user = new User();
    this.route.queryParams
      .subscribe(params => {
        this.user.userType = params['userType']
      })
  }

  ngOnInit() {
    this.acceptTermsOfService = false;
  }

  signup(name, email, password, userType) {

    if (!name) {
      this.errors.push('Name is required')
    }

    if (name.trim().length < 4) {
      this.errors.push('Name is too short')
    }

    if (!email) {
      this.errors.push('Email is required')
    }

    if (!this.validateEmail(email)) {
      this.errors.push('Email is invalid')
    }

    if (userType === 'student' && !this.validateStudentEmail(email)) {
      this.errors.push('You must have a valid .edu email address to register as a student')
    }

    // TODO: Exclude personal emails for business users

    if (!password) {
      this.errors.push('Password is required')
    }

    if (password.length < 8) {
      this.errors.push('Password is too short')
    }

    if (!userType) {
      this.errors.push('User Type is required')
    }

    if (this.errors.length === 0) {
      this.auth.signup(name, email, password, userType)
    }
  }

  openTermsOfService() {
    this.modalService.open(TermsOfServiceComponent, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  private validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  private validateStudentEmail(email) {
    const re = /\.edu$/;
    return re.test(String(email).toLowerCase());
  }

}
