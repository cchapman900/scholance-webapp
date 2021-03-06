import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../../services/project.service';
import {Entry} from '../../../models/entry.model';
import {UserService} from '../../../../user/services/user.service';
import {Project} from '../../../models/project.model';

@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.component.html',
  styleUrls: ['./view-entry.component.css']
})
export class ViewEntryComponent implements OnInit {
  project: Project;
  entry: Entry;
  showComments: boolean;
  project_id: string;
  assetType = 'entryAsset';
  isSelected = false;

  constructor(
    private projectService: ProjectService,
    public userService: UserService,
    private route: ActivatedRoute,
    protected router: Router
  ) { }

  ngOnInit() {
    this.project_id = this.route.parent.snapshot.paramMap.get('project_id');
    this.getProject(this.project_id);
    // this.getUser();

    const entry_id = this.route.snapshot.paramMap.get('entry_id');
    if (!entry_id) {
      // this.showUpdateButton = true;
      this.userService.authenticatedUser$
        .subscribe((user) => {
          this.getEntry(this.project_id, user._id);
        })
    } else {
      this.getEntry(this.project_id, entry_id);
    }

    this.showComments = false;

  }

  getProject(project_id: string): void {
    this.projectService.getProject(project_id)
      .subscribe((project) => {
        this.project = project;
      })
  }

  getEntry(project_id: string, entry_id: string): void {
    this.projectService.getEntry(project_id, entry_id)
      .subscribe((entry) => {
        this.entry = entry;
        this.isSelected = this.projectService.isSelectedEntry(this.project, this.entry);
      })
  }

  deleteAsset(assetType: string, project_id: string, asset_id: string, index: number) {
    this.projectService.deleteAsset(assetType, project_id, asset_id, this.userService.authenticatedUser._id)
      .subscribe(() => {
        this.entry.assets.splice(index, 1);
      });
  }

}
