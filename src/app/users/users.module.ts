import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormActionComponent } from './components/form-action/form-action.component';


@NgModule({
  declarations: [ 
    FormActionComponent
  ],
  exports: [
    FormActionComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
 