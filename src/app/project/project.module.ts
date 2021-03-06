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
import { WorkbenchComponent } from '../workbench/workbench.component';
import { WorkbenchSidebarComponent} from '../workbench/sidebar/workbench-sidebar.component';
import { ProjectFormComponent } from './components/project/_forms/project-form/project-form.component';
import { AssetFormComponent } from './components/asset/form/asset-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LiaisonEntryWorkAreaComponent } from './components/entry/view/liaison-work-area/liaison-entry-work-area.component';
import { StudentEntryWorkAreaComponent } from './components/entry/view/student-work-area/student-entry-work-area.component';
import { ProjectSignupAgreementComponent } from './components/project/_modals/project-signup-agreement/project-signup-agreement.component';
import { CreateProjectAgreementComponent } from './components/project/_modals/create-project-agreement/create-project-agreement.component';
import { ListProjectsSmallStudentComponent } from './components/project/list/small/student/list-projects-small-student.component';
import { ListProjectsSmallLiaisonComponent } from './components/project/list/small/liaison/list-projects-small-liaison.component';
import { SupplementalResourceComponent } from './components/project/view/supplemental-resource/supplemental-resource.component';
import { ProjectDiscussionBoardComponent } from './components/discussion-board/project-discussion-board.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DeleteProjectConfirmationComponent} from './components/project/_modals/delete-project-confirmation/delete-project-confirmation.component';
import { SelectProjectSubmissionConfirmationComponent } from './components/project/_modals/select-project-submission-confirmation/select-project-submission-confirmation.component';
import { TextInputComponent } from './components/asset/form/text-input/text-input.component';
import { SupplementalResourceFormComponent } from './components/project/_forms/supplemental-resource-form/supplemental-resource-form.component';
import { AddSupplementalResourceComponent } from './components/project/create/add-supplemental-resource/add-supplemental-resource.component';
import { ConfirmProjectCreationComponent } from './components/project/create/confirm/confirm-project-creation.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FontAwesomeModule,
    NgbModule,
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
    StudentEntryWorkAreaComponent,
    ProjectSignupAgreementComponent,
    CreateProjectAgreementComponent,
    ListProjectsSmallStudentComponent,
    ListProjectsSmallLiaisonComponent,
    SupplementalResourceComponent,
    ProjectDiscussionBoardComponent,
    DeleteProjectConfirmationComponent,
    SelectProjectSubmissionConfirmationComponent,
    TextInputComponent,
    SupplementalResourceFormComponent,
    AddSupplementalResourceComponent,
    ConfirmProjectCreationComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    ProjectService
  ],
  exports: [
    ViewEntryComponent,
    ListProjectsSmallStudentComponent,
    ListProjectsSmallLiaisonComponent
  ],
  entryComponents: [
    ProjectSignupAgreementComponent,
    CreateProjectAgreementComponent,
    DeleteProjectConfirmationComponent,
    SelectProjectSubmissionConfirmationComponent
  ]
})
export class ProjectModule { }
