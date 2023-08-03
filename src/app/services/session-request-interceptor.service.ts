import { Injectable } from '@angular/core';
import {  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class SessionRequestInterceptorService implements HttpInterceptor {
 
  #blackList:string[];

  constructor() {
    this.#blackList = [environment.api_footballData_url];
   }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token= localStorage.getItem('user');
    if(!this.#isOnBlackList(req.url)){
      if(token){
        const newHeaders = req.headers.append('Authorization',`Bearer ${token}`)
        const newReq = req.clone({headers:newHeaders})
        return next.handle(newReq)
      }
      return next.handle(req)
    }
  return next.handle(req);
}

  #isOnBlackList(url:string){
    const result = this.#blackList.some((item)=>url.includes(item));
    return result;
  }
}
