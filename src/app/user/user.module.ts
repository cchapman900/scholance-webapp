import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';

import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthModule
  ],
  declarations: [],
  providers: [
    UserService
  ]
})
export class UserModule { }
