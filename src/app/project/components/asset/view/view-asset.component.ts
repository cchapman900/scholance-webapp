import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {Asset} from '../../../models/asset.model';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.css']
})
export class ViewAssetComponent implements OnInit {
  @Input() project_id: string;
  @Input() asset: Asset;
  @Input() assetType: string;
  faLink = faLink;

  constructor() { }

  ngOnInit() { }

}
