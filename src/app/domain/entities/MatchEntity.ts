import { MatchDto } from "../../models/interfaces/dtoInterfaces";

export class MatchEntity{

    area;
    season;
    id;
    utcDate;
    matchday;
    homeTeam;
    awayTeam;

    constructor(match:MatchDto){
        this.area=        match.area;
        this.season=      match.season;
        this.id=          match.id;
        this.utcDate=     match.utcDate;
        this.matchday=    match.matchday;
        this.homeTeam=    match.homeTeam;
        this.awayTeam=    match.awayTeam;

    }
}