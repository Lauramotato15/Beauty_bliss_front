import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment.development';
import { Product } from '../interface/product.interface';
import { ApiResponse } from '../../shared/interfaces/api-response.interface';
import { Sale } from '../interface/sale.interface';
@Injectable({providedIn: 'root'})
export class ProductService {

    constructor( private readonly http:HttpClient ) {}
    
    getAllProducts():Observable<ApiResponse <Array <Product> >>{
        return this.http.get<ApiResponse <Array <Product> >>(`${env.apiUrl}/product`);
    }

    createProduct(params:Product<number>):Observable<ApiResponse<Product>>{
        const fData = new FormData();
        fData.append("name", params.name);
        fData.append("price", params.price.toString());
        fData.append("id_category", params.category.toString());
        fData.append("description", params.description);
        fData.append("brand", params.brand)
        fData.append("photo", params.photo);
        fData.append("quantity", params.quantity.toString()); 

        return this.http.post<ApiResponse<Product >>(`${env.apiUrl}/product`, fData);
    }

    findProducts(productName:string):Observable<ApiResponse <Product>>{
        const url = `${env.apiUrl}/product/find-by-name/${productName}`;

        return this.http.get<ApiResponse < Product >>(url);
    }

    findProductsByCategory(){

    }
    
    deleteProducts(id:number):Observable<Boolean>{
        const url = `${env.apiUrl}/product/${id}`; 

        return this.http.delete<Boolean>(url);
    }

    createSale(saleInfo: Sale):Observable<ApiResponse<Sale>> {
        return this.http.post<ApiResponse < Sale >>(`${env.apiUrl}/sale`, saleInfo);
    }

    getSaleById(){
        return this.http.get<ApiResponse < Product >>(`${env.apiUrl}/sale`,);
    }
}