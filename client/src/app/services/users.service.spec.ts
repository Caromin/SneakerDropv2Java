import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../models/user';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
  });

    service = TestBed.get(UsersService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should add a new user to the user table', () => {
    const dummyUser: User = {
      id: 3,
      username: 'helloDummyData',
      password: 'password1',
      isActive: true
    };

    // calls addUser and listens for a return response 
    service.addUser(dummyUser).subscribe(index => {
      expect(index).toBeTruthy();
    });

    const request = httpMock.expectOne(`${service.ROOT_URL}/addUser`);
    expect(request.request.method).toBe('POST');

  });
});
