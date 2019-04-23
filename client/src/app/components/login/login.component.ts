import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'src/app/services/storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: FormGroup;
  private message: string[];

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.user = this.formBuilder.group({
      username: [null, [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      password: [null, [Validators.required]]
    });
  }

  compareUser() {
    const user = this.user.value;
    this.userService.checkForExistingUser(user).subscribe(result => {

      if (result === null) {
        this.message = ['The username or the password was incorrect'];
        this.updateMessage(this.message);
      } else {
        this.message = [];
        this.updateMessage(this.message);
        this.router.navigateByUrl('/user');
      }
    });
  }

  updateMessage(messages: string[]) {
    this.storageService.setErrorMessage(messages);
  }

}
