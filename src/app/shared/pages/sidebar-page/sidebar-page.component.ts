import { AuthService } from '../../../auth/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../../users/interface/user.interface';

@Component({
  selector: 'shared-sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrl: './sidebar-page.component.css'
})
export class SidebarPageComponent implements OnDestroy, OnInit{

  public sub?:Subscription; 
  public userLogueado!:User;

  constructor
  (
    private route:Router, 
    private serviceAuth: AuthService, 
  ){}

  ngOnInit(): void {
    this.userLogueado = this.serviceAuth.user;
  }

  logout(event: Event){
    this.sub = this.serviceAuth.logout().subscribe();
    event.stopPropagation();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.route.navigate(['/auth/login']);
  }

  get fullImageUrl() {
    return `http://localhost/uploads/${this.userLogueado.photo}`;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe(); 
  }
}
