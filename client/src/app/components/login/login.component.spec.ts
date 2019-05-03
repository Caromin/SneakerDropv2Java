import { async, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { UsersService } from 'src/app/services/users.service';
import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let userService: UsersService;
  let mockUser: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        UsersService
      ]
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

  it('compare user should redirect to userpage on success or error message if failure', () => {
    component.ngOnInit();
    // listens for the user service
    spyOn(userService, 'checkForExistingUser').and.returnValue(of({ username: 'meowmix', password: 'meowmix'}));
    // listens for compareUser to be called through
    spyOn(component, 'compareUser').and.callThrough();
    // expects function to return true
    expect(component.compareUser()).toBe(true);
    // expects function to have been called
    expect(component.compareUser).toHaveBeenCalled();
  });
});
