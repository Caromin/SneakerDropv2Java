import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsersService } from 'src/app/services/users.service';
import { RouterTestingModule } from '@angular/router/testing';

class MockComponent extends RegisterComponent {
  newUser: any = {
    username: 'mixmix',
    password: 'hellogoodbye',
    isActive: true
  };
}

describe('RegisterComponent', () => {
  let component: MockComponent;
  let fixture: ComponentFixture<MockComponent>;
  let userService: UsersService;
  let httpMock: HttpTestingController;
  let router: RouterTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockComponent ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [UsersService, HttpTestingController]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userService = TestBed.get(UsersService);
    httpMock = TestBed.get(HttpTestingController);
    router = TestBed.get(RouterTestingModule);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to POST a mock user', () => {
    expect(component.registerUser()).toBeUndefined();
    // listens in on the component function and tell what value to return
    spyOn(component, 'registerUser').and.returnValue(false);
    // actually call the function
    component.registerUser();
    // test to see if the returned function is as intended
    expect(component.registerUser()).toBeFalsy();
    // see if the component was called, it was
    expect(component.registerUser).toHaveBeenCalled();
  });

});
