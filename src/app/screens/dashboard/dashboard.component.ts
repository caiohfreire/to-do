import { Component, ViewChild } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

import { DashboardModule } from './dashboard.module';
import { InviteComponent } from './components/invite/invite.component';
import { TaskDialogComponent } from 'src/app/components/task-dialog/task-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [DashboardModule]
})
export class DashboardComponent {
  @ViewChild(InviteComponent) inviteDialog!: InviteComponent;
  @ViewChild(TaskDialogComponent) taskDialog!: TaskDialogComponent;

  single = [
    {
      "name": "Not Started",
      "value": 1
    },
    {
      "name": "In Progress",
      "value": 2
    },
    {
      "name": "Completed",
      "value": 2
    },
  ];

  view: [number, number] = [490, 180];

  colorScheme: Color = {
    domain: ['#F21E1E', '#0225FF', '#05A301'],
    name: '',
    selectable: false,
    group: ScaleType.Ordinal
  };

  constructor() { }

  showInvites() {
    this.inviteDialog.showDialog();
  }

  showTaskDialog() {
    this.taskDialog.showDialog();
  }

  onSelect(event: any) {
    console.log(event);
  }

}
