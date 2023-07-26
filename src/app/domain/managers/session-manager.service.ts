import { Injectable } from '@angular/core';
import { SessionFutbolServerStrategy } from '../strategies/session/sessionFutbolServerStrategy';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorData, LogIn, LoginResponseData, RestorePassword } from 'src/app/models/interfaces/session.interfaces';
import { Observable,map } from 'rxjs';
import UserEntity from '../entities/UserEntity';
import { SessionStrategy } from '../strategies/session/sessionStrategy.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  #session:SessionFutbolServerStrategy;

  constructor(
    private http: HttpClient,
    private router: Router
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
      return this.#session.restorePassword(data);
   }

   changePassword(email:string){

      return this.#session.changePassword(email).pipe(
         map((result)=>{console.log("el resultado es en manager: ",result)
         return result;})
      );

   }

}
