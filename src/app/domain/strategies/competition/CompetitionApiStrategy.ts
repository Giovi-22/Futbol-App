import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { competitionStrategy } from "src/app/models/interfaces/strategiesInterfaces";
import { CompetitionEntity } from "../../entities/CompetitionEntity";
import { Competition, Competitions, Standing } from 'src/app/models/interfaces/competitioniterfaces';
import { MatchEntity } from '../../entities/MatchEntity';
import { ApiFootballDataFilters } from 'src/app/models/interfaces/dtoInterfaces';
import { competitions } from '@store/competitions';
import { APIMatches } from 'src/app/models/interfaces/matchesInterfaces';
import { getUrlWithParams } from 'src/app/helpers/apiHelpers';

export class CompetitionFootballDataApiStrategy implements competitionStrategy{

    #urlCompetition:string='https://api.football-data.org/v4/competitions';
    
    headers:HttpHeaders = new HttpHeaders({
        'Content-Type':'application/json',
        'X-Auth-Token': '860f9df0ee73439a9cc24ca71319e092'
        })

    constructor(
        private http: HttpClient,
        ){}

    getCompetition(competitionCode?: string,filter?:ApiFootballDataFilters): Observable<CompetitionEntity> {
    
        const url = `${this.#urlCompetition}/${competitionCode}`;
        const newUrl = getUrlWithParams(url,filter);
    
        return new Observable<CompetitionEntity>((observer)=>{
         this.http.get<Competition>(newUrl,{headers:this.headers}).subscribe(
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
            throw new Error(`No se pudieron obtener los datos,${error}`)
          }
         )
        });
    }

    getCompetitions(): Observable<CompetitionEntity[]> {
    console.log("buscando datos de la api")
     return new Observable((observer)=>{
        observer.next(competitions);
     })
    }

    getStandings(competitionCode:string,filter?:ApiFootballDataFilters): Observable<Standing[]> {
    
        const url = `${this.#urlCompetition}/${competitionCode}/standings`;
        const newUrl = getUrlWithParams(url,filter);

        return new Observable<Standing[]>((observer)=>{
            this.http.get<Competitions>(newUrl,{headers:this.headers}).subscribe(
              (result)=>{
                observer.next(result.standings);
              },
              (error)=>{
                throw new Error(`No se pudieron obtener los datos,${error}`);
              });
        })
    }

    getMatches(competitionCode:string):Observable<MatchEntity[]>{

        const url = `${this.#urlCompetition}/${competitionCode}/matches`;

        return new Observable<MatchEntity[]>((observer)=>{
            this.http.get<APIMatches>(url,{headers:this.headers}).subscribe(
                (result)=>{
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
                (error)=>{
                    throw new Error(`No se pudieron obtener los datos,${error}`);
                }
            )
        });
    }

}