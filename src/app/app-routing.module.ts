import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CallbackComponent} from './user/auth/components/callback/callback.component';
import {RegisterComponent} from './user/auth/components/register/register.component';
import {LoginComponent} from './user/auth/components/login/login.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
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
