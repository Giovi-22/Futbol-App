import { Injectable } from '@angular/core';
import {  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionRequestInterceptorService implements HttpInterceptor {
 
  #blackList:string[];

  constructor() {
    this.#blackList = ["https://api.football-data.org"];
   }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token= localStorage.getItem('user');
    //const isOnBlackList = this.#blackList.find(item =>item.includes(req.url.toString())) 
    //console.log("la blackList es: ",isOnBlackList)
    if(!(req.url.includes("https://api.football-data.org"))){
      console.log("no esta en la lista")
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
    console.log("esta en la lista")
  return next.handle(req);
}
}
