import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserAccountComponent } from './user-account/user-account.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'register',      component: RegisterComponent },
  { path: 'user-account',      component: UserAccountComponent }
];