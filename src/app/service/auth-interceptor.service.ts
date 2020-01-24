import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BasicAuthHtppInterceptorService implements HttpInterceptor {
    private clonedReq:any;

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
      console.log("Inside Interceptor!");
        if (sessionStorage.getItem('token') != null) {
          console.log(sessionStorage.getItem('token'));
           req = req.clone({
             setHeaders: {Authorization : sessionStorage.getItem('token')}
             
          })
        }
        return next.handle(req);
    
      }

}
