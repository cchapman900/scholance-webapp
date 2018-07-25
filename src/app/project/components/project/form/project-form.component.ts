import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormArray, Validators, Form} from '@angular/forms';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import {ProjectService} from '../../../services/project.service';
import {UserService} from '../../../../user/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  faPlus = faPlus;
  faMinus = faMinus;
  categories: string[] = [
    'Graphic Design',
    'Marketing',
    'Web Development',
    'Writing',
    'Video & Motion Graphics',
    'Other'
    ];

  projectForm = this.formBuilder.group({
    title: ['', Validators.required],
    organization: this.formBuilder.group({
      _id: this.userService.authenticatedUser.organization._id,
      name: this.userService.authenticatedUser.organization.name
    }),
    summary: ['', Validators.required],
    fullDescription: [''],
    category: ['', Validators.required],
    specs: this.formBuilder.array([
      this.formBuilder.control('')
    ]),
    deliverables: this.formBuilder.array([
      this.formBuilder.control('')
      // TODO: Figure out how to do nested arrays
    ]),
    deadline: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private projectService: ProjectService,
    private userService: UserService
  ) { }

  get specs() {
    return this.projectForm.get('specs') as FormArray;
  }

  get deliverables() {
    return this.projectForm.get('deliverables') as FormArray;
  }

  addSpec() {
    this.specs.push(this.formBuilder.control(''));
  }

  addDeliverable() {
    this.deliverables.push(this.formBuilder.control(''));
  }

  removeSpec(index) {
    this.specs.removeAt(index);
  }

  removeDeliverable(index) {
    this.deliverables.removeAt(index);
  }

  ngOnInit() {
  }

  saveProject() {
    this.projectService.createProject(this.projectForm.value)
      .subscribe((project) => {
        console.log(project);
        this.router.navigate(['dashboard', 'projects', project._id])
      })
  }



}
