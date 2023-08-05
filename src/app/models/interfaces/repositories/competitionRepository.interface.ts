import { Observable } from 'rxjs';
import { CompetitionEntity } from 'src/app/domain/entities/CompetitionEntity';
import { MatchEntity } from 'src/app/domain/entities/MatchEntity';
import { Competition, Competitions, Standing } from '../competitioniterfaces';
import { APIMatches } from '../matchesInterfaces';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';

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

export interface CompetitionApiServerRepository{
        status:string,
        message:string,
        data: Competition;
}

export interface StandingsApiServerRepository{
    status:string,
    message:string,
    data: Competitions;
}

export interface MatchesApiServerRepository {
    status:string,
    message:string,
    data: APIMatches
}

export interface TeamsApiServerRepository {
    status:string,
    message:string,
    data: TeamEntity[];
}

