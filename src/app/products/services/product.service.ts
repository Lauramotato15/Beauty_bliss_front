import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../../environments/environment.development';
import { ApiResponse } from '../interface/api-response.interface';
import { AuthService } from '../../auth/services/auth.service';
import { userToken } from '../../auth/interface/user-token.interface';

@Injectable({providedIn: 'root'})
export class ProductService {

    public token!:userToken; 

    constructor(private http:HttpClient, private serviceAuth: AuthService) {}
    
    getAllProducts():Observable<ApiResponse>{

        this.token= this.serviceAuth.loadLocalStorage('auth'); 

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.token.token}`
        });

        return this.http.get<ApiResponse>(`${env.apiUrl}/product`, {headers});
    }
}