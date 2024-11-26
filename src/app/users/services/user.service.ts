import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user.interface';
import { environment as env } from '../../../environments/environment.development';
import { UserUpdate } from '../interface/user-update.interface';
import { ResponseLogin } from '../../auth/interface/responseLogin.interface';

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private http: HttpClient) {}
    
    register(params:UserUpdate):Observable<ResponseLogin>{
        const fData = new FormData();
        fData.append("name", params.name);
        fData.append("email", params.email);
        fData.append("password", params.password);
        if(params.photo){
            fData.append("photo", params.photo);
        }

        return this.http.post<ResponseLogin>(`${env.apiUrl}/user/register`, fData); 
    }

    update(params:UserUpdate, token:string):Observable<string>{
        const fData = new FormData();
        fData.append("name", params.name);
        fData.append("email", params.email);
        fData.append("password", params.password);

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        if(params.photo){
            fData.append("photo", params.photo);
        }

        return this.http.put<string>(`${env.apiUrl}/user/update/me`,fData, {headers});
    }
}