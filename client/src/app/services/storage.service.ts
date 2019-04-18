import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private username: string;
  private password: string;
  private errorMessage = new BehaviorSubject<string[]>([]);

  constructor() { }

  public getUsername(): string {
    return this.username;
  }

  public setUsername(username: string): void {
    this.username = username;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(password: string): void {
    this.password = password;
  }

  public getErrorMessage(): Observable<string[]> {
    return this.errorMessage.asObservable();
  }

  public setErrorMessage(errorMessage: string[]): void {
    this.errorMessage.next(errorMessage);
  }
}
