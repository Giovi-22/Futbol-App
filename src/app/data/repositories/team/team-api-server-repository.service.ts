import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
import { TeamApiStrategy } from 'src/app/domain/strategies/team/teamStrategies';
import { getUrlWithParams } from 'src/app/helpers/apiHelpers';
import { ApiFootballDataFilters } from 'src/app/models/interfaces/dtoInterfaces';
import { ResponseData, ResponseUser } from 'src/app/models/interfaces/session.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TeamApiServerRepositoryService implements TeamApiStrategy {

  #urlTeams:string='http://localhost:8081/api/teams/team'
  headers = new HttpHeaders({
      'Content-Type':'application/json',
      'X-Auth-Token': '860f9df0ee73439a9cc24ca71319e092'
  })
  
  constructor(
    private http: HttpClient
  ) { }

  getTeam(teamCode:number=86){
      const url = `${this.#urlTeams}/${teamCode}`;
      return new Observable<TeamEntity>((observer)=>{
          this.http.get<TeamEntity>(url,{headers:this.headers}).subscribe(
            (result)=>{
                const team = new TeamEntity({
                    area: result.area,     
                    id: result.id,    
                    name: result.name,    
                    shortName: result.shortName,
                    tla: result.tla,    
                    logo: result.logo,
                    coach: result.coach,
                    squad: result.squad,
                });
              observer.next(team);
            },
            (error)=>{
              throw new Error(`No se pudieron obtener los datos: ${error}`)
            }
          )
      });
  }
  getTeams(competitionCode: string, filter?: ApiFootballDataFilters | undefined): Observable<TeamEntity[]> {
    return new Observable();
  }

  getTeamsByName(teamName:string){
    const url = `${this.#urlTeams}/name/${teamName}`;
    console.log("el team buscado es: ",teamName)
    return this.http.get<ResponseUser>(url,{headers:this.headers}).pipe(
          map((result)=>{
            console.log("el resultado es: ",teamName)
            const teams = result.data.map(team=>new TeamEntity({     
              id: team.id,    
              name: team.name,    
              shortName: team.shortName,
              tla: team.tla,    
              logo: team.logo,
            }));
            return teams;
          }),
          catchError((error)=>{
            const newError = new HttpErrorResponse({
              error:error.error,
              status: error.status
            })
            return throwError(newError)
          })
    );
  }
}