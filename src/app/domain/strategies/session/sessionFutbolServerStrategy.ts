import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParamsOptions } from "@angular/common/http";
import { SessionStrategy } from './sessionStrategy.interface';
import UserEntity from '../../entities/UserEntity';
import { LogIn, LoginResponseData, RestorePassword } from 'src/app/models/interfaces/session.interfaces';

export class SessionFutbolServerStrategy implements SessionStrategy {

    #urlSession:string='http://localhost:8081/api/session'
    httpOptions= {
    headers:{
            "Content-Type":'application/json',
        },
    withCredentials:true
    }
    
    constructor(private http: HttpClient){}

    logIn(User: LogIn):Observable<LoginResponseData> {

        const url = `${this.#urlSession}/login`;
        return new Observable<LoginResponseData>((observer)=>{
        this.http.post<LoginResponseData>(url,User,this.httpOptions).subscribe(
            (result)=>{
                console.log(result);
                observer.next(result)
            },
            (error)=>{
                observer.error(error)
            }
        )
        })
    }

    logOut(): void {
        console.log("Log out!")
    }

    signUp(User: UserEntity):Observable<LoginResponseData>{
        const url = `${this.#urlSession}/signup`; 
        return new Observable((observer)=>{
        this.http.post<LoginResponseData>(url,User,this.httpOptions).subscribe(
            (result)=>{
                if(result.status){
                    observer.next(result)
                }
            },
            (error)=>{
                observer.error(`Se ha producido un error: ${error}`);
            }
        )
        })
    }

    restorePassword(data:RestorePassword):Observable<LoginResponseData>{
        const url = `${this.#urlSession}/changepassword`;
        return new Observable((observer)=>{
            this.http.put<LoginResponseData>(url,data,this.httpOptions).subscribe(
                (response)=>{
                    observer.next(response);
                },
                (error)=>{
                    observer.error(`Se ha producido un error: ${error}`);
                }
            )
        })
    }


    
}