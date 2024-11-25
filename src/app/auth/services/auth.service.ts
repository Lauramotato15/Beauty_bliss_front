import { Injectable } from '@angular/core';
import { Credencial } from '../interface/credenciales.interface';
import { Observable } from 'rxjs';
import { User } from '../../users/interface/user.interface';
import { environment as env } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class AuthService{

    constructor(private http: HttpClient) {}
    
    login(params:Credencial):Observable<User>{
        const url = this.http.post<User>(`${env.apiUrl}/auth/login`, {params});
        return url;
    }
}