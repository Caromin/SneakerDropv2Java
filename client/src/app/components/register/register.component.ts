import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private newUser: FormGroup;
  private username: string;
  private message: string[];

  constructor(private formBuilder: FormBuilder, 
    private usersService: UsersService, 
    private router: Router,
    private storageService: StorageService) { }

  ngOnInit() {
    this.newUser = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z0-9]+')]],
      password: [null, [Validators.required]]
    });
  }

  registerUser() {
    this.username = this.newUser.value.username.trim();
    this.storageService.setErrorMessage([]);

    if (this.newUser.valid) {
      this.usersService.checkForUniqueUsername(this.username).subscribe((result) => {
        // true means already exists
        if (result) {
          this.message = ["Username already exists!"];
          console.log(this.message);
          this.storageService.setErrorMessage(this.message);
        } else {
          this.usersService.addUser(this.newUser.value).subscribe((result) => {
            // true means successfully saved
            if (result) {
              this.message = ["User successfully saved"];
              console.log(this.message);
              this.storageService.setErrorMessage(this.message);
              setTimeout(() => this.router.navigateByUrl('/login'),2500);
            } else {
              this.message = ["An Error occured while trying to save user"];
              console.log(this.message);
              this.storageService.setErrorMessage(this.message);
            }
          });
        }
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
