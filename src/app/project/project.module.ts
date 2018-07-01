import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './components/project/create/create-project.component';
import { ProjectService } from './services/project.service';
import {FormsModule} from '@angular/forms';
import {AuthModule} from '../user/auth/auth.module';
import {AuthService} from '../user/auth/services/auth.service';
import {AuthGuardService} from '../user/auth/services/auth-guard.service';
import {ProjectsRoutingModule} from './projects-routing.module';
import { ListProjectsComponent } from './components/project/list/list-projects.component';
import { ViewProjectComponent } from './components/project/view/view-project.component';
import { UpdateProjectComponent } from './components/project/update/update-project.component';
import { CreateAssetComponent } from './components/asset/create/create-asset.component';
import { FileInputComponent } from './components/asset/create/file-input/file-input.component';
import { UpdateEntryComponent } from './components/entry/update/update-entry.component';
import {ViewAssetComponent} from './components/asset/view/view-asset.component';
import { LinkInputComponent } from './components/asset/create/link-input/link-input.component';
import { ListEntriesComponent } from './components/entry/list/list-entries.component';
import { ViewEntryComponent } from './components/entry/view/view-entry.component';
import {SharedModule} from '../shared/shared.module';
import { StudentProjectToolbarComponent } from './components/project/view/student-project-toolbar/student-project-toolbar.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    AuthModule,
    ProjectsRoutingModule
  ],
  declarations: [
    CreateProjectComponent,
    ListProjectsComponent,
    ViewProjectComponent,
    UpdateProjectComponent,
    CreateAssetComponent,
    FileInputComponent,
    UpdateEntryComponent,
    ViewAssetComponent,
    LinkInputComponent,
    ListEntriesComponent,
    ViewEntryComponent,
    StudentProjectToolbarComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    ProjectService
  ]
})
export class ProjectModule { }
