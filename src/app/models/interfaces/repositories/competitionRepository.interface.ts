import { Observable } from 'rxjs';
import { CompetitionEntity } from 'src/app/domain/entities/CompetitionEntity';
import { MatchEntity } from 'src/app/domain/entities/MatchEntity';
import { Standing } from '../competitioniterfaces';

export interface CompetitionStoreRepository{
    saveCompetitions(competitions:CompetitionEntity[]):void;
    saveCompetition(competition:CompetitionEntity):void;
    setCurrent(competitionCode:string):void;
    addMatches(matches:MatchEntity[]):void;
    addStandings(standings:Standing[]):void;
    getCurrent():Observable<string>;
    getCompetitions():Observable<CompetitionEntity[]>;
    getCompetition():Observable<CompetitionEntity>;
    getMatches():Observable<MatchEntity[]>;
    getStandings():Observable<Standing[]>;
       
}