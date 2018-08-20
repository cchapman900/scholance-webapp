import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../models/project.model';
import {Title} from '@angular/platform-browser';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {
  projects: Project[];
  filterForm: FormGroup;

  constructor(
    private projectService: ProjectService,
    private titleService: Title,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      status: ['active']
    });
    this.listProjects();
    this.setTitle();
  }

  updateFilter() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        status: this.filterForm.value.status
      }
    });
    this.listProjects()
  }

  listProjects() {
    this.projectService.listProjects(this.filterForm.value)
      .subscribe((projects) => {
        this.projects = projects;
      })
  }

  setTitle() {
    this.titleService.setTitle('Scholance | Browse Projects')
  }

}
