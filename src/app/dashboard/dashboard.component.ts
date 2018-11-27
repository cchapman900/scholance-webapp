import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    '../../assets/css/dashboard.css',
    './dashboard.component.css'
  ]
})
export class DashboardComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  sidebarCollapsed: boolean;

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.setTitle();
    this.sidebarCollapsed = true;
  }

  setTitle() {
    this.titleService.setTitle('Scholance | Dashboard')
  }

  toggleSidebarCollapsed() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

}
