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

  open() {
    this.modalService.open(TermsOfServiceComponent, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });;
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

}
