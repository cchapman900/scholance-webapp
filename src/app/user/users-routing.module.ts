import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UpdateUserComponent} from './components/update/update-user.component';

const usersRoutes: Routes = [
  { path: 'users/:id/update', component: UpdateUserComponent }
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
