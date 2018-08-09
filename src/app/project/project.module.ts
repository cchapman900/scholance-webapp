import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './components/project/create/create-project.component';
import { ProjectService } from './services/project.service';
import { ReactiveFormsModule} from '@angular/forms';
import { AuthModule} from '../user/auth/auth.module';
import { AuthService} from '../user/auth/services/auth.service';
import { AuthGuardService} from '../user/auth/services/auth-guard.service';
import { ProjectsRoutingModule} from './projects-routing.module';
import { ListProjectsComponent } from './components/project/list/list-projects.component';
import { ViewProjectComponent } from './components/project/view/view-project.component';
import { UpdateProjectComponent } from './components/project/update/update-project.component';
import { FileInputComponent } from './components/asset/form/file-input/file-input.component';
import { ViewAssetComponent} from './components/asset/view/view-asset.component';
import { LinkInputComponent } from './components/asset/form/link-input/link-input.component';
import { ListEntriesComponent } from './components/entry/list/list-entries.component';
import { ViewEntryComponent } from './components/entry/view/view-entry.component';
import { SharedModule} from '../shared/shared.module';
import { StudentProjectToolbarComponent } from './components/project/view/student-project-toolbar/student-project-toolbar.component';
import { WorkbenchComponent } from './components/workbench/workbench.component';
import { WorkbenchSidebarComponent} from './components/workbench/sidebar/workbench-sidebar.component';
import { ProjectFormComponent } from './components/project/form/project-form.component';
import { AssetFormComponent } from './components/asset/form/asset-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LiaisonEntryWorkAreaComponent } from './components/entry/view/liaison-work-area/liaison-entry-work-area.component';
import { StudentEntryWorkAreaComponent } from './components/entry/view/student-work-area/student-entry-work-area.component';

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
    FileInputComponent,
    ViewAssetComponent,
    LinkInputComponent,
    ListEntriesComponent,
    ViewEntryComponent,
    StudentProjectToolbarComponent,
    WorkbenchComponent,
    ProjectFormComponent,
    AssetFormComponent,
    WorkbenchSidebarComponent,
    LiaisonEntryWorkAreaComponent,
    StudentEntryWorkAreaComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    ProjectService
  ]
})
export class ProjectModule { }
