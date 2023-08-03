import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { TeamEntity } from "../../../domain/entities/TeamEntity";
import { Observable } from "rxjs";
import { ResponseData, ResponseUser } from "src/app/models/interfaces/session.interfaces";
import { UserApiStrategy } from "src/app/models/interfaces/strategies/userStrategies.interfaces";
import { environment } from "@environment";

export class UserServerRepository implements UserApiStrategy{

    #urlUser:string=`${environment.api_futbolServer_url}/users/team`;
    

    httpOptions= {
        headers:{
                "Content-Type":'application/json',
            },
        withCredentials:true
        }

    constructor(
        private http: HttpClient
    ){

    }

    setFavoriteTeam(team:TeamEntity){
        const url = `${this.#urlUser}/set-team`;
        return this.http.put<ResponseData>(url,{team},this.httpOptions);
    }

    removeFavoriteTeam(teamCode:number){
        const url = `${this.#urlUser}/remove-team/${teamCode}`;
        return this.http.get<ResponseData>(url,this.httpOptions);
    }

    getFavoriteTeams():Observable<TeamEntity[] | HttpErrorResponse>{
        const url = `${this.#urlUser}/get-list`;
        return new Observable(observer => {
            this.http.get<ResponseUser>(url,this.httpOptions).subscribe({
            next:(response)=>{
                const favoriteTeams = response.data.map(team=>new TeamEntity(team));
                observer.next(favoriteTeams);
            },
            error:(error:HttpErrorResponse)=>{
                observer.next(error);
            }
        });
    });
    }

}