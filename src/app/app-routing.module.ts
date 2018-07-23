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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
      { path: '', component: DashboardHomeComponent},
      { path: 'profile', component: ProfileComponent, children: [
          {
            path: '',
            component: ViewUserComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'update',
            component: UpdateUserComponent,
            canActivate: [AuthGuard]
          }
        ]
      },
      { path: 'organization', component: ViewOrganizationComponent, children: [
          { path: 'create',
            component: CreateOrganizationComponent,
            canActivate: [ScopeGuard],
            data: {
              expectedScopes: ['manage:organization']
            }
          },
          { path: 'update',
            component: UpdateOrganizationComponent,
            canActivate: [ScopeGuard],
            data: {
              expectedScopes: ['manage:organization']
            }
          }
        ]
      }
    ]},
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
