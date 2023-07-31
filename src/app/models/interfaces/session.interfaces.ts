import { TeamEntity } from "src/app/domain/entities/TeamEntity";
import UserEntity from 'src/app/domain/entities/UserEntity';

export interface LogIn{
    email:string,
    password:string
}

export interface User{
    firstName:string;
    lastName:string;
    password:string;
    email:string;
    favoriteTeams:TeamEntity[];
}
export interface LoginResponse{
    message:string,
    status:string,
    data:{token:string,user:UserEntity}
}
export interface ResponseDto{
    user: UserEntity,
    token:string,
    status:string

}
export interface ResponseData{
    status:string,
    message:string,
    data:UserEntity;
}

export interface ResponseUser{
    status:string,
    message:string,
    data: TeamEntity[]
}

export interface RestorePassword{
    password:string,
    confirm:string,
    token:string
}

export interface ErrorData{
    status:string,
    message:string
}