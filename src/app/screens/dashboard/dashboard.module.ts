import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from 'src/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { CardTaskComponent } from 'src/app/components/card-task/card-task.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxChartsModule,
  ],
  declarations: [
    DashboardComponent,
    CardTaskComponent,
  ]
})
export class DashboardModule { }
