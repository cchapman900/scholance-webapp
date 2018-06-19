import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {ActivatedRoute} from '@angular/router';
import {Entry} from '../../../models/entry.model';
import {Project} from '../../../models/project.model';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.css']
})
export class UpdateEntryComponent implements OnInit {
  project: Project;
  entry: Entry;
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const project_id = this.route.snapshot.paramMap.get('project_id');
    const user_id = this.route.snapshot.paramMap.get('user_id');
    this.getProject(project_id);
    this.getEntry(project_id, user_id);
  }

  getProject(project_id: string) {
    this.projectService.getProject(project_id)
      .subscribe((project) => {
        this.project = project;
      });
  }

  getEntry(project_id: string, user_id: string) {
    this.projectService.getEntry(project_id, user_id)
      .subscribe((entry) => {
        this.entry = entry;
      });
  }

  updateEntry(): void {
    this.submitted = true;
    this.projectService.updateEntry(this.project._id, this.entry)
      .subscribe(() => {
        // this.goBack()
      });
  }


}
