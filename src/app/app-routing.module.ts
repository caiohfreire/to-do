import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './screens/sign-in/sign-in.component';
import { SignupComponent } from './screens/sign-up/signup.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { VitalTaskComponent } from './screens/vital-task/vital-task.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'vital-task', component: VitalTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
