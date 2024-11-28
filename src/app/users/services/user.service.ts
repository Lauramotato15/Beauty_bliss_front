import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment.development';
import { UserAction} from '../interface/user-update.interface';
import { UserResponse } from '../interface/user-response.interface';

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private readonly http: HttpClient) {}
    
    register(params:UserAction):Observable<UserResponse>{
        const fData = new FormData();
        fData.append("name", params.name);
        fData.append("email", params.email);
        fData.append("password", params.password);
        if(params.photo){
            fData.append("photo", params.photo);
        }

        return this.http.post<UserResponse>(`${env.apiUrl}/user/register`, fData); 
    }

    update(params:UserAction):Observable<UserResponse>{
        const fData = new FormData();
        fData.append("name", params.name);
        fData.append("password", params.password);
        if(params.photo){
            fData.append("photo", params.photo);
        }

        return this.http.post<UserResponse>(`${env.apiUrl}/user/update/me`,fData);
    }
}