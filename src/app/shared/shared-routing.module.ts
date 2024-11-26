import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarPageComponent } from './pages/sidebar-page/sidebar-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { ProductCatalogPageComponent } from '../products/pages/product-catalog-page/product-catalog-page.component';

const routes: Routes = [
  {
    path: '**',
    component: ProductCatalogPageComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
