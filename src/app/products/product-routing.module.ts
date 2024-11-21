import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCartPageComponent } from './pages/product-cart-page/product-cart-page.component';
import { ProductCatalogPageComponent } from './pages/product-catalog-page/product-catalog-page.component';

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
    ]
  }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
