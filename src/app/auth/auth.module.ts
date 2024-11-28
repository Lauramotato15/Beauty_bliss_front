import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterUserPageComponent } from './pages/register-user-page/register-user-page.component';
import { RouterModule } from '@angular/router';
import { UsersModule } from '../users/users.module';


@NgModule({
  declarations: [
    RegisterUserPageComponent, 
    LoginPageComponent, 
    FormLoginComponent, 
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
    RouterModule,
  ]
})
export class AuthModule { }
