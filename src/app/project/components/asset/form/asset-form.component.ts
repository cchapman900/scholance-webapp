import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.css']
})
export class AssetFormComponent implements OnInit {
  assetForm = this.formBuilder.group({
    mediaType: ['']
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

}
