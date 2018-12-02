import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormArray, Validators, Form, FormGroup} from '@angular/forms';
import {faPlus, faMinus, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {ProjectService} from '../../../services/project.service';
import {UserService} from '../../../../user/services/user.service';
import {Router} from '@angular/router';
import {Project} from '../../../models/project.model';
import {User} from '../../../../user/models/user.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CreateProjectAgreementComponent} from '../_modals/create-project-agreement/create-project-agreement.component';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  faPlus = faPlus;
  faMinus = faMinus;
  faInfoCircle = faInfoCircle;

  @Input() project: Project;
  @Input() action: string;
  projectForm: FormGroup;
  closeResult: string;

  user: User;

  categories: string[] = [
    'Graphic Design',
    'Marketing',
    'Web Development',
    'Writing',
    'Video & Motion Graphics',
    'Other'
    ];

  mediaTypes: string[] = [
    'Image',
    'Link',
    'Text'
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private projectService: ProjectService,
    private modalService: NgbModal,
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.userService.authenticatedUser$ // TODO: this seems dumb too.
      .subscribe((user) => {
        this.projectForm = this.formBuilder.group({
          _id: [this.project._id || ''],
          title: [this.project.title || '', Validators.required],
          organization: [user.organization._id || ''],
          summary: [this.project.summary || '', Validators.required],
          fullDescription: [this.project.fullDescription || ''],
          category: [this.project.category || '', Validators.required],
          specs: this.formBuilder.array([this.createSpec()]),
          deliverables: this.formBuilder.array([this.createDeliverable()]),
          deadline: [this.project.deadline || '']
        });

        console.log(this.project)

        if (this.project.specs && this.project.specs.length > 0) {
          this.removeSpec(0); // TODO: This is kinda dumb. But having trouble initializing this array
          for (const spec of this.project.specs) {
            this.addSpec(spec)
          }
        }

        if (this.project.deliverables && this.project.deliverables.length > 0) {
          console.log(this.project)
          this.removeDeliverable(0); // TODO: This is kinda dumb. But having trouble initializing this array
          for (const deliverable of this.project.deliverables) {
            this.addDeliverable(deliverable.name, deliverable.mediaType)
          }
        }
      })
  }

  /***************
    SPECS
   ***************/
  get specs() {
    return this.projectForm.get('specs') as FormArray;
  }

  createSpec(spec = null) {
    return this.formBuilder.control(spec || '');
  }

  addSpec(spec = null) {
    // control refers to your formarray
    const control = <FormArray>this.projectForm.controls['specs'];
    // add new formgroup
    control.push(this.createSpec(spec));
    // this.specs.push(this.formBuilder.control(''));
  }

  removeSpec(index: number) {
    // control refers to your formarray
    const control = <FormArray>this.projectForm.controls['specs'];
    // remove the chosen row
    control.removeAt(index);
  }

  /***************
    DELIVERABLES
   ***************/
  get deliverables() {
    return this.projectForm.get('deliverables') as FormArray;
  }

  createDeliverable(name = null, mediaType = null) {
    return this.formBuilder.group({
      name: name || '',
      mediaType: mediaType || ''
    });
  }

  addDeliverable(name = null, mediaType = null) {
    // control refers to your formarray
    const control = <FormArray>this.projectForm.controls['deliverables'];
    // add new formgroup
    control.push(this.createDeliverable(name, mediaType));

    // this.deliverables.push(this.formBuilder.control(''));
  }

  removeDeliverable(index: number) {
    // control refers to your formarray
    const control = <FormArray>this.projectForm.controls['deliverables'];
    // remove the chosen row
    control.removeAt(index);

    // this.deliverables.removeAt(index);
  }


  /**************************
    Create or Update Project
   **************************/

  saveProject() {
    // console.log(this.projectForm.value)
    if (this.action === 'create') {
      this.openCreateProjectAgreement()
    } else if (this.action === 'update') {
      this.updateProject()
    }
  }

  createProject() {
    this.projectService.createProject(this.projectForm.value)
      .subscribe((project) => {
        console.log(project);
        this.router.navigate(['workbench', 'projects', project._id])
      })
  }

  updateProject() {
    this.projectService.updateProject(this.projectForm.value)
      .subscribe((project) => {
        console.log(project);
        this.router.navigate(['workbench', 'projects', project._id])
      })
  }

  openCreateProjectAgreement() {
    this.modalService.open(CreateProjectAgreementComponent, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.createProject();
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
