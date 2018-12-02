import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-project-confirmation',
  templateUrl: './delete-project-confirmation.component.html',
  styleUrls: ['./delete-project-confirmation.component.css']
})
export class DeleteProjectConfirmationComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
