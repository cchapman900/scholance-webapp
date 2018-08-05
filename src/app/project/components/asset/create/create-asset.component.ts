import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {Project} from '../../../models/project.model';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css']
})
export class CreateAssetComponent implements OnInit {
  assetForm = this.formBuilder.group({

  });
  @Input() project_id: string;
  @Input() assetType: string;
  selectedMediaType: string;
  mediaTypes = [
    '',
    'image',
    'link'
    ];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

}
