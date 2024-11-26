import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'shared-sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrl: './sidebar-page.component.css'
})
export class SidebarPageComponent {

  constructor(private route:Router, private serviceAuth: AuthService){}

  logout(event: Event){
    this.serviceAuth.logout().subscribe(resp => console.log(resp)); 
    event.stopPropagation();
    localStorage.removeItem('auth');
    this.route.navigate(['/auth/login']);
  }
}
