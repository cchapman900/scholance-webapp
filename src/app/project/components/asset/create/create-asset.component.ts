import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {Project} from '../../../models/project.model';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css']
})
export class CreateAssetComponent implements OnInit {
  @Input() project: Project;
  @Input() assetType: string;
  selectedMediaType: string;
  mediaTypes = [
    '',
    'image',
    'text',
    'link'
    ];

  constructor() { }

  ngOnInit() {
  }

  private assetTypeDisplay(assetTypeString: string) {
    return assetTypeString
      // insert a space before all caps
      .replace(/([A-Z])/g, ' $1')
      // uppercase the first character
      .replace(/^./, function(str){ return str.toUpperCase(); })
  }

}
