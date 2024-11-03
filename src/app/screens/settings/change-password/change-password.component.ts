import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: [
    './change-password.component.scss',
     '../settings.component.scss'
    ]
})
export class ChangePasswordComponent implements OnInit {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor() { }

  ngOnInit() {
  }

}
