import UserEntity from "src/app/domain/entities/UserEntity";

export interface LogIn{
    email:string,
    password:string
}

export interface User{
    firstName:string;
    lastName:string;
    password:string;
    email:string;
}
export interface LoginResponse{
    message:string,
    status:string,
    data:{token:string,user:UserEntity}
}
export interface ResponseData{
    status:string,
    message:string,
    data:string | UserEntity;
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