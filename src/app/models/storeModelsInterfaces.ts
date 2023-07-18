import { CompetitionEntity } from '../domain/entities/CompetitionEntity';
import { MatchEntity } from '../domain/entities/MatchEntity';
import { TeamEntity } from '../domain/entities/TeamEntity';
import { Standing } from './interfaces/competitioniterfaces';

export interface CompetitionsState{
    loading:boolean,
    current:string,
    competition:CompetitionEntity,
    competitions:CompetitionEntity[],
    matches:MatchEntity[],
    standings: Standing[],
}

export interface TeamsState{
    loading:boolean,
    current:TeamEntity,
    teams:Array<TeamEntity>,
    popularTeams: TeamEntity[]
}
//------------------------------------------

export interface Areas{
    countryCode?:string,
    flag?:string,
    id?:number,
    name?:string,
    parentArea?:string,
    parentAreaId?:number
}

export interface AreasApi{
    areas:Array<Object>,
    count:number,
    filter:Object
}

export interface CompetitionsApi{
    competitions:Array<Object>,
    count:number,
    filter:Object
}