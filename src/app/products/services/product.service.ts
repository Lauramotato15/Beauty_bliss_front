import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment.development';
import { ApiResponseAll, ApiResponseOne } from '../interface/product-response.interface';
import { Product } from '../interface/product.interface';

@Injectable({providedIn: 'root'})
export class ProductService {

    constructor( private readonly http:HttpClient ) {}
    
    getAllProducts():Observable<ApiResponseAll>{
        return this.http.get<ApiResponseAll>(`${env.apiUrl}/product`);
    }

    createProduct(params:Product):Observable<ApiResponseOne>{
        const fData = new FormData();
        fData.append("name", params.name);
        fData.append("price", params.price);
        fData.append("category", params.category.id.toString());
        fData.append("description", params.description);
        fData.append("brand", params.brand)

        if(params.photo){
            fData.append("photo", params.photo);
        }

        return this.http.post<ApiResponseOne>(`${env.apiUrl}/product`, fData);
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