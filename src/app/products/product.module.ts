import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCartPageComponent } from './pages/product-cart-page/product-cart-page.component';
import { ProductCatalogPageComponent } from './pages/product-catalog-page/product-catalog-page.component';
import { CardCatalogComponent } from './components/card-catalog/card-catalog.component';
import { CardProductCartComponent } from './components/card-cart/card-product-cart.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    CardCatalogComponent,
    ProductCartPageComponent,
    ProductCatalogPageComponent,
    CardProductCartComponent,
    SearchBoxComponent,
  ],
  exports: [
    CardCatalogComponent,
    ProductCartPageComponent,
    ProductCatalogPageComponent,
  ], 
  imports: [
    CommonModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { 
  
}
