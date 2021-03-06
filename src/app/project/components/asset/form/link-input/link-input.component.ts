import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../../models/project.model';
import {User} from '../../../../../user/models/user.model';
import {UserService} from '../../../../../user/services/user.service';
import {ProjectService} from '../../../../services/project.service';
import {Asset} from '../../../../models/asset.model';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-link-input',
  templateUrl: './link-input.component.html',
  styleUrls: ['./link-input.component.css']
})
export class LinkInputComponent implements OnInit {
  linkInputForm = this.formBuilder.group({
    name: [''],
    uri: [''],
    text: [''],
    mediaType: ['link']
  });

  @Input() project_id: string;
  @Input() assetType: string;

  constructor(
    private projectService: ProjectService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  uploadLinkAsset() {
    this.linkInputForm.value.uri = this.linkInputForm.value.uri ?
      this.linkInputForm.value.uri.replace('https://', '').replace('http://', '') :
      ''; // TODO: Do this in a regex
    this.projectService.createAsset(this.assetType, this.project_id, this.linkInputForm.value, this.userService.authenticatedUser._id)
      .subscribe((response) => {

        location.reload();
      });
  }

}
