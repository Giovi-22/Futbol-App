import { TeamEntity } from './entities/TeamEntity';
import { Competition, Team } from './interfaces/competitionInterfaces';
export interface CompetitionsState{
    loading:boolean,
    current:string,
    competitions:ReadonlyArray<CompetitionCard>
}

export interface TeamsState{
    loading:boolean,
    current:TeamEntity,
    teams:Array<TeamEntity>
}
//------------------------------------------

export interface CompetitionCard{
    name:string,
    code:string,
    crest:string,
    id:number
}

export interface TeamCard{
    name:string,
    crest: string,
    tla: string,
    areaName: string,
    areaCode: string,
    id: number
}

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