import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertService } from '../shared/services/alert.service';

@Injectable()
export class ExceptionInterceptor implements HttpInterceptor {
  
  constructor(private readonly $serviceAlert: AlertService) {} 

  intercept(pet: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = next.handle(pet); 
    console.log("sy")
    console.log(token); 
    return next.handle(pet); 
  }
}