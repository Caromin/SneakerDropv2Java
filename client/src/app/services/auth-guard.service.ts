import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, Route, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  private isLoggedIn: boolean;

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isLoggedIn;
  }

  checkLogin(validUser): boolean {
    if (validUser === true) {
      this.isLoggedIn = validUser;
      console.log('access ALLOWED');
      return true;
    }
    console.log('access DENIED');
    this.isLoggedIn = false;
    return false;
  }
}
