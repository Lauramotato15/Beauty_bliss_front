import { Injectable } from '@angular/core';
import { Credencial } from '../interface/credencial.interface';
import { Observable, tap } from 'rxjs';
import { environment as env } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userToken } from '../interface/user-token.interface';
import { ResponseLogin } from '../interface/responseLogin.interface';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService{
    
    constructor(private http: HttpClient, private route:Router) {}
    
    login(params:Credencial):Observable<ResponseLogin>{
        return this.http.post<ResponseLogin>(`${env.apiUrl}/auth/login`,params)
        .pipe(
            tap(resp => resp.success === true ? this.saveUserLocalStorage(resp.data) : alert("Usuario o contraseña equivocado"))
        );
    }

    logout():Observable<boolean>{
        const infoLogueado = localStorage.getItem('auth'); 

        if(infoLogueado){
            const token:userToken = JSON.parse(infoLogueado);
            const headers = new HttpHeaders({
                'Authorization': `Bearer ${token.token}`
            });

            return this.http.get<boolean>(`${env.apiUrl}/auth/logout`, {headers}); 
        }
        
        return new Observable<boolean>(observer => {
            observer.next(false);
            observer.complete();
        });
    }

    saveUserLocalStorage(infoToken:userToken){
        localStorage.setItem('auth', JSON.stringify(infoToken)); 
        this.route.navigate(['/sidebar']);
    }   

    loadLocalStorage(key:string):userToken{
        const storedAuth = localStorage.getItem('auth');
        if(storedAuth){
            return JSON.parse(storedAuth) as userToken;
        }
        return {} as userToken
    }
}