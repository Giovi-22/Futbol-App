import { Observable, map } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { SessionStrategy } from './sessionStrategy.interface';
import UserEntity from '../../entities/UserEntity';
import { LogIn, ResponseData, RestorePassword, User } from 'src/app/models/interfaces/session.interfaces';

export class SessionFutbolServerStrategy implements SessionStrategy {

    #urlSession:string='http://localhost:8081/api/session'
    httpOptions= {
    headers:{
            "Content-Type":'application/json',
        },
    withCredentials:true
    }
    
    constructor(private http: HttpClient){}

    logIn(User: LogIn):Observable<ResponseData> {

        const url = `${this.#urlSession}/login`;
        return new Observable<ResponseData>((observer)=>{
        this.http.post<ResponseData>(url,User,this.httpOptions).subscribe(
            (result)=>{
                console.log(result);
                observer.next(result)
            },
            (error:HttpErrorResponse)=>{
                observer.error(error)
            }
        )
        })
    }

    current():Observable<ResponseData>{
        const headers = new HttpHeaders({
            "Authorization":`Bearer ${localStorage.getItem('user')}`,
            "Contetn-Type":'application/json'
        })
        const url = `${this.#urlSession}/current`;
        return new Observable<ResponseData>((observer)=>{
        this.http.get<ResponseData>(url,{
            headers:headers,
            withCredentials:true
            }).subscribe({
            next:(result)=>{
                if(result.data instanceof UserEntity){
                    const user:User ={
                        email:result.data.email,
                        firstName:result.data.firstName,
                        lastName:result.data.lastName,
                        password:""
                    }
                    observer.next({...result,data:user});
                }else{
                    observer.next(result)
                }
            },
            error:(error:HttpErrorResponse)=>{
                observer.error(error)
            }}
        )
        })
    }

    logOut():Observable<ResponseData> {
        const url = `${this.#urlSession}/logout`; 
        return this.http.post<ResponseData>(url,{},this.httpOptions);
    }

    signUp(User: UserEntity):Observable<ResponseData>{
        const url = `${this.#urlSession}/signup`; 
        return new Observable((observer)=>{
        this.http.post<ResponseData>(url,User,this.httpOptions).subscribe({
            next:(result)=>{
                if(result.status){
                    observer.next(result)
                }
            },
            error:(error:HttpErrorResponse)=>{
                observer.error(error);
            }
        })
        })
    }
    changePassword(email: string):Observable<ResponseData> {
        const url = `${this.#urlSession}/forgotpassword`;
        return  this.http.post<ResponseData>(url,{email},this.httpOptions);
    }

    restorePassword(data:RestorePassword):Observable<ResponseData>{
        const url = `${this.#urlSession}/changepassword`;
        return this.http.put<ResponseData>(url,data,this.httpOptions);

    }
    
}