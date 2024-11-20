import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarPageComponent } from './pages/sidebar-page/sidebar-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidebarPageComponent,
  ],
  exports: [
    SidebarPageComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule, 
    RouterModule, 
  ]
})
export class SharedModule { }
