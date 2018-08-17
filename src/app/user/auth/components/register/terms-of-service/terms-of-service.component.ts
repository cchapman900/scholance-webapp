import { Component, OnInit } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.css']
})
export class TermsOfServiceComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
