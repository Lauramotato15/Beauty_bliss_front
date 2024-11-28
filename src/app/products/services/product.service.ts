import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../../environments/environment.development';
import { ApiResponseAll, ApiResponseOne } from '../interface/api-response.interface';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({providedIn: 'root'})
export class ProductService {

    constructor(private http:HttpClient, private serviceAuth: AuthService) {}
    
    getAllProducts():Observable<ApiResponseAll>{
        return this.http.get<ApiResponseAll>(`${env.apiUrl}/product`);
    }

    findProducts(productName:string):Observable<ApiResponseOne>{

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.serviceAuth.token}`
        });

        const url = `${env.apiUrl}/product/find-by-name/${productName}`;

        return this.http.get<ApiResponseOne>(url, {headers});
    }

    deleteProducts(id:number):Observable<Boolean>{


        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.serviceAuth.token}`
        });

        const url = `${env.apiUrl}/product/${id}`; 

        return this.http.delete<Boolean>(url, {headers});
    }
}