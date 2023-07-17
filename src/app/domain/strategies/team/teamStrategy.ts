import { Observable } from 'rxjs';
import { TeamEntity } from '../entities/TeamEntity';

export interface TeamSearchStrategy{
    getTeam(teamId:number):Observable<TeamEntity>,
    getTeams(competitionCode:string):Observable<TeamEntity[]>
}

