import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users = [
    {
      id: 1,
      nome: "Paolo"
    },
    {
      id: 2,
      nome: "Laura"
    },
    {
      id:3,
      nome: "Anna"
    },
    {
      id:4,
      nome: "Luca"
    }
  ]

}
