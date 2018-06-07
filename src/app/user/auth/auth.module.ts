import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

import { CallbackComponent } from './components/callback/callback.component';
import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthGuardService} from './services/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    CallbackComponent,
    RegisterComponent
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class AuthModule { }
