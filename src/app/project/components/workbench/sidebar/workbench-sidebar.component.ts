import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../../user/services/user.service';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../models/project.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteProjectConfirmationComponent} from '../../project/_modals/delete-project-confirmation/delete-project-confirmation.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-workbench-sidebar',
  templateUrl: './workbench-sidebar.component.html',
  styleUrls: [
    '../../../../../assets/css/sidebar.css',
    './workbench-sidebar.component.css'
  ]
})
export class WorkbenchSidebarComponent implements OnInit {
  @Input() project: Project;
  @Input() showSidebar: boolean;
  closeResult: string;

  constructor(
    private projectService: ProjectService,
    public userService: UserService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
  }

  deleteProject() {
    this.projectService.deleteProject(this.project._id)
      .subscribe(() => {
        this.router.navigate(['dashboard'])
      })
  }

  openDeleteProjectConfirmation() {
    this.modalService.open(DeleteProjectConfirmationComponent, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.deleteProject();
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
