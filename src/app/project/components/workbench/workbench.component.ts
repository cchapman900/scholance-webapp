import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../user/services/user.service';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../models/project.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: [
    '../../../../assets/css/dashboard.css',
    './workbench.component.css'
  ]
})
export class WorkbenchComponent implements OnInit {
  project: Project;

  constructor(
    public userService: UserService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    const project_id = this.route.firstChild.snapshot.paramMap.get('project_id');
    this.getProject(project_id);
  }

  getProject(id: string): void {
    this.projectService.getProject(id)
      .subscribe((project) => {
        this.project = project;
        this.setTitle(project.title)
      })
  }

  setTitle(title: string) {
    this.titleService.setTitle(`Scholance | Project Workbench: ${title}`)
  }

}
