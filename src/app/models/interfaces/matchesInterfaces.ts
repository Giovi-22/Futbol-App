export interface APIMatches {
    filters:     Filters;
    resultSet:   ResultSet;
    competition: Competition;
    matches:     Match[];
}

export interface Competition {
    id:     number;
    name:   CompetitionName;
    code:   CompetitionCode;
    type:   Type;
    emblem: string;
}

export enum CompetitionCode {
    Pl = "PL",
}

export enum CompetitionName {
    PremierLeague = "Premier League",
}

export enum Type {
    League = "LEAGUE",
}

export interface Filters {
    season: string;
}

export interface Match {
    area:        Area;
    competition: Competition;
    season:      Season;
    id:          number;
    utcDate:     Date;
    status:      Status;
    matchday:    number;
    stage:       Stage;
    group:       null;
    lastUpdated: Date;
    homeTeam:    Team;
    awayTeam:    Team;
    score:       Score;
    odds:        Odds;
    referees:    any[];
}

export interface Area {
    id:   number;
    name: AreaName;
    code: AreaCode;
    flag: string;
}

export enum AreaCode {
    Eng = "ENG",
}

export enum AreaName {
    England = "England",
}

export interface Team {
    id:        number;
    name:      string;
    shortName: string;
    tla:       string;
    crest:     string;
}


export interface Odds {
    msg: Msg;
}

export enum Msg {
    ActivateOddsPackageInUserPanelToRetrieveOdds = "Activate Odds-Package in User-Panel to retrieve odds.",
}

export interface Score {
    winner:   null;
    duration: Duration;
    fullTime: Time;
    halfTime: Time;
}

export enum Duration {
    Regular = "REGULAR",
}

export interface Time {
    home: null;
    away: null;
}

export interface Season {
    id:              number;
    startDate:       Date;
    endDate:         Date;
    currentMatchday: number;
    winner:          null;
}

export enum Stage {
    RegularSeason = "REGULAR_SEASON",
}

export enum Status {
    Scheduled = "SCHEDULED",
    Timed = "TIMED",
}

export interface ResultSet {
    count:  number;
    first:  Date;
    last:   Date;
    played: number;
}
