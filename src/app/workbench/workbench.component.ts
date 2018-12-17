import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/services/user.service';
import {ProjectService} from '../project/services/project.service';
import {Project} from '../project/models/project.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: [
    '../../assets/css/dashboard.css',
    './workbench.component.css'
  ]
})
export class WorkbenchComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  project: Project;

  sidebarCollapsed: boolean;

  constructor(
    public userService: UserService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    const project_id = this.route.firstChild.snapshot.paramMap.get('project_id');
    this.getProject(project_id);
    this.sidebarCollapsed = true;
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

  toggleSidebarCollapsed() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

}
