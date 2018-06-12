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

  constructor() { }

  ngOnInit() {
  }

}
