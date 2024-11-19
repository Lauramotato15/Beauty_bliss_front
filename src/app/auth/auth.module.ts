import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterUserPageComponent } from './pages/register-user-page/register-user-page.component';


@NgModule({
  declarations: [
    RegisterUserPageComponent, 
    LoginPageComponent, 
  ],
  exports:[
    RegisterUserPageComponent, 
    LoginPageComponent, 
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
  ]
})
export class AuthModule { }
