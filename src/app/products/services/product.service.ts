import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment.development';
import { Product } from '../interface/product.interface';
import { ApiResponse } from '../../shared/interfaces/api-response.interface';
@Injectable({providedIn: 'root'})
export class ProductService {

    constructor( private readonly http:HttpClient ) {}
    
    getAllProducts():Observable<ApiResponse <Array <Product> >>{
        return this.http.get<ApiResponse <Array <Product> >>(`${env.apiUrl}/product`);
    }

    createProduct(params:Product<number>):Observable<ApiResponse<Product>>{
        const fData = new FormData();
        fData.append("name", params.name);
        fData.append("price", params.price);
        fData.append("id_category", params.category.toString());
        fData.append("description", params.description);
        fData.append("brand", params.brand)
        fData.append("photo", params.photo);
        fData.append("quantity", params.stock[0].quantity.toString()); 

        return this.http.post<ApiResponse<Product >>(`${env.apiUrl}/product`, fData);
    }

    findProducts(productName:string):Observable<ApiResponse <Product>>{
        const url = `${env.apiUrl}/product/find-by-name/${productName}`;

        return this.http.get<ApiResponse < Product >>(url);
    }
    
    deleteProducts(id:number):Observable<Boolean>{
        const url = `${env.apiUrl}/product/${id}`; 

        return this.http.delete<Boolean>(url);
    }
}