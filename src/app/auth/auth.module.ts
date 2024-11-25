import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterUserPageComponent } from './pages/register-user-page/register-user-page.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { UsersModule } from '../users/users.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RegisterUserPageComponent, 
    LoginPageComponent, FormLoginComponent, 
  ],
  exports:[
    RegisterUserPageComponent, 
    LoginPageComponent, 
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    UsersModule, 
    ReactiveFormsModule, 
    HttpClientModule,
  ]
})
export class AuthModule { }
