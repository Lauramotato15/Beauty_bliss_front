import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarPageComponent } from './pages/sidebar-page/sidebar-page.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from '../products/product.module';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { AuthModule } from "../auth/auth.module";
import { UsersModule } from '../users/users.module';


@NgModule({
  declarations: [
    SidebarPageComponent,
    InicioPageComponent,
  ],
  exports: [
    SidebarPageComponent,
    InicioPageComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    ProductModule,
    AuthModule,
    UsersModule,
  ]
})
export class SharedModule { }
