import { Observable, map } from 'rxjs';
import { HttpClient } from "@angular/common/http";
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

    logOut():Observable<LoginResponseData> {
        const url = `${this.#urlSession}/logout`; 
        return this.http.post<LoginResponseData>(url,{},this.httpOptions);
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
    changePassword(email: string):Observable<LoginResponseData> {
        const url = `${this.#urlSession}/forgotpassword`;
        let result$ = new Observable<LoginResponseData>();
        return result$ = this.http.post<LoginResponseData>(url,{email},this.httpOptions);
    }

    restorePassword(data:RestorePassword):Observable<LoginResponseData>{
        const url = `${this.#urlSession}/changepassword`;
        return this.http.put<LoginResponseData>(url,data,this.httpOptions).pipe(
            map((result)=>{
                console.log("el resultado es: ",result)
                return result;
            })
        );
    }


    
}