import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../../../services/project.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProjectSignupAgreementComponent} from './project-signup-agreement/project-signup-agreement.component';
import {UserService} from '../../../../../user/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-project-toolbar',
  templateUrl: './student-project-toolbar.component.html',
  styleUrls: ['./student-project-toolbar.component.css']
})
export class StudentProjectToolbarComponent implements OnInit {
  @Input() project_id: string;
  closeResult: string;
  studentIsRegisteredForProject: boolean;

  constructor(
    private userService: UserService,
    private projectService: ProjectService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
    this.studentIsRegisteredForProject = this.userService.authenticatedUser.projects.some((project) => {
      return project._id === this.project_id;
    });
  }

  projectSignup(): void {
    this.projectService.createEntry(this.project_id)
      .subscribe((project) => {
        console.log(project)
        this.router.navigate(['workbench', 'projects', this.project_id])
      })
  }

  projectSignoff(): void {
    if (confirm('Are you sure you want to sign off of this project? Any work you have submitted will be deleted.')) {
      this.projectService.deleteEntry(this.project_id, this.userService.authenticatedUser._id)
        .subscribe(() => {
          this.router.navigate(['projects', this.project_id])
        })
    }
  }

  openSignupAgreement() {
    this.modalService.open(ProjectSignupAgreementComponent, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.projectSignup();
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
