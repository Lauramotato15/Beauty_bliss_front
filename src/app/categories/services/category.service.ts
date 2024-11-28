import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserToken } from '../../auth/interface/user-token.interface';
import { AuthService } from '../../auth/services/auth.service';
import { environment as env} from '../../../environments/environment.development';
import { ApiResponseOne } from '../../products/interface/api-response.interface';

@Injectable({providedIn: 'root'})
export class CategoryService {

    constructor(private http:HttpClient, private serviceAuth:AuthService) { }

    getAll(){

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.serviceAuth.token}`
        });

        const url = `${env.apiUrl}/category/`;

        return this.http.get<ApiResponseOne>(url, {headers});
    }
}