import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';

import { UserService } from './services/user.service';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UsersRoutingModule } from './users-routing.module';
import {UpdateOrganizationComponent} from './components/update-organization/update-organization.component';
import {OrganizationService} from './services/organization.service';
import {CreateOrganizationComponent} from './components/create-organization/create-organization.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthModule,
    UsersRoutingModule
  ],
  declarations: [
    UpdateUserComponent,
    CreateOrganizationComponent,
    UpdateOrganizationComponent
  ],
  providers: [
    UserService,
    OrganizationService
  ]
})
export class UserModule { }
