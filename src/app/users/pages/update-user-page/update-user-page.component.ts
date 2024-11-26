import { Component, OnInit } from '@angular/core';
import { ResponseLogin } from '../../../auth/interface/responseLogin.interface';
import { userToken } from '../../../auth/interface/user-token.interface';
@Component({
  selector: 'users-update-user-page',
  templateUrl: './update-user-page.component.html',
  styleUrl: './update-user-page.component.css',
})
export class UpdateUserPageComponent implements OnInit{
  
  public userLogueado!:userToken;

  ngOnInit(): void {
    const storedAuth = localStorage.getItem('auth');

    if (storedAuth) {
      this.userLogueado = JSON.parse(storedAuth) as userToken;
    }
  }
}
