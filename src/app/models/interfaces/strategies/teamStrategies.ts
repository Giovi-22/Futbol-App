import { Observable } from 'rxjs';
import { TeamEntity } from '../../../domain/entities/TeamEntity';
import { ApiFootballDataFilters } from 'src/app/models/interfaces/dtoInterfaces';
import PlayerEntity from '../../../domain/entities/PlayerEntity';

export interface TeamStoreStrategy{
    getTeam(teamId:number):Observable<TeamEntity>,
    getTeams(competitionCode:string):Observable<TeamEntity[]>
}

export interface TeamApiStrategy{
    getTeam(teamId:number):Observable<TeamEntity>,   
    getTeams(competitionCode:string,filter?:ApiFootballDataFilters):Observable<TeamEntity[]> 
    getTeamsByName(teamName:string):Observable<TeamEntity[]>
    getPlayers(playersList:number[]):Observable<PlayerEntity[]>
  }
