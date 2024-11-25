import { Injectable } from '@angular/core';
import { Credencial } from '../interface/credencial.interface';
import { Observable, tap } from 'rxjs';
import { environment as env } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { userToken } from '../interface/user-token.interface';
import { ResponseLogin } from '../interface/responseLogin.interface';

@Injectable({providedIn: 'root'})
export class AuthService{
    
    constructor(private http: HttpClient) {}
    
    login(params:Credencial):Observable<ResponseLogin>{
        return this.http.post<ResponseLogin>(`${env.apiUrl}/auth/login`,params)
        .pipe(
            tap(resp => resp.success === true ? this.saveUserLogueado(resp.data) : console.log("Not autorization"))
        );
    }

    saveUserLogueado(infoToken:userToken){
        this.isAutenticated; 
        localStorage.setItem('authResponse', JSON.stringify(infoToken)); 
    }   

    public isAutenticated = new Observable<boolean> ((token) => {
       const logueado: string | null = localStorage.getItem('token');

       console.log(logueado); 
        
        if(logueado){
            token.next(); 
            token.complete();
        }
    })

}