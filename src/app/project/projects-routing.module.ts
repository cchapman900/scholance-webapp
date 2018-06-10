import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import {CreateProjectComponent} from './components/create-project/create-project.component';
import {AuthGuardService as AuthGuard} from '../user/auth/services/auth-guard.service';
import {ScopeGuardService as ScopeGuard} from '../user/auth/services/scope-guard.service';
import {ListProjectsComponent} from './components/list-projects/list-projects.component';
import {ViewProjectComponent} from './components/view-project/view-project.component';
import {UpdateProjectComponent} from './components/update-project/update-project.component';

const projectsRoutes: Routes = [
  {
    path: 'projects',
    component: ListProjectsComponent
  },
  {
    path: 'projects/create',
    component: CreateProjectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/:project_id',
    component: ViewProjectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/:project_id/update',
    component: UpdateProjectComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(projectsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsRoutingModule { }
