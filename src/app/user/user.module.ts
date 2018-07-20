import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';

import { UserService } from './services/user.service';
import { UpdateUserComponent } from './components/user/update/update-user.component';
import {UpdateOrganizationComponent} from './components/organization/update-organization/update-organization.component';
import {OrganizationService} from './services/organization.service';
import {CreateOrganizationComponent} from './components/organization/create-organization/create-organization.component';
import {AuthService} from './auth/services/auth.service';
import {AuthGuardService} from './auth/services/auth-guard.service';
import {ScopeGuardService} from './auth/services/scope-guard.service';
import { ViewUserComponent } from './components/user/view/view-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthModule
  ],
  declarations: [
    CreateOrganizationComponent,
    UpdateOrganizationComponent,
    ViewUserComponent,
    UpdateUserComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    ScopeGuardService,
    UserService,
    OrganizationService
  ],
  exports: [
    ViewUserComponent,
    UpdateUserComponent
  ]
})
export class UserModule { }
