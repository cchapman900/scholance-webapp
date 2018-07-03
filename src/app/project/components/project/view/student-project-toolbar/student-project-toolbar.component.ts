import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../../../services/project.service';

@Component({
  selector: 'app-student-project-toolbar',
  templateUrl: './student-project-toolbar.component.html',
  styleUrls: ['./student-project-toolbar.component.css']
})
export class StudentProjectToolbarComponent implements OnInit {
  @Input() studentIsRegisteredForProject: boolean;
  @Input() project_id: string;
  @Input() user_id: string;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
  }

  projectSignup(): void {
    this.projectService.createEntry(this.project_id)
      .subscribe((project) => {
        console.log(project)
      })
  }

  projectSignoff(): void {
    this.projectService.deleteEntry(this.project_id, this.user_id)
      .subscribe((project) => {
        console.log(project)
      })
  }

}
