import { HttpErrorResponse } from "@angular/common/http";
import { TeamEntity } from "../../entities/TeamEntity";
import { Observable } from 'rxjs';
import { ResponseData } from "src/app/models/interfaces/session.interfaces";

export interface UserStrategy{
    setFavoriteTeam(team:TeamEntity):Observable<ResponseData>;
    getFavoriteTeams():Observable<TeamEntity[] | HttpErrorResponse>
}