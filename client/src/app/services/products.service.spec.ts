import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('ProductsService', () => {
  beforeEach(async() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      ProductsService,
      HttpClient,
      HttpClientModule]
  }));

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });
});
