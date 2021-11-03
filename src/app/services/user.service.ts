import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users = [];

  constructor() {
    this.users = [
      {
        name: 'Andrey',
        lastName: 'Osipik',
      },
      {
        name: 'Artem',
        lastName: 'Vlas',
      },
      {
        name: 'Artem',
        lastName: 'Vlas',
      },
      {
        name: 'Artem',
        lastName: 'Vlas',
      },
      {
        name: 'Artem',
        lastName: 'Vlas',
      },
      {
        name: 'Artem',
        lastName: 'Vlas',
      },
    ];
  }

  public getUsers() {
    return this.users;
  }
}
