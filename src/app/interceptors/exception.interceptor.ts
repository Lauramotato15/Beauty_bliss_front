import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AlertService } from '../shared/services/alert.service';
import { ApiResponse, FailedApiResponse } from '../shared/interfaces/api-response.interface';

@Injectable()
export class ExceptionInterceptor implements HttpInterceptor {
  
  constructor(private readonly serviceAlert: AlertService) {} 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((resp: HttpEvent<any>) => {
        
        if(resp instanceof HttpResponse){
          const response:HttpResponse<ApiResponse<unknown>> = resp;

          if(!response.body?.status){
            const body = response.body as FailedApiResponse;
            this.serviceAlert.showError(body.message)
          }
        }
      })
    )
  }
}