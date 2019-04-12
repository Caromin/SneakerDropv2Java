import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: FormGroup;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) { }

  ngOnInit() {
    this.newUser = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(6)]],
      password: [null, [Validators.required]]
    });
  }

  registerUser() {
    if (this.newUser.valid) {
      this.usersService.addUser(this.newUser.value).subscribe((results) => {
        console.log('successfully added');
      });
    }
  }
}
