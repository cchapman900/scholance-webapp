import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {Asset} from '../../../models/asset.model';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../models/project.model';
import {UserService} from '../../../../user/services/user.service';
import {User} from '../../../../user/models/user.model';

@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.css']
})
export class ViewAssetComponent implements OnInit {
  @Input() project: Project;
  @Input() asset: Asset;
  @Input() assetType: string;
  user: User;

  constructor(
    private projectService: ProjectService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.authenticatedUser$
      .subscribe((user) => {
        this.user = user;
      })
  }

  deleteAsset(assetType: string, project_id: string, asset_id: string) {
    this.projectService.deleteAsset(assetType, project_id, asset_id, this.user._id)
      .subscribe();
  }

}
