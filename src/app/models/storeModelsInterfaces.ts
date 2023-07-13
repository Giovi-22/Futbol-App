import { CompetitionEntity } from './entities/CompetitionEntity';
import { TeamEntity } from './entities/TeamEntity';

export interface CompetitionsState{
    loading:boolean,
    current:string,
    competition:CompetitionEntity | null,
    competitions:CompetitionEntity[]
}

export interface TeamsState{
    loading:boolean,
    current:TeamEntity,
    teams:Array<TeamEntity>
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