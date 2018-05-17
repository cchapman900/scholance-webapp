import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';

import { UserService } from './user.service';
import { UpdateUserComponent } from './components/update/update-user.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthModule,
    UsersRoutingModule
  ],
  declarations: [
    UpdateUserComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
