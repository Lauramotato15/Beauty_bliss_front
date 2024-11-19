import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatalogPageComponent } from './product-catalog-page.component';

describe('ProductCatalogPageComponent', () => {
  let component: ProductCatalogPageComponent;
  let fixture: ComponentFixture<ProductCatalogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCatalogPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
