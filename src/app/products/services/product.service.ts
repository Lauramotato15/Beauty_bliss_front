import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../../environments/environment.development';
import { ApiResponseAll, ApiResponseOne } from '../interface/api-response.interface';
import { AuthService } from '../../auth/services/auth.service';
import { userToken } from '../../auth/interface/user-token.interface';

@Injectable({providedIn: 'root'})
export class ProductService {

    public token!:userToken; 

    constructor(private http:HttpClient, private serviceAuth: AuthService) {}
    
    getAllProducts():Observable<ApiResponseAll>{

        this.token= this.serviceAuth.loadLocalStorage('auth'); 

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.token.token}`
        });

        return this.http.get<ApiResponseAll>(`${env.apiUrl}/product`, {headers});
    }

    findProducts(productName:string):Observable<ApiResponseOne>{

        this.token= this.serviceAuth.loadLocalStorage('auth'); 

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.token.token}`
        });

        const url = `${env.apiUrl}/product/find-by-name/${productName}`;

        return this.http.get<ApiResponseOne>(url, {headers});
    }

    deleteProducts(id:number):Observable<Boolean>{

        this.token= this.serviceAuth.loadLocalStorage('auth'); 

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.token.token}`
        });

        const url = `${env.apiUrl}/product/${id}`; 

        return this.http.delete<Boolean>(url, {headers});
    }
}