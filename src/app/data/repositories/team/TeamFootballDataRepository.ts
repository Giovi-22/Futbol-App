import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import { TeamEntity } from "../../../domain/entities/TeamEntity";
import { Competitions, Team } from "src/app/models/interfaces/competitioniterfaces";
import { TeamApiStrategy } from "../../../models/interfaces/strategies/teamStrategies";
import { ApiFootballDataFilters, Error } from 'src/app/models/interfaces/dtoInterfaces';
import { getUrlWithParams } from 'src/app/helpers/apiHelpers';
import PlayerEntity from 'src/app/domain/entities/PlayerEntity';



export class TeamFootballDataRepository implements TeamApiStrategy{

    #urlCompetition:string='https://api.football-data.org/v4/competitions';
    #urlTeams:string='https://api.football-data.org/v4/teams'
    
    headers:HttpHeaders = new HttpHeaders({
        'Content-Type':'application/json',
        'X-Auth-Token': '860f9df0ee73439a9cc24ca71319e092'
    })
    
    constructor(private http: HttpClient){}

    getTeam(teamCode:number=86){
        const url = `${this.#urlTeams}/${teamCode}`;
        return new Observable<TeamEntity>((observer)=>{
            this.http.get<Team>(url,{headers:this.headers}).subscribe({
              next:(result)=>{
                  const team = new TeamEntity({
                      area: result.area,     
                      id: result.id,    
                      name: result.name,    
                      shortName: result.shortName,
                      tla: result.tla,    
                      logo: result.crest,
                      coach: result.coach,
                      squad: result.squad,
                  });
                observer.next(team);
              },
              error:(error:HttpErrorResponse)=>{
                const newError:Error={
                  message:error.error.message,
                  status:error.status
                
                }
                observer.error(newError);
              }
            })
        });
    }

    getTeams(competitionCode:string="PL",filter?:ApiFootballDataFilters){
        const url = `${this.#urlCompetition}/${competitionCode}/teams`;
        const newUrl = getUrlWithParams(url,filter);
        return new Observable<TeamEntity[]>((observer)=>{
            this.http.get<Competitions>(newUrl,{headers:this.headers}).subscribe({
              next:(result)=>{
                const teams = result.teams?.map(team=>new TeamEntity({
                  area: team.area,     
                  id: team.id,    
                  name: team.name,    
                  shortName: team.shortName,
                  tla: team.tla,    
                  logo: team.crest,
                  coach: team.coach,
                  squad: team.squad,
                }));
            
                observer.next(teams);
              },
              error:(error:HttpErrorResponse)=>{
                const newError:Error={
                  message:error.error.message,
                  status:error.status
                
                }
                observer.error(newError);
              }
            })
        })
    }

  getTeamsByName(teamName: string): Observable<TeamEntity[]> {
    return new Observable();
  }

  getPlayers(playersList: number[]): Observable<PlayerEntity[]> {
    return new Observable();
  }
}