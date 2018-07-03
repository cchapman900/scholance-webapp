import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import {CreateProjectComponent} from './components/project/create/create-project.component';
import {AuthGuardService as AuthGuard} from '../user/auth/services/auth-guard.service';
import {ScopeGuardService as ScopeGuard} from '../user/auth/services/scope-guard.service';
import {ListProjectsComponent} from './components/project/list/list-projects.component';
import {ViewProjectComponent} from './components/project/view/view-project.component';
import {UpdateProjectComponent} from './components/project/update/update-project.component';
import {ViewEntryComponent} from './components/entry/view/view-entry.component';

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
  },
  {
    path: 'projects/:project_id/entries/:entry_id',
    component: ViewEntryComponent,
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
