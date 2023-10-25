import { TeamDto } from './interfaces/dtoInterfaces';

export interface ISearchResult{
    teams: TeamDto[],
    message:string,
    error:boolean
}