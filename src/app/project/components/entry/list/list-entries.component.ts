import {Component, Input, OnInit} from '@angular/core';
import {Entry} from '../../../models/entry.model';

@Component({
  selector: 'app-list-entries',
  templateUrl: './list-entries.component.html',
  styleUrls: ['./list-entries.component.css']
})
export class ListEntriesComponent implements OnInit {
  @Input() entries: Entry[];
  @Input() liaison_id: string;

  constructor() { }

  ngOnInit() {
  }

}
