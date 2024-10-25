import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SharedModule } from 'src/shared/shared.module';
import { MenuComponent } from 'src/app/components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    MenuComponent,
  ]
})
export class DashboardModule { }
