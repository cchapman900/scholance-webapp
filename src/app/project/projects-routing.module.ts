import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import {CreateProjectComponent} from './components/project/create/create-project.component';
import {AuthGuardService as AuthGuard} from '../user/auth/services/auth-guard.service';
import {ScopeGuardService as ScopeGuard} from '../user/auth/services/scope-guard.service';
import {ListProjectsComponent} from './components/project/list/list-projects.component';
import {ViewProjectComponent} from './components/project/view/view-project.component';
import {UpdateProjectComponent} from './components/project/update/update-project.component';
import {ViewEntryComponent} from './components/entry/view/view-entry.component';
import {WorkbenchComponent} from '../workbench/workbench.component';
import {ListEntriesComponent} from './components/entry/list/list-entries.component';
import {ProjectDiscussionBoardComponent} from './components/discussion-board/project-discussion-board.component';
import {AddSupplementalResourceComponent} from './components/project/create/add-supplemental-resource/add-supplemental-resource.component';
import {ConfirmProjectCreationComponent} from './components/project/create/confirm/confirm-project-creation.component';

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
    path: 'projects/create/:project_id/supplemental-resources',
    component: AddSupplementalResourceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/create/:project_id/confirm',
    component: ConfirmProjectCreationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/:project_id',
    component: ViewProjectComponent
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
  },
  { path: 'workbench', component: WorkbenchComponent, canActivate: [AuthGuard], children: [
      { path: 'projects/:project_id', children: [
          { path: '', component: ViewProjectComponent },
          { path: 'discussion-board', component: ProjectDiscussionBoardComponent},
          { path: 'submission', component: ViewEntryComponent},
          { path: 'submissions', children: [
            { path: '', component: ListEntriesComponent },
            { path: ':entry_id', component: ViewEntryComponent }
            ]
          }]
      }
    ]
  },
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
