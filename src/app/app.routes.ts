import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/auth/components/login/login.component';
import { CallbackComponent } from './user/auth/components/callback/callback.component';
import { RegisterComponent } from './user/auth/components/register/register.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
