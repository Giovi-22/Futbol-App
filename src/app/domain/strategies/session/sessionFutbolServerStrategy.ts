import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SessionStrategy } from './sessionStrategy.interface';
import UserEntity from '../../entities/UserEntity';
import { LogIn, LoginResponseData } from 'src/app/models/interfaces/session.interfaces';

export class SessionFutbolServerStrategy implements SessionStrategy {

    #urlSession:string='http://localhost:8081/api/session/'
    
    headers:HttpHeaders = new HttpHeaders({
        'Content-Type':'application/json',

    })
    
    constructor(private http: HttpClient){}

    logIn(User: LogIn):Observable<LoginResponseData> {

        const url = `${this.#urlSession}/login`;
        return new Observable<LoginResponseData>((observer)=>{
        this.http.post<LoginResponseData>(url,User,{headers:this.headers}).subscribe(
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

    signUp(User: UserEntity): void {
        const url = `${this.#urlSession}/sign-up`; 
        this.http.post(url,User,{headers:this.headers}).subscribe(
            (result)=>{
                console.log("Se ha creado el usuario: ",result);
            },
            (error)=>{
                throw new Error(`Se ha producido un error: ${error}`);
            }
        )
    }


    
}