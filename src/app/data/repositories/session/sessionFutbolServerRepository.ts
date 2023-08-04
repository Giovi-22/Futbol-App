import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse} from "@angular/common/http";

import { SessionApiStrategy } from '../../../models/interfaces/strategies/sessionStrategies.interface';
import UserEntity from '../../../domain/entities/UserEntity';
import { LogIn, LoginResponse, ResponseData, ResponseDto, RestorePassword, User } from 'src/app/models/interfaces/session.interfaces';
import { TeamEntity } from '../../../domain/entities/TeamEntity';
import { environment } from '@environment';

export class SessionFutbolServerRepository implements SessionApiStrategy  {

    #urlSession:string=`https://futbolapp-server-3r9p-dev.fl0.io/api/session`;
    httpOptions= {
    headers:{
            "Content-Type":'application/json',
        },
    withCredentials:true
    }
    
    constructor(
        private http: HttpClient,
        ){}

    

    logIn(User: LogIn):Observable<ResponseDto> {

        const url = `${this.#urlSession}/login`;
        return this.http.post<LoginResponse>(url,User,this.httpOptions).pipe(
            map((response)=>{
                const teams=response.data.user.favoriteTeams?.map(team=>new TeamEntity(team));
                const resp = {
                user: new UserEntity({
                    ...response.data.user,
                    favoriteTeams: teams || []
                }),
                token:response.data.token,
                status:response.status
                }
                return resp;
            }),
            catchError((error)=>{
                const newError = new HttpErrorResponse({
                    status:error.status,
                    error:error.error
                });
                return throwError(newError)
            })
        );

    }

    current():Observable<UserEntity | String>{
        const url = `${this.#urlSession}/current`;
        return new Observable<UserEntity>((observer)=>{
        return this.http.get<ResponseData>(url,this.httpOptions).subscribe({
            next:(result)=>{
                    const user = new UserEntity ({
                        email:result.data.email,
                        firstName:result.data.firstName,
                        lastName:result.data.lastName,
                        password:"",
                        favoriteTeams:result.data.favoriteTeams || []
                    })
                    return observer.next(user);
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

    signUp(User: Partial<UserEntity>):Observable<ResponseData>{
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