import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { TeamEntity } from "../../entities/TeamEntity";
import { UserStrategy } from "./userStrategy.interfaces";
import { Observable } from "rxjs";
import { ResponseUser } from "src/app/models/interfaces/session.interfaces";


export class UserApiStrategy implements UserStrategy{

    #urlUser:string='http://localhost:8081/api/users/team';

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
        return this.http.post<TeamEntity>(url,{team},this.httpOptions);
    }

    removeFavoriteTeam(teamCode:number){
        const url = `${this.#urlUser}/remove-team/${teamCode}`;
        return this.http.get<TeamEntity>(url,this.httpOptions);
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