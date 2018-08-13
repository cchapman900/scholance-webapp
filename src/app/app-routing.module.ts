import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CallbackComponent} from './user/auth/components/callback/callback.component';
import {RegisterComponent} from './user/auth/components/register/register.component';
import {LoginComponent} from './user/auth/components/login/login.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardHomeComponent} from './dashboard/home/dashboard-home.component';
import {UpdateOrganizationComponent} from './user/components/organization/update/update-organization.component';
import {ScopeGuardService as ScopeGuard} from './user/auth/services/scope-guard.service';
import {CreateOrganizationComponent} from './user/components/organization/create/create-organization.component';
import {UpdateUserComponent} from './user/components/user/update/update-user.component';
import {AuthGuardService as AuthGuard} from './user/auth/services/auth-guard.service';
import {ProfileComponent} from './dashboard/profile/profile.component';
import {ViewUserComponent} from './user/components/user/view/view-user.component';
import {ViewOrganizationComponent} from './user/components/organization/view/view-organization.component';
import {PortfolioComponent} from './user/components/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
      { path: '', component: DashboardHomeComponent},
      { path: 'profile', component: ProfileComponent, children: [
          {
            path: '',
            component: ViewUserComponent
          },
          {
            path: 'update',
            component: UpdateUserComponent
          }
        ]
      },
      { path: 'organization', canActivate: [ScopeGuard], data: {expectedScopes: ['manage:organization']}, children: [
          {
            path: '',
            component: ViewOrganizationComponent,
          },
          {
            path: 'create',
            component: CreateOrganizationComponent,
          },
          {
            path: 'update',
            component: UpdateOrganizationComponent,
          }
        ]
      },
    ]
  },
  // These should probably be in a Users Routing module
  { path: 'users', children: [
      { path: ':user_id', component: ViewUserComponent },
      { path: ':user_id/update', component: UpdateUserComponent, canActivate: [AuthGuard] },
      { path: ':user_id/portfolio', component: PortfolioComponent }
    ]
  },
  { path: 'organizations', children: [
      {path: 'create', component: CreateOrganizationComponent},
      {path: ':organization_id', component: ViewOrganizationComponent},
    ]
  },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
