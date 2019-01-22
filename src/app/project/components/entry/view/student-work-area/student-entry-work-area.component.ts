import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../../models/project.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Entry} from '../../../../models/entry.model';
import {ProjectService} from '../../../../services/project.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-student-entry-work-area',
  templateUrl: './student-entry-work-area.component.html',
  styleUrls: ['./student-entry-work-area.component.css']
})
export class StudentEntryWorkAreaComponent implements OnInit {
  @Input() project: Project;
  @Input() entry: Entry;

  showAssetForm = false;

  submissionStatuses = [
    'active',
    'draft',
    'submitted'
  ];

  entryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    public titlecase: TitleCasePipe
  ) { }

  ngOnInit() {
    this.entryForm = this.formBuilder.group({
      _id: [this.entry.student._id],
      commentary: [this.entry.commentary || ''],
      submissionStatus: [this.entry.submissionStatus]
    });
  }

  onSubmit() {
    if (this.entryForm.value.submissionStatus === 'submitted' &&
      !confirm('By setting this submission to "submitted", it will be live to the organization liaison. Are you sure?')) {
      this.entryForm.value.submissionStatus = 'draft';
      return;
    }
    this.projectService.updateEntry(this.project._id, this.entryForm.value)
      .subscribe((response) => {

      })
  }

}
