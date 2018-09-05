///<reference path="../../../node_modules/@fortawesome/free-brands-svg-icons/index.d.ts"/>
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin);
library.add(faTwitter);
library.add(faInstagram);

import { AuthModule } from './auth/auth.module';

import { UserService } from './services/user.service';
import { UpdateUserComponent } from './components/user/update/update-user.component';
import {UpdateOrganizationComponent} from './components/organization/update/update-organization.component';
import {OrganizationService} from './services/organization.service';
import {CreateOrganizationComponent} from './components/organization/create/create-organization.component';
import {AuthService} from './auth/services/auth.service';
import {AuthGuardService} from './auth/services/auth-guard.service';
import {ScopeGuardService} from './auth/services/scope-guard.service';
import { ViewUserComponent } from './components/user/view/view-user.component';
import { ViewOrganizationComponent } from './components/organization/view/view-organization.component';
import {RouterModule} from '@angular/router';
import { ViewUserLiaisonComponent } from './components/user/view/liaison/view-user-liaison.component';
import { ViewUserStudentComponent } from './components/user/view/student/view-user-student.component';
import { OrganizationFormComponent } from './components/organization/form/organization-form.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import {ProjectModule} from '../project/project.module';
import { UpdatePortfolioComponent } from './components/portfolio/update/update-portfolio.component';
import { TermsOfServiceComponent } from './auth/components/register/terms-of-service/terms-of-service.component';
import { ForgotPasswordConfirmationComponent } from './auth/components/forgot-password/confirmation/forgot-password-confirmation.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AuthModule,
    FontAwesomeModule,
    ProjectModule
  ],
  declarations: [
    CreateOrganizationComponent,
    UpdateOrganizationComponent,
    ViewUserComponent,
    UpdateUserComponent,
    ViewOrganizationComponent,
    ViewUserLiaisonComponent,
    ViewUserStudentComponent,
    OrganizationFormComponent,
    PortfolioComponent,
    UpdatePortfolioComponent,
    ForgotPasswordConfirmationComponent
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
