import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ProjectService } from './services/project.service';
import {FormsModule} from '@angular/forms';
import {AuthModule} from '../user/auth/auth.module';
import {AuthService} from '../user/auth/services/auth.service';
import {AuthGuardService} from '../user/auth/services/auth-guard.service';
import {ProjectsRoutingModule} from './projects-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthModule,
    ProjectsRoutingModule
  ],
  declarations: [
    CreateProjectComponent],
  providers: [
    AuthService,
    AuthGuardService,
    ProjectService
  ]
})
export class ProjectModule { }
