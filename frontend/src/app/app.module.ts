import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { CommunicationService } from './common/communication.service';
import { UserAccountComponent } from './user-account/user-account.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guards';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ManageBooksComponent,
    UserAccountComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    FormsModule,
    HttpModule
  ],
  providers: [CommunicationService, ValidateService, AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
