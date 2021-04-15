import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
  
})
export class UsersComponent {

  message: string;

  users: User[] = [
    { name: 'youssef', age: 26, job: 'engineer' },
    { name: 'muhammad', age: 25, job: 'student' },
  ];


  receiveMessage(msg) {
    this.message = msg;
  }
}
