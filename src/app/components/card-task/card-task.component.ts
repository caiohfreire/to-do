import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss']
})
export class CardTaskComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() priority!: string;
  @Input() status!: string;
  @Input() createdOn!: string;

  checked: boolean = false;

  constructor() { }

}
