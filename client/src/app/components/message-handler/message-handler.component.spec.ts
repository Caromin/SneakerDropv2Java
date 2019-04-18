import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageHandlerComponent } from './message-handler.component';
import { StorageService } from 'src/app/services/storage.service';

describe('MessageHandlerComponent', () => {
  let component: MessageHandlerComponent;
  let fixture: ComponentFixture<MessageHandlerComponent>;
  let service: StorageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageHandlerComponent ],
      providers: [StorageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(StorageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return an empty array', () => {
    const dummyString = 'used for test';
    expect(component.closeMessage(dummyString)).toBe(undefined);
  });
});
