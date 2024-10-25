import { NgModule } from '@angular/core';
import { Activity, Bell, CalendarDays, Cog, LayoutDashboard, LayoutList, LifeBuoy, LockKeyhole, LogOut, LucideAngularModule, Search, SquareCheckBig, User } from 'lucide-angular';
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
    })
  ],
  exports: [
    LucideAngularModule
  ]
})
export class SharedModule { }
