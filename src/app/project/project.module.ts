import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './components/project/create/create-project.component';
import { ProjectService } from './services/project.service';
import { ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from '../user/auth/auth.module';
import {AuthService} from '../user/auth/services/auth.service';
import {AuthGuardService} from '../user/auth/services/auth-guard.service';
import {ProjectsRoutingModule} from './projects-routing.module';
import { ListProjectsComponent } from './components/project/list/list-projects.component';
import { ViewProjectComponent } from './components/project/view/view-project.component';
import { UpdateProjectComponent } from './components/project/update/update-project.component';
import { CreateAssetComponent } from './components/asset/create/create-asset.component';
import { FileInputComponent } from './components/asset/form/file-input/file-input.component';
import {ViewAssetComponent} from './components/asset/view/view-asset.component';
import { LinkInputComponent } from './components/asset/form/link-input/link-input.component';
import { ListEntriesComponent } from './components/entry/list/list-entries.component';
import { ViewEntryComponent } from './components/entry/view/view-entry.component';
import {SharedModule} from '../shared/shared.module';
import { StudentProjectToolbarComponent } from './components/project/view/student-project-toolbar/student-project-toolbar.component';
import {LiaisonWorkbenchComponent} from '../dashboard/workbench/liaison-workbench/liaison-workbench.component';
import { WorkbenchComponent } from '../dashboard/workbench/workbench.component';
import { ProjectFormComponent } from './components/project/form/project-form.component';
import { AssetFormComponent } from './components/asset/form/asset-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
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
    ViewAssetComponent,
    LinkInputComponent,
    ListEntriesComponent,
    ViewEntryComponent,
    StudentProjectToolbarComponent,
    LiaisonWorkbenchComponent,
    WorkbenchComponent,
    ProjectFormComponent,
    AssetFormComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    ProjectService
  ]
})
export class ProjectModule { }
