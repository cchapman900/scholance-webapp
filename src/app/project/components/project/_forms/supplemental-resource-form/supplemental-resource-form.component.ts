import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../../../services/project.service';
import {Project} from '../../../../models/project.model';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-supplemental-resource-form',
  templateUrl: './supplemental-resource-form.component.html',
  styleUrls: ['./supplemental-resource-form.component.css']
})
export class SupplementalResourceFormComponent implements OnInit {
  @Input() project: Project;
  faInfoCircle = faInfoCircle;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
  }

  deleteSupplementalResource(asset_id: string) {
    this.projectService.deleteAsset('supplementalResource', this.project._id, asset_id)
      .subscribe((response) => {
        location.reload();
      })
  }

}
