import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.css']
})
export class AssetFormComponent implements OnInit {
  @Input() project_id: string;
  @Input() assetType: string;
  selectedMediaType: string;

  mediaTypes = {
    'image': 'Image (PNG, JPG, etc.)',
    'link': 'Link (GitHub, YouTube, Vimeo, etc.)',
    'text': 'Plain Text'
  };

  assetForm = this.formBuilder.group({
    mediaType: {'': ''}
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  // public assetTypeDisplay(assetTypeString: string) {
  //   return assetTypeString
  //   // insert a space before all caps
  //     .replace(/([A-Z])/g, ' $1')
  //     // uppercase the first character
  //     .replace(/^./, function(str){ return str.toUpperCase(); })
  // }

}
