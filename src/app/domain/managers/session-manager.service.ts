import { Injectable } from '@angular/core';
import { SessionFutbolServerStrategy } from '../strategies/session/sessionFutbolServerStrategy';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorData, LogIn, LoginResponseData, RestorePassword } from 'src/app/models/interfaces/session.interfaces';
import { Observable,catchError,map } from 'rxjs';
import UserEntity from '../entities/UserEntity';
import { SessionStrategy } from '../strategies/session/sessionStrategy.interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  #session:SessionFutbolServerStrategy;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
    ) {
    this.#session = new SessionFutbolServerStrategy(this.http);
   }

   logIn(user:LogIn):Observable<LoginResponseData>{
      return this.#session.logIn(user);
   }

   singUp(user:UserEntity){
    return this.#session.signUp(user);
   }

   restorePassword(data:RestorePassword){
      if(data.password !== data.confirm){
         console.log("error desde manager")
         return new Observable<LoginResponseData>((observer)=>observer.error({message:"The password and confirm password do not match."}));
       }
       if(!(data.token.split(" "))?.length){
         return new Observable<LoginResponseData>((observer)=>observer.error({message:"Token to reset the password not found."}));
       }

      return this.#session.restorePassword(data).pipe(
         map((result)=>{
            return new Observable<LoginResponseData>(observer=> observer.next(result));
         }),
         catchError((error)=>{
            const newError:LoginResponseData = {
               data:"",
               message:error.error.message,
               status:false
            }
            return new Observable(observer=> observer.error(newError));
         })
      );
   }

   changePassword(email:string){

      return this.#session.changePassword(email).pipe(
         map((result)=>{console.log("el resultado es en manager: ",result)
         return result;})
      );

   }

}
