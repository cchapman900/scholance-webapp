import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../../models/project.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Entry} from '../../../../models/entry.model';
import {ProjectService} from '../../../../services/project.service';

@Component({
  selector: 'app-student-entry-work-area',
  templateUrl: './student-entry-work-area.component.html',
  styleUrls: ['./student-entry-work-area.component.css']
})
export class StudentEntryWorkAreaComponent implements OnInit {
  @Input() project: Project;
  @Input() entry: Entry;

  submissionStatuses = [
    'active',
    'submitted'
  ];

  entryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.entryForm = this.formBuilder.group({
      _id: [this.entry.student._id],
      commentary: [this.entry.commentary || ''],
      submissionStatus: [this.entry.submissionStatus]
    });
    console.log(this.entry);
  }

  saveEntry() {
    this.projectService.updateEntrySubmissionStatus(this.project._id, this.entryForm.value)
      .subscribe((response) => {
        console.log(response);
      })
  }

}
