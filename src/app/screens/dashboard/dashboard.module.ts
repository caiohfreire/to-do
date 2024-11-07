import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from 'src/shared/shared.module';
import { InviteComponent } from './components/invite/invite.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxChartsModule,
  ],
  declarations: [
    InviteComponent
  ],
  exports: [
    CommonModule,
    SharedModule,
    NgxChartsModule,
    InviteComponent
  ]
})
export class DashboardModule { }
