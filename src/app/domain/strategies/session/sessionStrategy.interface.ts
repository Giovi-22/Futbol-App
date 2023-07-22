import { LogIn } from "src/app/models/interfaces/session.interfaces";
import UserEntity from "../../entities/UserEntity";

export interface SessionStrategy{
    logIn(User:LogIn):void,
    signUp(User:UserEntity):void,
    logOut():void
}