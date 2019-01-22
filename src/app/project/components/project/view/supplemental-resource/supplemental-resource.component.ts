import {Component, Input, OnInit} from '@angular/core';
import {Asset} from '../../../../models/asset.model';
import {ProjectService} from '../../../../services/project.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-supplemental-resource',
  templateUrl: './supplemental-resource.component.html',
  styleUrls: ['./supplemental-resource.component.css']
})
export class SupplementalResourceComponent implements OnInit {
  @Input() supplementalResource: Asset;
  @Input() projectId: string;
  @Input() isProjectOwner: boolean;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {}

  delete() {

    this.projectService.deleteSupplementalResource(this.projectId, this.supplementalResource._id)
      .subscribe(() => {
        location.reload();
      })
  }

}
