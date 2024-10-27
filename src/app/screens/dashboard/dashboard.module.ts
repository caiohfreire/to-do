import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SharedModule } from 'src/shared/shared.module';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { CardTaskComponent } from 'src/app/components/card-task/card-task.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxChartsModule,
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    MenuComponent,
    CardTaskComponent,
  ]
})
export class DashboardModule { }
