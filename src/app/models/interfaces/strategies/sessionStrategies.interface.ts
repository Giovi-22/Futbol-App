import { LogIn, LoginResponse, ResponseData, ResponseDto, RestorePassword } from "src/app/models/interfaces/session.interfaces";
import UserEntity from "../../../domain/entities/UserEntity";
import { Observable } from 'rxjs';

export interface SessionApiStrategy{
    logIn(User:LogIn):Observable<ResponseDto>,
    signUp(User:UserEntity):Observable<ResponseData>,
    logOut():Observable<ResponseData>,
    changePassword(email:string):Observable<ResponseData>,
    restorePassword(data:RestorePassword):Observable<ResponseData>,
    current():Observable<UserEntity | String>
}