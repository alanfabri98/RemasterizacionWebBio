import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
 } from '@angular/common/http';
import { Observable } from 'rxjs';
//gloval
declare let Alertify:any;

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(
    private authServices:AuthService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).do(next=>{
      if(next instanceof HttpResponse){
        if(next.status === 201 ){//CORRETO
          localStorage.setItem('tInterceptor','true');
        }

      }},
      error =>{
        if (error.status === 400) {
          localStorage.setItem('tInterceptor',error);
        }
        if (error.status === 0 ){
          localStorage.setItem('tInterceptor',error);
        }
      }
      );

  }//end interceptor
}
