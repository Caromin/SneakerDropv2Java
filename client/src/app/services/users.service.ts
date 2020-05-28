import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  ROOT_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<any> {
    const payload = JSON.stringify(user);
    return this.http.post<any>(`${this.ROOT_URL}/addUser`, payload, httpOptions);
  }

  checkForUniqueUsername(username: string): Observable<any> {
    const payload = JSON.stringify(username);
    return this.http.post<string>(`${this.ROOT_URL}/users/exists`, payload, httpOptions);
  }

  checkForExistingUser(user: any): Observable<any> {
    const payload = JSON.stringify(user);
    return this.http.post<any>(`${this.ROOT_URL}/compare`, payload, httpOptions);
  }
}
