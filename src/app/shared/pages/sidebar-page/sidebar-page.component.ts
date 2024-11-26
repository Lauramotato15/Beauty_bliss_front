import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Subscription } from 'rxjs';
import { userToken } from '../../../auth/interface/user-token.interface';

@Component({
  selector: 'shared-sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrl: './sidebar-page.component.css'
})
export class SidebarPageComponent implements OnDestroy, OnInit{

  public sub?:Subscription; 
  public userLogueado!:userToken;

  constructor(private route:Router, private serviceAuth: AuthService){}

  logout(event: Event){
    this.sub = this.serviceAuth.logout().subscribe(resp => console.log(resp)); 
    event.stopPropagation();
    localStorage.removeItem('auth');
    this.route.navigate(['/auth/login']);
  }

  ngOnInit(): void {
    this.userLogueado = this.serviceAuth.loadLocalStorage('auth');
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe(); 
  }
}
