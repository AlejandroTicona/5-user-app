import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [{
    id: 1,
    name: 'Alejandro',
    lastname: 'Ticona',
    email: 'ale@gmail.com',
    username: 'aletic',
    password: '12345'
  },
  {
    id: 2,
    name: 'Josefa',
    lastname: 'Doe',
    email: 'pepa@gmail.com',
    username: 'pepaa1',
    password: '1232'
  }];

  constructor() { }

  findAll(): Observable<User[]> {
    return of(this.users);
  }
}
