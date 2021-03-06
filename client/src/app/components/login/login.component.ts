import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: FormGroup;
  private message: string[];

  getUser() {
    return this.user;
  }
  setUser(user) {
      this.user = user;
  }

  getMessage() {
    return this.message;
  }

  setMessage(message) {
    this.message = message;
  }

  constructor(
    private storageService: StorageService,
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private authService: AuthGuardService,
    private router: Router) { }

  // error shows at the start, because there are validators onInit
  ngOnInit() {
    this.user = this.formBuilder.group({
      username: [null, [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      password: [null, [Validators.required]]
    });
  }

  compareUser(): boolean {
    const user = this.user.value;
    this.userService.checkForExistingUser(user).subscribe(result => {
      if (result === null) {
        this.message = ['There was an issue with the username or password'];
        this.updateMessage(this.message);
        this.authService.checkLogin(false);
      } else {
        this.message = [];
        this.updateMessage(this.message);
        this.authService.checkLogin(true);
        this.router.navigateByUrl('/user');
      }
    },
    error => {
      this.message = ['There is a problem with the server, please try again later.'];
      this.updateMessage(this.message);
      return false;
    });
    return true;
  }

  updateMessage(messages: string[]) {
    this.storageService.setErrorMessage(messages);
  }

}
