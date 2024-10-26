import { NgModule } from '@angular/core';
import { Activity, Bell, CalendarDays, ChartColumn, ChartNoAxesGantt, Check, Cog, Dot, LayoutDashboard, LayoutList, LifeBuoy, LockKeyhole, LogOut, LucideAngularModule, Plus, Search, SquareCheckBig, User, UserPlus } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
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
  exports: [
    LucideAngularModule
  ]
})
export class SharedModule { }
