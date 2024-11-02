import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Activity, Bell, CalendarDays, ChartColumn, ChartNoAxesGantt, Check, Cog, Dot, LayoutDashboard, LayoutList, LifeBuoy, LockKeyhole, LogOut, LucideAngularModule, Plus, Search, SquareCheckBig, StickyNote, Trash2, User, UserPlus } from 'lucide-angular';

import { HeaderComponent } from '../app/components/header/header.component';
import { MenuComponent } from '..//app/components/menu/menu.component';
import { CardTaskComponent } from 'src/app/components/card-task/card-task.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
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
      Trash2,
      StickyNote
    })
  ],
  declarations: [
    HeaderComponent,
    MenuComponent,
    CardTaskComponent,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    CardTaskComponent,
    LucideAngularModule,
    FormsModule,
  ]
})
export class SharedModule { }
