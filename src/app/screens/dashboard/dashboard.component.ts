import { Component } from '@angular/core';
import { Color, ScaleType, ViewDimensions } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

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

  onSelect(event: any) {
    console.log(event);
  }

}
