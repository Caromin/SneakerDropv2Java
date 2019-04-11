import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let productsService: ProductsService;

  beforeEach(() => {TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      ProductsService,
    ]
  });

    // tslint:disable-next-line: align
    productsService = getTestBed().get(ProductsService);
  });

  it('should be created', () => {
    expect(productsService).toBeTruthy();
  });
});
