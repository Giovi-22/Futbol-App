import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competition, Competitions, Team } from '../models/interfaces/competitionInterfaces';
import { Observable } from 'rxjs';
import { competitionStrategy, teamStrategy } from '../models/interfaces/strategiesInterfaces';
import { CompetitionDto, TeamDto } from '../models/interfaces/dtoInterfaces';
import { TeamEntity } from '../models/entities/TeamEntity';


@Injectable({
  providedIn: 'root'
})
export class FetchDataService implements teamStrategy, competitionStrategy{
  #urlCompetition:string='https://api.football-data.org/v4/competitions';
  #urlTeams:string='https://api.football-data.org/v4/teams'
  
  #options = {
    headers:{
      'Content-Type':'application/json',
      'X-Auth-Token': '860f9df0ee73439a9cc24ca71319e092'
  }
}
  constructor(private http: HttpClient) {
   }

  getCompetitions(){
   return new Observable<Competition[]>((observer)=>{
    this.http.get<Competitions>(this.#urlCompetition,this.#options).subscribe(
      (result)=>{
        observer.next(result.competitions)}
    )
  });
  }

  getCompetition(competitionCode:string){
    return new Observable<Competition>((observer)=>{
     this.http.get<Competition>(`${this.#urlCompetition}/${competitionCode}`,this.#options).subscribe(
       (result)=>observer.next(result)
     )
   });
   }

  getTeams(competitionCode:string="PL"){
   return new Observable<TeamEntity[]>((observer)=>{
    this.http.get<Competitions>(`${this.#urlCompetition}/${competitionCode}/teams`,this.#options).subscribe(
      (result)=>{
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
        
        observer.next(teams)
      },
      (error)=>{throw new Error(`No se pudieron obtener los datos: ${error}`)})
   })
  }

  getTeam(teamCode:number=86){
    return new Observable<TeamEntity>((observer)=>{
      this.http.get<Team>(`${this.#urlTeams}/${teamCode}`,this.#options).subscribe(
        (result)=>{
          const team:TeamDto = {
            area: result.area,     
            id: result.id,    
            name: result.name,    
            shortName: result.shortName,
            tla: result.tla,    
            logo: result.crest,
            coach: result.coach,
            squad: result.squad,
          };
          observer.next(new TeamEntity(team))
        },
        (error)=>{throw new Error(`No se pudieron obtener los datos: ${error}`)}
      )
    });
    }
}
