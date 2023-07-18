import { Observable } from 'rxjs';
import { TeamEntity } from '../../entities/TeamEntity';

export interface TeamStoreStrategy{
    getTeam(teamId:number):Observable<TeamEntity>,
    getTeams(competitionCode:string):Observable<TeamEntity[]>
}

export interface TeamApiStrategy{
    getTeam(teamId:number):Observable<TeamEntity>,   
    getTeams(competitionCode:string):Observable<TeamEntity[]> 
  }
