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
    { name: 'muhammad', age: 25, job: 'student' },
    { name: 'abdelhay', age: 55, job: 'doctor' },
    { name: 'youssef', age: 26, job: 'engineer' },
    { name: 'ali', age: 24 },
    { name: 'samir', age: 22, job: 'developer' },
  ];


  receiveMessage(msg) {
    this.message = msg;
  }
}
