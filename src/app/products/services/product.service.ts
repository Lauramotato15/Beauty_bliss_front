import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment.development';
import { ApiResponseAll, ApiResponseOne } from '../interface/api-response.interface';

@Injectable({providedIn: 'root'})
export class ProductService {

    constructor( private readonly http:HttpClient ) {}
    
    getAllProducts():Observable<ApiResponseAll>{
        return this.http.get<ApiResponseAll>(`${env.apiUrl}/product`);
    }

    findProducts(productName:string):Observable<ApiResponseOne>{
        const url = `${env.apiUrl}/product/find-by-name/${productName}`;

        return this.http.get<ApiResponseOne>(url);
    }

    deleteProducts(id:number):Observable<Boolean>{
        const url = `${env.apiUrl}/product/${id}`; 

        return this.http.delete<Boolean>(url);
    }
}