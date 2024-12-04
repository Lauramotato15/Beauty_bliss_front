import { AuthService } from '../../../auth/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../../users/interface/user.interface';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'shared-sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrl: './sidebar-page.component.css'
})
export class SidebarPageComponent implements OnInit{

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

  logout(){
    this.sub = this.serviceAuth.logout().subscribe(resp => {
      this.serviceAuth.clearStorage(); 
      this.route.navigateByUrl('auth/login');
    });   
  }

  get fullImageUrl() {
    return `${environment.profilesUrl}${this.userLogueado.photo}`;
  }
}
