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
    console.log(user);
    return this.http.post<any>(`${this.ROOT_URL}/addUser`, payload, httpOptions);
  }

  checkForUniqueId(): Observable<any> {
    return this.http.get<string>(`${this.ROOT_URL}/users`);
  }

  checkForExistingUser(user): Observable<any> {
    const payload = JSON.stringify(user);
    return this.http.post<any>(`${this.ROOT_URL}/compare`, payload, httpOptions);
  }
}
