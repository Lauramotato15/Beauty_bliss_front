import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthModule } from './auth/auth.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  
  constructor(private readonly serviceAuth: AuthService){}

  get isAuthenticated(){
   return this.serviceAuth.user.id; 
  }
}
