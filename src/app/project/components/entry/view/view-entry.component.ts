import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../../services/project.service';
import {Entry} from '../../../models/entry.model';
import {User} from '../../../../user/models/user.model';
import {UserService} from '../../../../user/services/user.service';
import {Project} from '../../../models/project.model';

@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.component.html',
  styleUrls: ['./view-entry.component.css']
})
export class ViewEntryComponent implements OnInit {
  project: Project;
  entry: Entry;
  showComments: boolean;
  user: User;
  liaison_id: string;

  constructor(
    private projectService: ProjectService,
    private userService: UserService,
    private route: ActivatedRoute,
    protected router: Router      // Currently assuming that webapp matches perfectly with API. Probably should fix soon.
  ) { }

  ngOnInit() {
    const project_id = this.route.snapshot.paramMap.get('project_id');
    const entry_id = this.route.snapshot.paramMap.get('entry_id');
    this.getProject(project_id);
    this.getEntry(project_id, entry_id);
    this.getUser();

    this.showComments = false;
  }

  getUser(): void {
    this.userService.authenticatedUser$
      .subscribe((user) => {
        this.user = user;
      })
  }

  getProject(project_id): void {
    this.projectService.getProject(project_id)
      .subscribe((project) => {
        console.log(project);
        this.liaison_id = project.liaison._id;
      });
  }

  getEntry(project_id: string, entry_id: string): void {
    this.projectService.getEntry(project_id, entry_id)
      .subscribe((entry) => {
        this.entry = entry;
      })
  }

  selectEntry(): void {
    this.projectService.updateProjectStatus(this.project._id, 'complete', this.entry.student._id)
      .subscribe((project) => {
        console.log(project)
      })
  }

  submitEntry(): void {
    this.projectService.updateEntrySubmissionStatus(this.project._id, this.entry.student._id, 'submitted')
      .subscribe(() => {
      });
  }

}
