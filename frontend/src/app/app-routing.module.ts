import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'manage-books',      component: ManageBooksComponent },
  { path: 'register',      component: RegisterComponent },
  { path: 'user-account',      component: UserAccountComponent },
  { path: 'login', component: LoginComponent }
 
];