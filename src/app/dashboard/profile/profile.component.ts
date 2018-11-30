import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user/services/user.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteAccountConfirmationComponent} from './delete-account-confirmation/delete-account-confirmation.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  closeResult: string;

  constructor(
    public userService: UserService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  deleteAccount() {
    // TODO: WIP
    this.openDeleteAccountConfirmation()
  }

  openDeleteAccountConfirmation() {
    this.modalService.open(DeleteAccountConfirmationComponent, {size: 'lg'}).result.then((result) => {
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

}
