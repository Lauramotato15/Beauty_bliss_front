import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarPageComponent } from './pages/sidebar-page/sidebar-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: SidebarPageComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
