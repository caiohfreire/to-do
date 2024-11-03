import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './screens/sign-in/sign-in.component';
import { SignupComponent } from './screens/sign-up/signup.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { VitalTaskComponent } from './screens/vital-task/vital-task.component';
import { SettingsComponent } from './screens/settings/settings.component';
import { ChangePasswordComponent } from './screens/settings/change-password/change-password.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'vital-task', component: VitalTaskComponent },
  // { path: 'settings', component: SettingsComponent },
  // { path: 'settings/change-password', component: ChangePasswordComponent },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      { path: 'change-password', component: ChangePasswordComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
