import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

import { CallbackComponent } from './components/callback/callback.component';
import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthGuardService} from './services/auth-guard.service';
import {TermsOfServiceComponent} from './components/register/terms-of-service/terms-of-service.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    CallbackComponent,
    RegisterComponent,
    TermsOfServiceComponent
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  entryComponents: [TermsOfServiceComponent]
})
export class AuthModule { }
