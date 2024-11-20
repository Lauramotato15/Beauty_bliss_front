import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product', 
    loadChildren: () => import('./products/product.module').then(mp => mp.ProductModule)
  },
  {
    path: 'user', 
    loadChildren: () => import('./users/users.module').then(mu => mu.UsersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }