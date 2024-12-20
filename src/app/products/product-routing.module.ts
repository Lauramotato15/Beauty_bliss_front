import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCartPageComponent } from './pages/product-cart-page/product-cart-page.component';
import { ProductCatalogPageComponent } from './pages/product-catalog-page/product-catalog-page.component';
import { ProductSalePageComponent } from './pages/product-sale-page/product-sale-page.component';
import { ProductRegisterPageComponent } from './pages/product-register-page/product-register-page.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      {
        path: 'cart',
        component: ProductCartPageComponent,
      }, 
      {
        path: 'catalog', 
        component: ProductCatalogPageComponent, 
      },
      {
        path: 'sales', 
        component: ProductSalePageComponent,
      }, 
      {
        path: 'register', 
        component: ProductRegisterPageComponent,
      }
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
