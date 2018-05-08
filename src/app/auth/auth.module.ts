import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AuthService} from './auth.service';

import { CallbackComponent } from './components/callback/callback.component';
import {LoginComponent} from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    LoginComponent,
    CallbackComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
