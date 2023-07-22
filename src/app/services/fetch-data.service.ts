import { HttpClient } from '@angular/common/http';
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
export class FetchDataService implements teamStrategy, competitionStrategy{
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

   getCompetitions(): Observable<CompetitionEntity[]> {
    console.log("buscando datos de la api")
     return new Observable((observer)=>{
        observer.next(competitions);
     })
   }

   getStandings(competitionCode:string,filter?:ApiFootballDataFilters): Observable<Standing[]> {
    
    let url = `${this.#urlCompetition}/${competitionCode}/standings`;
    const queryParams = Object.entries(filter?filter:{});
    if( queryParams.length){
        queryParams.forEach(param=>{
          url = `${url}?${param[0]}=${param[1]}`;
        })
    }
    
    return new Observable<Standing[]>((observer)=>{
    this.http.get<Competitions>(url,this.#options).subscribe(
      (result)=>{
        const dto ={
          
        }
        observer.next(result.standings);
      },
      (error)=>{
        throw new Error(`No se pudieron obtener los datos,${error}`);
      }
    )
     
     })
   }
/*
  getCompetitions(){
   return new Observable<CompetitionEntity[]>((observer)=>{
    this.http.get<Competitions>(this.#urlCompetition,this.#options).subscribe(
      (result)=>{
        const newCompetition = result.competitions.map(competition=>new CompetitionEntity({
        id:competition.id,                     
        area:competition.area,                  
        name:competition.name,                    
        code:competition.code,                                     
        logo:competition.emblem,                                  
        currentSeason:competition.currentSeason,   
        }))
        observer.next(newCompetition)}
    )
  });
  }
  */
  getCompetitionMatches(competitionCode:string){
    return new Observable<MatchEntity[]>((observer)=>{
      this.http.get<APIMatches>(`${this.#urlCompetition}/${competitionCode}/matches`,this.#options).subscribe(
        (result)=>{
          const matches:MatchEntity[] = result.matches.map(match=> new MatchEntity({
            area: match.area,
            season: match.season,
            id: match.id,
            utcDate: match.utcDate,
            matchday: match.matchday,
            homeTeam: {   
                id:match.homeTeam.id,   
                name:match.homeTeam.name,   
                shortName:match.homeTeam.shortName,
                tla:match.homeTeam.tla,    
                logo:match.homeTeam.crest,
            },
            awayTeam: {   
              id:match.awayTeam.id,   
              name:match.awayTeam.name,   
              shortName:match.awayTeam.shortName,
              tla:match.awayTeam.tla,    
              logo:match.awayTeam.crest,
          },
          }));
          observer.next(matches)
        },
        (error)=>{
          console.log("El error es: ",error)
        this.router.navigate(['notfound',error.error])
      }
      )
    })
  }

  getCompetition(competitionCode:string,filter?:ApiFootballDataFilters){
    
    let url = `${this.#urlCompetition}/${competitionCode}`;
    const queryParams = Object.entries(filter?filter:{});
    if( queryParams.length){
        queryParams.forEach(param=>{
          url = `${url}?${param[0]}=${param[1]}`;
        })
    }
    return new Observable<CompetitionEntity>((observer)=>{
     this.http.get<Competition>(url,this.#options).subscribe(
       (result)=>{
        const competition = new CompetitionEntity({
          id:result.id,                     
          area:result.area,                  
          name:result.name,                    
          code:result.code,                                     
          logo:result.emblem,                                  
          currentSeason:result.currentSeason,
        })
        observer.next(competition)
      },
      (error)=>{
        this.router.navigate(['notfound',error.error]);
      }
     )
   });

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
