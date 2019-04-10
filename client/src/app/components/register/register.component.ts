import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  registerUser() {
    console.log('this user was submitted: ' +  this.newUser + ' password: ' + this.password );
  }
}
