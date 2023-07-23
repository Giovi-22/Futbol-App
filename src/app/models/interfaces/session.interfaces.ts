
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

export interface LoginResponseData{
    status:boolean,
    message:string,
    data:string;
}