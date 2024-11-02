import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import 'dayjs/locale/en';
dayjs.locale('en');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  day: string = '';
  date: string = '';

  constructor() { }

  ngOnInit() {
    this.day = dayjs().format('dddd');
    this.date = dayjs().format('DD/MM/YYYY');
  }
}
