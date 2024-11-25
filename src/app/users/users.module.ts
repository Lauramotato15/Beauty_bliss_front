import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormActionComponent } from './components/form-action/form-action.component';
import { UpdateUserPageComponent } from './pages/update-user-page/update-user-page.component';


@NgModule({
  declarations: [ 
    FormActionComponent,
    UpdateUserPageComponent
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
 