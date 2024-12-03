import { AlertService } from '../../shared/services/alert.service';
import { Credencial } from '../interface/credencial.interface';
import { environment as env } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../interface/response-login.interface';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../users/interface/user.interface';
import { UserToken } from '../interface/user-token.interface';

@Injectable({providedIn: 'root'})
export class AuthService{
    
    constructor
    (
        private readonly http: HttpClient, 
        private readonly route:Router, 
        private readonly serviceAlert: AlertService
    ) {}

    get token(){
        return this.loadLocalStorage<string>("token")
    }

    get user():User{
        return this.loadLocalStorage<User>("user");
    }
    
    login(params:Credencial):Observable<LoginResponse>{
        return this.http.post<LoginResponse>(`${env.apiUrl}/auth/login`,params)
        .pipe(
            tap(resp => resp.success ? this.saveLoginResponse(resp.data) 
            : this.serviceAlert.showError("Usuario o contraseña incorrectos"))
        );
    }

    logout():Observable<boolean>{
        return this.http.get<boolean>(`${env.apiUrl}/auth/logout`);
    }

    saveLoginResponse(response: UserToken){
        this.saveLocalStorage("token", response.token);
        this.saveLocalStorage("user", response.user);
        this.serviceAlert.showSuccess('Inicio de sesión exitoso');
        this.route.navigate(['product/catalog']);
    }
    
    saveLocalStorage<T>(key:string, data:T){
        localStorage.setItem(key, JSON.stringify(data)); 
    }   

    loadLocalStorage<T>(key:string):T{
        const storedAuth = localStorage.getItem(key);
        if(storedAuth){
            return JSON.parse(storedAuth) as T;
        }
        return {} as T;
    }

    clearStorage(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.route.navigate(['/auth/login']);
    }

    clearStorageCart(){
        localStorage.removeItem('cart');
    }
}