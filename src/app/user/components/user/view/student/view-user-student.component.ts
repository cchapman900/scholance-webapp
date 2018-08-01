import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../models/user.model';

@Component({
  selector: 'app-view-user-student',
  templateUrl: './view-user-student.component.html',
  styleUrls: ['./view-user-student.component.css']
})
export class ViewUserStudentComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
