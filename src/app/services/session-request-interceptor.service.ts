import { Injectable } from '@angular/core';
import {  HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionRequestInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token= localStorage.getItem('user');
    if(token){
      console.log("el usuario esta autenticado")
      const newHeaders = req.headers.append('Authorization',`Bearer ${token}`)
      const newReq = req.clone({headers:newHeaders})
      return next.handle(newReq)
    }else{
      console.log("el usuario no esta autenticado")
      return next.handle(req)
    }

}
}
