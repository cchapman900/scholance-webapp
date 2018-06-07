import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UpdateUserComponent} from './components/update-user/update-user.component';
import {UpdateOrganizationComponent} from './components/update-organization/update-organization.component';
import {CreateOrganizationComponent} from './components/create-organization/create-organization.component';

const usersRoutes: Routes = [
  { path: 'users/:id/update', component: UpdateUserComponent },
  { path: 'organizations/create', component: CreateOrganizationComponent },
  { path: 'organizations/:id/update', component: UpdateOrganizationComponent }
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
