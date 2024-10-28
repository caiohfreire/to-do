import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
