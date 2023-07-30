import { Observable, map } from 'rxjs';
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import { SessionStrategy } from './sessionStrategy.interface';
import UserEntity from '../../entities/UserEntity';
import { LogIn, LoginResponse, ResponseData, RestorePassword, User } from 'src/app/models/interfaces/session.interfaces';

export class SessionFutbolServerStrategy implements SessionStrategy  {

    #urlSession:string='http://localhost:8081/api/session'
    httpOptions= {
    headers:{
            "Content-Type":'application/json',
        },
    withCredentials:true
    }
    
    constructor(
        private http: HttpClient,
        ){}

    

    logIn(User: LogIn):Observable<LoginResponse> {

        const url = `${this.#urlSession}/login`;
        return this.http.post<LoginResponse>(url,User,this.httpOptions);

    }

    current():Observable<UserEntity | String>{
        const url = `${this.#urlSession}/current`;
        return new Observable<UserEntity | String>((observer)=>{
        return this.http.get<ResponseData>(url,this.httpOptions).subscribe({
            next:(result)=>{
                if(result.data instanceof UserEntity){
                    console.log("dentro del strategy, el usuario es instancia")
                    const user = new UserEntity ({
                        email:result.data.email,
                        firstName:result.data.firstName,
                        lastName:result.data.lastName,
                        password:""
                    })
                    console.log("el user: ",user)
                    return observer.next(user);
                }
                console.log("dentro del strategy, el usuario no es instancia")
                return observer.next("")
            },
            error:(error:HttpErrorResponse)=>{
                observer.error(error)
            }}
        )
        })
    }

    logOut():Observable<ResponseData> {
        const url = `${this.#urlSession}/logout`; 
        return this.http.post<ResponseData>("http://localhost:8081/api/session/logout",{},this.httpOptions);
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