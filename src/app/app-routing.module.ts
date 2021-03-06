import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent }   from './dashboard/dashboard.component';
import { CreateProgramComponent }   from './create-program/create-program.component';
import { RegisterComponent }   from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { FinishedProgramComponent } from './finished-program/finished-program.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'programs',  component: CreateProgramComponent },
  { path: 'finished',  component: FinishedProgramComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'exercises',  component: AddExerciseComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}