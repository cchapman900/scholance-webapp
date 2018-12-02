import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../../../models/project.model';
import {User} from '../../../../../../user/models/user.model';
import {Entry} from '../../../../../models/entry.model';
import {ProjectService} from '../../../../../services/project.service';

@Component({
  selector: 'app-list-projects-small-liaison',
  templateUrl: './list-projects-small-liaison.component.html',
  styleUrls: [
    './list-projects-small-liaison.component.css',
    '../../list-projects.component.css'
  ]
})
export class ListProjectsSmallLiaisonComponent implements OnInit {
  @Input() project: Project;
  @Input() user: User;
  entry: Entry;
  numActiveRegistrants: number;
  numDrafts: number;
  numSubmissions: number;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    if (this.user) {
      this.entry = this.projectService.getStudentEntryFromProject(this.project, this.user._id);
    }
    this.numActiveRegistrants = this.projectService.getNumActiveRegistrants(this.project);
    this.numDrafts = this.projectService.getNumDrafts(this.project);
    this.numSubmissions = this.projectService.getNumSubmissions(this.project);

    console.log(this.project);
  }

}
