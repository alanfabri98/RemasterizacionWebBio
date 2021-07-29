import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do'//nesesario para el do
//gloval
declare let alertify:any;

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).do(next=>{
      if(next instanceof HttpResponse){
        if(next.status === 200 ){//CORRETO
          localStorage.setItem('tInterceptor','true');
        }
        if(next.status === 201 ){//CORRETO
          localStorage.setItem('tInterceptor','true');
        }

      }},
      error =>{
        if (error.status === 400) {
          localStorage.setItem('tInterceptor',error);
        }
        if (error.status === 409 ){
          localStorage.setItem('tInterceptor',error);
        }
        if (error.status === 0 ){
          localStorage.setItem('tInterceptor',error);
        }
      }
      );

  }
}
