import { LogIn, LoginResponseData } from "src/app/models/interfaces/session.interfaces";
import UserEntity from "../../entities/UserEntity";
import { Observable } from 'rxjs';

export interface SessionStrategy{
    logIn(User:LogIn):Observable<LoginResponseData>,
    signUp(User:UserEntity):void,
    logOut():void
}