import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/shared/shared.module';
import { VitalTaskComponent } from './vital-task.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    VitalTaskComponent,
  ]
})
export class VitalTaskModule { }
