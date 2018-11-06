import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../../../models/project.model';
import {User} from '../../../../../../user/models/user.model';
import {Entry} from '../../../../../models/entry.model';
import {ProjectService} from '../../../../../services/project.service';

@Component({
  selector: 'app-list-projects-small-student',
  templateUrl: './list-projects-small-student.component.html',
  styleUrls: [
    './list-projects-small-student.component.css',
    '../../list-projects.component.css'
  ]
})
export class ListProjectsSmallStudentComponent implements OnInit {
  @Input() project: Project;
  @Input() user: User;
  entry: Entry;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    if (this.user) {
      this.entry = this.projectService.getStudentEntryFromProject(this.project, this.user._id);
    }
  }


}
