import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-project-agreement',
  templateUrl: './create-project-agreement.component.html',
  styleUrls: ['./create-project-agreement.component.css']
})
export class CreateProjectAgreementComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
