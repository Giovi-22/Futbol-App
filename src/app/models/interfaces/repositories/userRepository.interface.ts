import UserEntity from "src/app/domain/entities/UserEntity";
import { Observable } from 'rxjs';

export interface UserRepository{
    setUser(user:UserEntity):void;
    setUserLoggedIn(isLogged:boolean):void;
    getUser():Observable<UserEntity>;
    isLogged():Observable<boolean>;
}