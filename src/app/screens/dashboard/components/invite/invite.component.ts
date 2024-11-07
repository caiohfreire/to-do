import { Component } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
})
export class InviteComponent {
  visible: boolean = false;

  email: string = '';

  members = [
    {
      "id": 1, "name": "Caio Freire", "email": "caio.freire@icloud.com", "permission": "owner", "image": "https://github.com/caiohfreire.png"
    },
    {
      "id": 2, "name": "Victor Vuelma", "email": "victor.vuelma@gmail.com", "permission": "edit", "image": "https://github.com/victorvuelma.png"
    },
    {
      "id": 4, "name": "Gustavo Salgado", "email": "gustavo.salgado@gmail.com", "permission": "read", "image": "https://github.com/gusgul.png"
    },
  ]

  permissions = [
    { label: 'Owner', value: 'owner' },
    { label: 'Can edit', value: 'edit' },
    { label: 'Just read', value: 'read' },
  ];


  projectLink: string = 'https://sharelinkhereandthere.com/34565yy29';

  constructor() { }

  showDialog() {
    console.log('action')
    this.visible = true;
  }

}
