import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserService } from './user.service';
import { ProgramService } from './program.service';
import { ExerciseService } from './exercise.service';

import { AppComponent } from './app.component';

import { AppRoutingModule }  from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProgramComponent } from './create-program/create-program.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { LogComponent } from './log/log.component';
import { FinishedProgramComponent } from './finished-program/finished-program.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateProgramComponent,
    RegisterComponent,
    LoginComponent,
    AddExerciseComponent,
    LogComponent,
    FinishedProgramComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserService, ProgramService, ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
