import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    '../../assets/css/dashboard.css',
    './dashboard.component.css'
  ]
})
export class DashboardComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.setTitle()
  }

  setTitle() {
    this.titleService.setTitle('Scholance | Dashboard')
  }

}
