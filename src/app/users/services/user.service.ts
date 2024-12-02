import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment.development';
import { UserAction} from '../interface/user-update.interface';
import { ApiResponse } from '../../shared/interfaces/api-response.interface';
import { User } from '../interface/user.interface';

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private readonly http: HttpClient) {}
    
    register(params:UserAction):Observable<ApiResponse<User>>{
        const fData = new FormData();
        fData.append("name", params.name);
        fData.append("password", params.password);
        fData.append("email", params.email);
        if(params.photo){
            fData.append("photo", params.photo);
        }

        return this.http.post<ApiResponse<User>>(`${env.apiUrl}/user/register`, fData); 
    }

    update(params:UserAction):Observable<ApiResponse<User>>{
        const fData = new FormData();
        fData.append("name", params.name);
        
        if(params.password){
            fData.append("password", params.password);
        }

        if(params.photo){
            fData.append("photo", params.photo);
        }
        return this.http.post<ApiResponse<User>>(`${env.apiUrl}/user/update/me`,fData);
    }
}