import { HttpErrorResponse } from "@angular/common/http";
import { TeamEntity } from "../../../domain/entities/TeamEntity";
import { Observable } from 'rxjs';
import { ResponseData } from "src/app/models/interfaces/session.interfaces";

export interface UserApiStrategy{
    setFavoriteTeam(team:TeamEntity):Observable<ResponseData>;
    getFavoriteTeams():Observable<TeamEntity[] | HttpErrorResponse>
    removeFavoriteTeam(teamCode:number):Observable<ResponseData>
}