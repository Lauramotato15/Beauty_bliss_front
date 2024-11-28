import { InicioPageComponent } from '../shared/pages/inicio-page/inicio-page.component';
import { NgModule } from '@angular/core';
import { RegisterUserPageComponent } from './pages/register-user-page/register-user-page.component';
import { RouterModule, Routes } from '@angular/router';

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
