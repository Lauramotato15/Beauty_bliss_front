import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterUserPageComponent } from './pages/register-user-page/register-user-page.component';
import { InicioPageComponent } from '../shared/pages/inicio-page/inicio-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: InicioPageComponent,
  }, 
  {
    path: 'register',
    component: RegisterUserPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
