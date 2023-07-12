import { Observable } from "rxjs"
import { Competition, Team } from "./competitionInterfaces"
import { TeamDto } from "./dtoInterfaces"
import { TeamEntity } from "../entities/TeamEntity"

export interface teamStrategy{
    getTeam(code?:number):Observable<TeamEntity>,
    getTeams(code?:string):Observable<TeamEntity[]>
}

export interface competitionStrategy{
    getCompetition(competitionCode?:string):Observable<Competition>,
    getCompetitions():Observable<Competition[]>
}