import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitleCasePipe } from '@angular/common';

import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { ProjectModule} from './project/project.module';
import { NavbarComponent} from './shared/components/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard/home/dashboard-home.component';
import { DashboardSidebarComponent } from './dashboard/sidebar/dashboard-sidebar.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { MessageService } from './messages/message.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    DashboardHomeComponent,
    DashboardSidebarComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    UserModule,
    ProjectModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    SharedModule
  ],
  providers: [TitleCasePipe, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
