import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../models/project.model';
import {Title} from '@angular/platform-browser';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import ObjectID from 'bson-objectid';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {
  projects: Project[];
  filterForm: FormGroup;
  categories: Array<string>;

  constructor(
    private projectService: ProjectService,
    private titleService: Title,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const category = this.route.snapshot.queryParamMap.get('category') || '';
    const status = this.route.snapshot.queryParamMap.get('status') || 'active';
    this.categories = this.projectService.getValidProjectCategories();
    this.filterForm = this.formBuilder.group({
      category: [category],
      status: [status]
    });
    this.listProjects();
    this.setTitle();
  }

  updateFilter() {
    const queryParams = {
      status: this.filterForm.value.status
    };
    if (this.filterForm.value.category !== '') {
      queryParams['category'] = this.filterForm.value.category;
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams
    });
    this.listProjects()
  }

  listProjects() {
    this.projectService.listProjects(this.filterForm.value)
      .subscribe((projects) => {
        this.projects = projects;
      })
  }

  getTime(objectId: string) {
    const id = new ObjectID(objectId);
    return id.getTimestamp();
  }

  setTitle() {
    this.titleService.setTitle('Scholance | Browse Projects')
  }

}
