import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../../services/project.service';
import {File} from '../../../../models/file.model';
import {Input} from '@angular/core';
import {Project} from '../../../../models/project.model';
import {User} from '../../../../../user/models/user.model';
import {UserService} from '../../../../../user/services/user.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent implements OnInit {
  @Input() project_id: string;
  @Input() assetType: string;
  image: string;
  defaultImage = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUA' +
    'AAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAA' +
    'AEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAGSgAwAEAAAAAQAAAGQAAAAA/+0AOFBob3Rv' +
    'c2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIAGQA' +
    'ZAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQD' +
    'BQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygp' +
    'KjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJma' +
    'oqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/' +
    'xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQID' +
    'EQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RF' +
    'RkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqy' +
    's7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAMCAgMCAgMD' +
    'AwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/' +
    '2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU' +
    'FBQUFBQUFBQUFBT/3QAEAAf/2gAMAwEAAhEDEQA/AP1SyPWjI9a/ADQf2+v2jfE+q2+m6X8QPE19' +
    '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' +
    '2Q==';


  fileInputForm = this.formBuilder.group({
    file: [''],
    name: ['', [Validators.required]],
    text: ['']
  });

  constructor(
    private projectService: ProjectService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {}

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];

    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
    };

    // This seemed to be a little hacky. Appears typescript doesn't have the correct definition of File
    // https://stackoverflow.com/questions/43767401/cant-cast-file-as-blob
    // myReader.readAsDataURL(file);
    if (file instanceof Blob) {
      myReader.readAsDataURL(file);
    }
  }

  uploadFile(assetType: string): void {
    if (this.fileInputForm.valid) {
      // TODO: Move this logic to the service
      if (this.image) {
        const file = {
          name: this.fileInputForm.value.name,
          text: this.fileInputForm.value.text,
          file: this.image
        };
        //
        if (assetType === 'supplementalResource') {
          this.projectService.createSupplementalResourceFile(this.project_id, file)
            .subscribe(() => {
              location.reload();
            });
        } else if (assetType === 'entryAsset') {
          this.projectService.createEntryAssetFile(this.project_id, this.userService.authenticatedUser._id, file)
            .subscribe(() => {
              location.reload();
            });
        }

      }
    }
  }

}
