import { Injectable } from '@angular/core';
import { SessionFutbolServerStrategy } from '../strategies/session/sessionFutbolServerStrategy';
import { HttpClient } from '@angular/common/http';
import { LogIn } from 'src/app/models/interfaces/session.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  session:SessionFutbolServerStrategy;

  constructor(private http: HttpClient) {
    this.session = new SessionFutbolServerStrategy(this.http);
   }

   logIn(user:LogIn){
      this.session.logIn(user)
   }

}
