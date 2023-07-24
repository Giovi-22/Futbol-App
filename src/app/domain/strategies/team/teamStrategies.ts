import { Observable } from 'rxjs';
import { TeamEntity } from '../../entities/TeamEntity';
import { ApiFootballDataFilters } from 'src/app/models/interfaces/dtoInterfaces';

export interface TeamStoreStrategy{
    getTeam(teamId:number):Observable<TeamEntity>,
    getTeams(competitionCode:string):Observable<TeamEntity[]>
}

export interface TeamApiStrategy{
    getTeam(teamId:number):Observable<TeamEntity>,   
    getTeams(competitionCode:string,filter?:ApiFootballDataFilters):Observable<TeamEntity[]> 
  }
