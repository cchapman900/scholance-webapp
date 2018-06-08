import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import {UpdateUserComponent} from './components/update-user/update-user.component';
import {UpdateOrganizationComponent} from './components/update-organization/update-organization.component';
import {CreateOrganizationComponent} from './components/create-organization/create-organization.component';
import {AuthGuardService as AuthGuard} from './auth/services/auth-guard.service';
import {ScopeGuardService as ScopeGuard} from './auth/services/scope-guard.service';

const usersRoutes: Routes = [
  {
    path: 'users/:id/update',
    component: UpdateUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'organizations/create',
    component: CreateOrganizationComponent,
    canActivate: [ScopeGuard],
    data: {
      expectedScopes: ['manage:organization']
    }
  },
  {
    path: 'organizations/:id/update',
    component: UpdateOrganizationComponent,
    canActivate: [ScopeGuard],
    data: {
      expectedScopes: ['manage:organization']
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
