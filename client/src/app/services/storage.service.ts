import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  username: string;
  password: string;

  constructor() { }

  loginUser(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
