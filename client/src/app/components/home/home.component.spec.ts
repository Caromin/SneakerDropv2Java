import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: ProductsService;

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

  });

  it('return 1 object', () => {
    inject([HttpTestingController, ProductsService],
      (httpMock: HttpTestingController, service: ProductsService) => {
        service.getRecentProducts().subscribe(data => {
          expect(data.length).toBe(3);
        });

        const req = httpMock.expectOne(`${service.ROOT_URL}/recent`);
        expect(req.request.method).toEqual('GET');

        req.flush({data: {
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
        }});
      });
  });
});
