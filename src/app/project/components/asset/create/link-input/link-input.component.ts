import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../../models/project.model';
import {User} from '../../../../../user/models/user.model';
import {UserService} from '../../../../../user/services/user.service';
import {ProjectService} from '../../../../services/project.service';
import {Asset} from '../../../../models/asset.model';

@Component({
  selector: 'app-link-input',
  templateUrl: './link-input.component.html',
  styleUrls: ['./link-input.component.css']
})
export class LinkInputComponent implements OnInit {

  @Input() project_id: string;
  @Input() assetType: string;
  user: User;
  linkAsset: Asset;

  constructor(
    private projectService: ProjectService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.authenticatedUser$
      .subscribe((user) => {
        this.user = user;
      });

    this.linkAsset = new Asset();
    this.linkAsset.mediaType = 'link';
  }

  uploadLinkAsset() {
    this.projectService.createAsset(this.assetType, this.project_id, this.linkAsset, this.user._id)
      .subscribe((response) => {
        console.log(response);
      });
  }

}
