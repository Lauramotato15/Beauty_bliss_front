import { Component, OnInit } from '@angular/core';
import { ResponseLogin } from '../../../auth/interface/responseLogin.interface';
import { userToken } from '../../../auth/interface/user-token.interface';
import { AuthService } from '../../../auth/services/auth.service';
@Component({
  selector: 'users-update-user-page',
  templateUrl: './update-user-page.component.html',
  styleUrl: './update-user-page.component.css',
})
export class UpdateUserPageComponent implements OnInit{
  
  constructor(private serviceAuth: AuthService){}

  public userLogueado!:userToken;

  ngOnInit(): void {
    if(this.serviceAuth.loadLocalStorage('auth')){
      this.userLogueado = this.serviceAuth.loadLocalStorage('auth'); 
    }
  }
}
