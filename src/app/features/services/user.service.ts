import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient = inject(HttpClient);

  loadUsers() {
    const url = `https://jsonplaceholder.typicode.com/`;
    return this.httpClient.get(`${url}users`);
  }
}
