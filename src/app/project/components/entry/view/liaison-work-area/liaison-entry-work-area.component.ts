import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../../../services/project.service';
import {Project} from '../../../../models/project.model';
import {Entry} from '../../../../models/entry.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SelectProjectSubmissionConfirmationComponent} from '../../../project/_modals/select-project-submission-confirmation/select-project-submission-confirmation.component';

@Component({
  selector: 'app-liaison-entry-work-area',
  templateUrl: './liaison-entry-work-area.component.html',
  styleUrls: ['./liaison-entry-work-area.component.css']
})
export class LiaisonEntryWorkAreaComponent implements OnInit {
  @Input() project: Project;
  @Input() entry: Entry;
  closeResult: string;

  constructor(
    private projectService: ProjectService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  selectEntry() {
    this.projectService.updateProjectStatus(this.project._id, 'complete', this.entry.student._id)
      .subscribe(() => {
        location.reload()
      })
  }

  openSelectEntryConfirmation() {
    this.modalService.open(SelectProjectSubmissionConfirmationComponent, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.selectEntry();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
