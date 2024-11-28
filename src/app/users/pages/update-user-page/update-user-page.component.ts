import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '../../../auth/interface/response-login.interface';
import { UserToken } from '../../../auth/interface/user-token.interface';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../interface/user.interface';
@Component({
  selector: 'users-update-user-page',
  templateUrl: './update-user-page.component.html',
})
export class UpdateUserPageComponent implements OnInit{
  
  constructor(private readonly serviceAuth: AuthService){}

  public userLogueado!:User;

  ngOnInit(): void {
    this.userLogueado = this.serviceAuth.user;
  }
}
