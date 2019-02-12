import { Component, OnInit } from '@angular/core';
import {Project} from '../../../../models/project.model';
import {ProjectService} from '../../../../services/project.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-confirm-project-creation',
  templateUrl: './confirm-project-creation.component.html',
  styleUrls: ['./confirm-project-creation.component.css']
})
export class ConfirmProjectCreationComponent implements OnInit {
  project: Project;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('project_id');
    this.getProject(id);
  }

  getProject(id: string): void {
    this.projectService.getProject(id)
      .subscribe((project) => {
        this.project = project;
      })
  }

}
