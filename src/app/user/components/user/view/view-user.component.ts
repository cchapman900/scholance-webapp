import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';
import {ActivatedRoute} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteAccountConfirmationComponent} from '../../../../dashboard/profile/delete-account-confirmation/delete-account-confirmation.component';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: User;
  closeResult: string;

  constructor(public userService: UserService,
              private route: ActivatedRoute,
              public authService: AuthService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    const user_id = this.route.snapshot.paramMap.get('user_id');
    if (!user_id) {
      this.userService.authenticatedUser$
        .subscribe((user) => {
          this.user = user;
        })
    } else {
      this.getUser(user_id)
    }
  }

  getUser(user_id) {
    this.userService.getUser(user_id)
      .subscribe((user) => {
        this.user = user;
      })
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
      return `with: ${reason}`;
    }
  }

}
