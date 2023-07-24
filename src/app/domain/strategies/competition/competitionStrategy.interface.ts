import { Observable } from 'rxjs';
import { CompetitionEntity } from '../../entities/CompetitionEntity';
import { Standing } from 'src/app/models/interfaces/competitioniterfaces';
import { MatchEntity } from '../../entities/MatchEntity';
import { ApiFootballDataFilters } from 'src/app/models/interfaces/dtoInterfaces';


export interface CompetitionApiStrategy{
    getCompetition(competitionCode:string,filter?:ApiFootballDataFilters):Observable<CompetitionEntity>;
    getCompetitions():Observable<CompetitionEntity[]>;
    getStandings(competitionCode:string,filter?:ApiFootballDataFilters):Observable<Standing[]>;
    getMatches(competitionCode:string,filter?:ApiFootballDataFilters):Observable<MatchEntity[]>;
}