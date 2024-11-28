import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioPageComponent } from '../shared/pages/inicio-page/inicio-page.component';
import { RegisterUserPageComponent } from './pages/register-user-page/register-user-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: InicioPageComponent,
  }, 
  {
    path: 'register',
    component: RegisterUserPageComponent,
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
