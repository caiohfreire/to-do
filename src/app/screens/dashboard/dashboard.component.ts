import { Component, ViewChild } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

import { InviteComponent } from './components/invite/invite.component';
import { DashboardModule } from './dashboard.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [DashboardModule]
})
export class DashboardComponent {
  @ViewChild(InviteComponent) inviteDialog!: InviteComponent;

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

  onSelect(event: any) {
    console.log(event);
  }

}
