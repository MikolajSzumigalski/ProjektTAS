import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {appRoutes} from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './common/header.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { CommunicationService } from './common/communication.service';
import { Http, Response} from '@angular/http'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ManageBooksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), 
    FormsModule,
    HttpModule,
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
