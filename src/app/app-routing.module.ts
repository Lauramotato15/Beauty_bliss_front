import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: 'product', 
    loadChildren: () => import('./products/product.module').then(mp => mp.ProductModule)
  },
  {
    path: 'user', 
    loadChildren: () => import('./users/users.module').then(mu => mu.UsersModule)
  },
  {
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(ma => ma.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
