import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { environment as env} from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../shared/interfaces/api-response.interface';
import { Product } from '../../products/interface/product.interface';

@Injectable({providedIn: 'root'})
export class CategoryService {

    constructor(private http:HttpClient, private serviceAuth:AuthService) { }

    getAll():Observable<ApiResponse < Array<Product> >>{

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.serviceAuth.token}`
        });

        const url = `${env.apiUrl}/category/`;

        return this.http.get<ApiResponse < Array<Product> >>(url, {headers});
    }
}