import { HttpErrorResponse } from "@angular/common/http";
import { TeamEntity } from "../../entities/TeamEntity";
import { Observable } from 'rxjs';

export interface UserStrategy{
    setFavoriteTeam(team:TeamEntity):Observable<TeamEntity>;
    getFavoriteTeams():Observable<TeamEntity[] | HttpErrorResponse>
}