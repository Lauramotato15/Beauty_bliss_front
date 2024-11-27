import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCartPageComponent } from './pages/product-cart-page/product-cart-page.component';
import { ProductCatalogPageComponent } from './pages/product-catalog-page/product-catalog-page.component';
import { CardCatalogComponent } from './components/card-catalog/card-catalog.component';
import { CardProductCartComponent } from './components/card-cart/card-product-cart.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ProductSalePageComponent } from './pages/product-sale-page/product-sale-page.component';
import { TableSaleComponent } from './components/table-sale/table-sale.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectFilterComponent } from './components/select-filter/select-filter.component';

@NgModule({
  declarations: [
    CardCatalogComponent,
    ProductCartPageComponent,
    ProductCatalogPageComponent,
    CardProductCartComponent,
    SearchBoxComponent,
    ProductSalePageComponent,
    TableSaleComponent,
    SelectFilterComponent, 
  ],
  exports: [], 
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
  ]
})
export class ProductModule { 
  
}
