import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  exports: [
    DashboardComponent, 
  ],
  imports: [
    CommonModule,
    SharedRoutingModule, 
  ]
})
export class SharedModule { }
