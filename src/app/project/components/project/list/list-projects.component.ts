import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../models/project.model';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {
  projects: Project[];

  constructor(
    private projectService: ProjectService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.listProjects();
    this.setTitle()
  }

  listProjects() {
    this.projectService.listProjects()
      .subscribe((projects) => {
        this.projects = projects;
      })
  }

  setTitle() {
    this.titleService.setTitle('Scholance | Browse Projects')
  }

}
