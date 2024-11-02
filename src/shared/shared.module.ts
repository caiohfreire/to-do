import { NgModule } from '@angular/core';
import { Activity, Bell, CalendarDays, ChartColumn, ChartNoAxesGantt, Check, Cog, Dot, LayoutDashboard, LayoutList, LifeBuoy, LockKeyhole, LogOut, LucideAngularModule, Plus, Search, SquareCheckBig, User, UserPlus } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../app/components/header/header.component';
import { MenuComponent } from '..//app/components/menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CheckboxModule,
    LucideAngularModule.pick({
      User,
      LockKeyhole,
      Bell,
      CalendarDays,
      Search,
      LayoutDashboard,
      Activity,
      SquareCheckBig,
      LayoutList,
      Cog,
      LifeBuoy,
      LogOut,
      UserPlus,
      ChartColumn,
      ChartNoAxesGantt,
      Check,
      Plus,
      Dot,
    })
  ],
  declarations: [
    HeaderComponent,
    MenuComponent,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    LucideAngularModule,
    FormsModule,
    CheckboxModule,
  ]
})
export class SharedModule { }
