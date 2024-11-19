import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSalesPageComponent } from './product-sales-page.component';

describe('ProductSalesPageComponent', () => {
  let component: ProductSalesPageComponent;
  let fixture: ComponentFixture<ProductSalesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductSalesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSalesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
