import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-signup-agreement',
  templateUrl: './project-signup-agreement.component.html',
  styleUrls: ['./project-signup-agreement.component.css']
})
export class ProjectSignupAgreementComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
