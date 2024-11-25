import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  public isAuthenticated!:boolean; 

  constructor(private serviceAuth: AuthService){}

  ngOnInit(): void {
    this.serviceAuth.isAutenticated.subscribe(resp => {
      this.isAuthenticated = resp; 
      console.log("soy app");
      console.log(this.isAuthenticated);
    }); 
  }
}
