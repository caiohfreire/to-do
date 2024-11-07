import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  Activity,
  Bell,
  CalendarDays,
  ChartColumn,
  ChartNoAxesGantt,
  Check,
  ChevronDown,
  Cog,
  Dot,
  LayoutDashboard,
  LayoutList,
  LifeBuoy,
  LockKeyhole,
  LogOut,
  LucideAngularModule,
  Plus,
  Search,
  SquareCheckBig,
  StickyNote,
  Trash2,
  User,
  UserPlus
} from 'lucide-angular';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

import { HeaderComponent } from '../app/components/header/header.component';
import { MenuComponent } from '..//app/components/menu/menu.component';
import { CardTaskComponent } from 'src/app/components/card-task/card-task.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FloatLabelModule,
    InputTextModule,
    DialogModule,
    DropdownModule,
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
      StickyNote,
      ChevronDown
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
    FloatLabelModule,
    InputTextModule,
    DialogModule,
    DropdownModule,
    LucideAngularModule,
    FormsModule,
  ]
})
export class SharedModule { }
