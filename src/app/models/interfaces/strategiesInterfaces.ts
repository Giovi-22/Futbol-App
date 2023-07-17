import { Observable } from "rxjs"
import { Competition, Team } from "./competitioniterfaces"
import { TeamDto } from "./dtoInterfaces"
import { TeamEntity } from "../../domain/entities/TeamEntity"
import { CompetitionEntity } from "../../domain/entities/CompetitionEntity"

export interface teamStrategy{
    getTeam(code?:number):Observable<TeamEntity>,
    getTeams(code?:string):Observable<TeamEntity[]>
}

export interface competitionStrategy{
    getCompetition(competitionCode?:string):Observable<CompetitionEntity>,
    getCompetitions():Observable<CompetitionEntity[]>
}