import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userToken } from '../../auth/interface/user-token.interface';
import { AuthService } from '../../auth/services/auth.service';
import { environment as env} from '../../../environments/environment.development';
import { ApiResponseOne } from '../../products/interface/api-response.interface';

@Injectable({providedIn: 'root'})
export class CategoryService {
    public userToken!:userToken; 

    constructor(private http:HttpClient, private serviceAuth:AuthService) { }

    getAll(){
        this.userToken= this.serviceAuth.loadLocalStorage('auth'); 

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.userToken.token}`
        });

        const url = `${env.apiUrl}/category/`;

        return this.http.get<ApiResponseOne>(url, {headers});
    }
}