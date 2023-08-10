import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { environment } from "@environment";
import { getUrlWithParams } from "src/app/helpers/apiHelpers";
import { ApiFootballDataFilters, Error } from "src/app/models/interfaces/dtoInterfaces";
import { Observable } from 'rxjs';
import { CompetitionEntity } from "src/app/domain/entities/CompetitionEntity";
import { CompetitionApiServerRepository, MatchesApiServerRepository, StandingsApiServerRepository } from "src/app/models/interfaces/repositories/competitionRepository.interface";
import { competitions } from "../../ngrxStore/competitions";
import { Standing } from "src/app/models/interfaces/competitioniterfaces";
import { MatchEntity } from "src/app/domain/entities/MatchEntity";

export class CompetitionFutbolAppRepository{

    #urlCompetition:string= `${environment.api_futbolServer_url}/competitions`;
    
    headers:HttpHeaders = new HttpHeaders({
        'Content-Type':'application/json',
        })
    constructor(
        private http: HttpClient
    ){

    }

    
    getCompetition(competitionCode?: string,filter?:ApiFootballDataFilters): Observable<CompetitionEntity> {
    
        const url = `${this.#urlCompetition}/competition/${competitionCode}`;
        const newUrl = getUrlWithParams(url,filter);
    
        return new Observable<CompetitionEntity>((observer)=>{
         this.http.get<CompetitionApiServerRepository>(newUrl,{headers:this.headers}).subscribe({
           next:(result)=>{
            const competition = new CompetitionEntity({
              id:result.data.id,                     
              area:result.data.area,                  
              name:result.data.name,                    
              code:result.data.code,                                     
              logo:result.data.emblem,                                  
              currentSeason:result.data.currentSeason,
            })
            observer.next(competition)
          },
          error:(error:HttpErrorResponse)=>{
            const newError:Error={
                message:error.error.message || "Not found",
                status: error.status
            }
            console.log("el error en competition: ",error)
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
    
        const url = `${this.#urlCompetition}/competition/${competitionCode}/standings`;
        const newUrl = getUrlWithParams(url,filter);

        return new Observable<Standing[]>((observer)=>{
            this.http.get<StandingsApiServerRepository>(newUrl,{headers:this.headers}).subscribe({
              next:(result)=>{
                observer.next(result.data.standings);
              },
              error:(error:HttpErrorResponse)=>{
                const newError:Error={
                    message:error.error.message || "Not found",
                    status: error.status
                }
                console.log("el error en standings: ",error)
                observer.error(newError);
              }});
        })
    }

    getMatches(competitionCode:string,filter?:ApiFootballDataFilters):Observable<MatchEntity[]>{

        const url = `${this.#urlCompetition}/competition/${competitionCode}/matches`;
        const newUrl = getUrlWithParams(url,filter);

        return new Observable<MatchEntity[]>((observer)=>{
            this.http.get<MatchesApiServerRepository>(newUrl,{headers:this.headers}).subscribe({
                next:(result)=>{
                    const matches:MatchEntity[] = result.data.matches.map(match=> 
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
                        message:error.error.message || "Not found",
                        status: error.status
                    };
                    console.log("el error en matches: ",error)
                    observer.error(newError);
                  }
            })
        });
    }

}