import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-liaison-entry-work-area',
  templateUrl: './liaison-entry-work-area.component.html',
  styleUrls: ['./liaison-entry-work-area.component.css']
})
export class LiaisonEntryWorkAreaComponent implements OnInit {
  @Input() project;

  constructor() { }

  ngOnInit() {
  }

}
