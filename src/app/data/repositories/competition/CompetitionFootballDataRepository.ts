import { Observable} from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { competitionStrategy } from "src/app/models/interfaces/strategies/strategiesInterfaces";
import { CompetitionEntity } from "../../../domain/entities/CompetitionEntity";
import { Competition, Competitions, Standing } from 'src/app/models/interfaces/competitioniterfaces';
import { MatchEntity } from '../../../domain/entities/MatchEntity';
import { ApiFootballDataFilters, Error } from 'src/app/models/interfaces/dtoInterfaces';
import { competitions } from 'src/app/data/ngrxStore/competitions';
import { APIMatches } from 'src/app/models/interfaces/matchesInterfaces';
import { getUrlWithParams } from 'src/app/helpers/apiHelpers';

export class CompetitionFootballDataRepository implements competitionStrategy{

    #urlCompetition:string='https://api.football-data.org/v4/competitions';
    
    headers:HttpHeaders = new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Auth-Token': '860f9df0ee73439a9cc24ca71319e092' //ToDo: move to a env var
        })

    constructor(
        private http: HttpClient,
        ){}

    getCompetition(competitionCode?: string,filter?:ApiFootballDataFilters): Observable<CompetitionEntity> {
    
        const url = `${this.#urlCompetition}/${competitionCode}`;
        const newUrl = getUrlWithParams(url,filter);
    
        return new Observable<CompetitionEntity>((observer)=>{
         this.http.get<Competition>(newUrl,{headers:this.headers}).subscribe({
           next:(result)=>{
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
          error:(error:HttpErrorResponse)=>{
            const newError:Error={
                message:error.error.message,
                status: error.status
            }
            observer.error(newError);
          }
         })
        });
    }

    getCompetitions(): Observable<CompetitionEntity[]> {
     return new Observable((observer)=>{
        observer.next(competitions);
     })
    }

    getStandings(competitionCode:string,filter?:ApiFootballDataFilters): Observable<Standing[]> {
    
        const url = `${this.#urlCompetition}/${competitionCode}/standings`;
        const newUrl = getUrlWithParams(url,filter);

        return new Observable<Standing[]>((observer)=>{
            this.http.get<Competitions>(newUrl,{headers:this.headers}).subscribe({
              next:(result)=>{
                observer.next(result.standings);
              },
              error:(error:HttpErrorResponse)=>{
                const newError:Error={
                    message:error.error.message,
                    status: error.status
                }
                observer.error(newError);
              }});
        })
    }

    getMatches(competitionCode:string,filter?:ApiFootballDataFilters):Observable<MatchEntity[]>{

        const url = `${this.#urlCompetition}/${competitionCode}/matches`;
        const newUrl = getUrlWithParams(url,filter);

        return new Observable<MatchEntity[]>((observer)=>{
            this.http.get<APIMatches>(newUrl,{headers:this.headers}).subscribe({
                next:(result)=>{
                    const matches:MatchEntity[] = result.matches.map(match=> 
                        new MatchEntity({
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
                error:(error:HttpErrorResponse)=>{
                    const newError:Error={
                        message:error.error.message,
                        status: error.status
                    };
                    observer.error(newError);
                  }
            })
        });
    }

}