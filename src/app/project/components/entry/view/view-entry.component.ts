import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../../services/project.service';
import {Entry} from '../../../models/entry.model';

@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.component.html',
  styleUrls: ['./view-entry.component.css']
})
export class ViewEntryComponent implements OnInit {
  project_id: string;
  entry: Entry;
  showComments: boolean;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    protected router: Router      // Currently assuming that webapp matches perfectly with API. Probably should fix soon.
  ) { }

  ngOnInit() {
    this.project_id = this.route.snapshot.paramMap.get('project_id');
    const entry_id = this.route.snapshot.paramMap.get('entry_id');
    this.getEntry(this.project_id, entry_id);

    this.showComments = false;
  }

  getEntry(project_id: string, entry_id: string): void {
    this.projectService.getEntry(project_id, entry_id)
      .subscribe((entry) => {
        this.entry = entry;
      })
  }

}
