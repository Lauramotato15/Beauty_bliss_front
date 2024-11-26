import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

    update(params:UserUpdate):Observable<ResponseLogin>{
        const fData = new FormData();
        fData.append("name", params.name);
        fData.append("email", params.email);
        fData.append("password", params.password);

        if(params.photo){
            fData.append("photo", params.photo);
        }

        return this.http.post<ResponseLogin>(`${env.apiUrl}/user/update/me`,fData);
    }
}