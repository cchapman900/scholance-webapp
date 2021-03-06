import {Component, OnInit} from '@angular/core';
import {Entry} from '../../../models/entry.model';
import {ProjectService} from '../../../services/project.service';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../../models/project.model';

@Component({
  selector: 'app-list-entries',
  templateUrl: './list-entries.component.html',
  styleUrls: ['./list-entries.component.css']
})
export class ListEntriesComponent implements OnInit {
  entries: Entry[];
  project: Project;

  constructor(
    public projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const project_id = this.route.snapshot.paramMap.get('project_id');
    this.getEntries(project_id)
  }

  getEntries(projectId) {
    this.projectService.getProject(projectId)
      .subscribe((project) => {
        this.project = project;
        this.entries = project.entries;
      })
  }

}
