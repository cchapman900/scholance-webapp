import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../models/user.model';

@Component({
  selector: 'app-view-user-liaison',
  templateUrl: './view-user-liaison.component.html',
  styleUrls: ['./view-user-liaison.component.css']
})
export class ViewUserLiaisonComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
