import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../../../services/project.service';
import {Project} from '../../../../models/project.model';
import {Entry} from '../../../../models/entry.model';

@Component({
  selector: 'app-liaison-entry-work-area',
  templateUrl: './liaison-entry-work-area.component.html',
  styleUrls: ['./liaison-entry-work-area.component.css']
})
export class LiaisonEntryWorkAreaComponent implements OnInit {
  @Input() project: Project;
  @Input() entry: Entry;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
  }

  selectEntry() {
    this.projectService.updateProjectStatus(this.project._id, 'complete', this.entry.student._id)
      .subscribe(() => {
        location.reload()
      })
  }

}
