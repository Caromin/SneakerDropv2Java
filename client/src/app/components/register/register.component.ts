import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: FormGroup;
unique: boolean;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.newUser = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z0-9]+')]],
      password: [null, [Validators.required]]
    });
  }

  registerUser() {
    // resets value
    this.unique = true;
    const newArr = new Array<string>();
    if (this.newUser.valid) {
      this.usersService.checkForUniqueId().subscribe((results) => {
        newArr.push(results);
        newArr.forEach(index => {
          if (this.newUser.value.username === index) {
            return this.unique = false;
          }
        });
        this.usersService.addUser(this.newUser.value).subscribe(() => {
        });
        this.router.navigateByUrl('/login');
        return null;
      });
    }
  }

  // custom validators
  // if validation passed, then will return null
  // disabled unable to get a error message to display correctly
  // --------------------------------
  // customUsername(control: AbstractControl): {[key: string ]: any} {
  //   const value = control.value;
  //   console.log('inside of the custom username: ' + value);
  //   if (value === 'helloworld') {
  //     return {customUsername: {
  //       valid: false
  //     }};
  //   }
  //   return null;
  // }
}
