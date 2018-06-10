import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import {CreateProjectComponent} from './components/create-project/create-project.component';
import {AuthGuardService as AuthGuard} from '../user/auth/services/auth-guard.service';
import {ScopeGuardService as ScopeGuard} from '../user/auth/services/scope-guard.service';

const projectsRoutes: Routes = [
  {
    path: 'projects/create',
    component: CreateProjectComponent,
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
