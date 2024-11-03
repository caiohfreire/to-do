import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { SharedModule } from 'src/shared/shared.module';
import { ChangePasswordModule } from './change-password/change-password.module';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ChangePasswordModule
  ],
  declarations: [
    SettingsComponent,
    ChangePasswordComponent
  ]
})
export class SettingsModule { }
