import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from 'src/shared/shared.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxChartsModule,
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
