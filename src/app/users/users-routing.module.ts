import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateUserPageComponent } from './pages/update-user-page/update-user-page.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'profile', 
    component: UpdateUserPageComponent, 
  }, 
  {
    path: '*', 
    redirectTo: 'profile',
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule, 
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
