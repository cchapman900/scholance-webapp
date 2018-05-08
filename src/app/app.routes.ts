import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
