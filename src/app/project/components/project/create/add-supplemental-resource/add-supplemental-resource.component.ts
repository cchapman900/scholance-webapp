import { Component, OnInit } from '@angular/core';
import {Project} from '../../../../models/project.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../../../services/project.service';

@Component({
  selector: 'app-add-supplemental-resource',
  templateUrl: './add-supplemental-resource.component.html',
  styleUrls: ['./add-supplemental-resource.component.css']
})
export class AddSupplementalResourceComponent implements OnInit {
  project: Project;
  projectId: string;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('project_id');
    this.getProject();
  }

  getProject(): void {
    console.log(this.projectId);
    this.projectService.getProject(this.projectId)
      .subscribe((project) => {
        this.project = project;
        console.log(project);
      })
  }

  nextStep() {
    this.router.navigate(['projects', 'create', this.projectId, 'confirm'])
  }

}
