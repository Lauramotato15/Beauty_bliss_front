import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { AlertService } from '../shared/services/alert.service';
import { AuthService } from '../auth/services/auth.service';

@Injectable()
export class SessionInterceptor implements HttpInterceptor{
    constructor(
        private readonly serviceAlert: AlertService, 
        private readonly serviceAuth: AuthService
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req).pipe(
        catchError(error  => {
          if(error.status == 401){
            this.serviceAlert.showError("Tu sesión ha caducado")
            this.serviceAuth.clearStorage(); 
          }
          throw error;
        })
    )
    }
}