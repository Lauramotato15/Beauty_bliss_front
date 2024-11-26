import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrl: './sidebar-page.component.css'
})
export class SidebarPageComponent {
  logout(event: Event){
    event.stopPropagation();
    localStorage.removeItem('auth');
  }
}
