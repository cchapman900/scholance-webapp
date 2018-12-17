import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ProjectService} from '../../../../services/project.service';
import {UserService} from '../../../../../user/services/user.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  textInputForm = this.formBuilder.group({
    name: [''],
    text: [''],
    mediaType: ['text']
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

  uploadTextAsset() {
    this.projectService.createAsset(this.assetType, this.project_id, this.textInputForm.value, this.userService.authenticatedUser._id)
      .subscribe((response) => {
        console.log(response);
        location.reload();
      });
  }

}
