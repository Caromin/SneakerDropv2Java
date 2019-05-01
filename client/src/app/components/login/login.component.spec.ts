import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from 'src/app/services/users.service';
import { Observable, of } from 'rxjs';

// class MockService {
//   checkForExistingUser(user) {
//     return of({ username: 'meowmix', password: 'meowmix'});
//   }
// }

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let userService: UsersService;
  let mockUser: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [UsersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = TestBed.createComponent(LoginComponent).componentInstance;
    userService = TestBed.get(UsersService);
    spyOn(component, 'getUser').and.returnValue({ username: 'meowmix', password: 'meowmix'});
    mockUser = { username: 'meowmix', password: 'meowmix'};
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should set the user property to new instance of formBuilder', () => {
    component.ngOnInit();

    expect(component.getUser()).toEqual(mockUser);
  });

  fit('compare user should redirect to userpage on success or error message if failure', () => {
    component.ngOnInit();
    spyOn(userService, 'checkForExistingUser').and.returnValue(of({ username: 'meowmix', password: 'meowmix'}));
    expect(component.compareUser()).toEqual(false);
  });
});
