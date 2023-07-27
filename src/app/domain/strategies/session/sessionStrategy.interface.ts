import { LogIn, LoginResponse, ResponseData, RestorePassword } from "src/app/models/interfaces/session.interfaces";
import UserEntity from "../../entities/UserEntity";
import { Observable } from 'rxjs';

export interface SessionStrategy{
    logIn(User:LogIn):Observable<LoginResponse>,
    signUp(User:UserEntity):Observable<ResponseData>,
    logOut():Observable<ResponseData>,
    changePassword(email:string):Observable<ResponseData>,
    restorePassword(data:RestorePassword):Observable<ResponseData>,
    current():Observable<ResponseData>
}