import { Injectable } from '@angular/core';
import { RegisterUser } from '../Models/registerModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public Users: RegisterUser[] = [];

  constructor() { }

  get UsersList(): RegisterUser[] {
    return this.Users;
  }

  addUser(User: RegisterUser): void {
    this.Users.push(User);
  }
}
