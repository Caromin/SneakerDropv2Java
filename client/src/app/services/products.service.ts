import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  ROOT_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getRecentProducts(): Observable<any> {
    return this.http.get(`${this.ROOT_URL}/recent`);
  }
}
