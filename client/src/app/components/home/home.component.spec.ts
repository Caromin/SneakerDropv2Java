import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: ProductsService;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = service;
    component = new HomeComponent(service);

  });

  // still not working properly, look into mocking the service, observable
  it('return 1 object', () => {
    const dummyData = {
      id: 5,
      productName: 'The North Face Mountain Parka',
      description: 'The true hype beast of Asians and the West Coast!',
      color: 'Blue/White',
      imageUrl: 'http://i.imgur.com/br4qCej.jpg',
      brandId: {
      id: 3,
      brand: 'Supreme',
      isActive: true
      },
      typeId: {
      id: 5,
      type: 'Outerwear',
      isActive: true
      },
      isActive: true
    };
    spy = spyOn(service, 'getRecentProducts').and.returnValue(dummyData);
    expect(component.recentProducts).toBeGreaterThan(0);
    expect(component.ngOnInit).toHaveBeenCalled();
  });
});
