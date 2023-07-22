import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competition, Competitions, Standing, Team } from '../models/interfaces/competitioniterfaces';
import { Observable } from 'rxjs';
import { competitionStrategy, teamStrategy } from '../models/interfaces/strategiesInterfaces';
import { ApiFootballDataFilters, CompetitionDto, MatchDto, TeamDto } from '../models/interfaces/dtoInterfaces';
import { TeamEntity } from '../domain/entities/TeamEntity';
import { CompetitionEntity } from '../domain/entities/CompetitionEntity';
import { competitions } from '../store/competitions';
import { Router } from '@angular/router';
import { APIMatches } from '../models/interfaces/matchesInterfaces';
import { MatchEntity } from '../domain/entities/MatchEntity';
import { Session } from '../models/interfaces/session.interfaces';


@Injectable({
  providedIn: 'root'
})
export class FetchDataService implements teamStrategy{
  #urlCompetition:string='https://api.football-data.org/v4/competitions';
  #urlTeams:string='https://api.football-data.org/v4/teams'
  
  #options = {
    headers:{
      'Content-Type':'application/json',
      'X-Auth-Token': '860f9df0ee73439a9cc24ca71319e092'
  }
}
  constructor(
    private http: HttpClient,
    private router: Router
    ) {
   }

  getTeams(competitionCode:string="PL"){
    console.log("buscando equipos en la api")
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
      (error)=>{
        this.router.navigate(['notfound',error.error]);
        //throw new Error(`No se pudieron obtener los datos: ${error}`)
      })
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
        (error)=>{
          this.router.navigate(['notfound',error.error]);
          //throw new Error(`No se pudieron obtener los datos: ${error}`)
        }
      )
    });
    }

  logIn(data:Session){
    console.log("haciendo un post con los siguientes datos: ",data)
  this.http.post("http://localhost:8081/api/session/login/",{data}).subscribe(
    (response)=>{
      console.log("la respuesta es: ",response)
    },
    (error)=>{
      console.log("Se ha producido un error: ",error)
    }
  )
  }
}
