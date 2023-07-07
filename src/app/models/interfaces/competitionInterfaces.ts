export interface Competitions {
    count:        number;
    filters:      Filters;
    competitions: Competition[];
    season?:      Season;
    teams?:       Team[];
}

export interface Competition {
    id:                       number;
    area:                     Area;
    name:                     string;
    code:                     string;
    type:                     Type;
    emblem:                   string;
    plan:                     Plan;
    currentSeason:            CurrentSeason;
    numberOfAvailableSeasons: number;
    lastUpdated:              Date;
}

export interface Area {
    id:   number;
    name: string;
    code: string;
    flag: null | string;
}

export interface CurrentSeason {
    id:              number;
    startDate:       Date;
    endDate:         Date;
    currentMatchday: number;
    winner:          Winner | null;
}

export interface Winner {
    id:          number;
    name:        string;
    shortName:   string;
    tla:         string;
    crest:       string;
    address:     string;
    website:     string;
    founded:     number;
    clubColors:  string;
    venue:       string;
    lastUpdated: Date;
}

export interface Season {
    id:              number;
    startDate:       Date;
    endDate:         Date;
    currentMatchday: number;
    winner:          null;
}

export interface Team {
    area?:                Area;
    id?:                  number;
    name?:                string;
    shortName?:           string;
    tla?:                 string;
    crest?:               string;
    address?:             string;
    website?:             string;
    founded?:             number | null;
    clubColors?:          string;
    venue?:               string;
    runningCompetitions?: Competition[];
    coach?:               Coach;
    squad?:               Squad[];
    staff?:               Coach[];
    lastUpdated?:         Date;
}

export interface Coach {
    id:          number | null;
    firstName:   null | string;
    lastName:    null | string;
    name:        null | string;
    dateOfBirth: Date | null;
    nationality: null | string;
    contract:    Contract;
}

export interface Squad {
    id:          number;
    name:        string;
    position:    Position;
    dateOfBirth: Date;
    nationality: string;
}

export enum Position {
    Defence = "Defence",
    Defender = "Defender",
    Forward = "Forward",
    Goalkeeper = "Goalkeeper",
    Midfield = "Midfield",
    Midfielder = "Midfielder",
    Offence = "Offence",
}

export interface Contract {
    start: null | string;
    until: Until | null;
}

export enum Until {
    The202306 = "2023-06",
    The202406 = "2024-06",
    The202506 = "2025-06",
    The202606 = "2026-06",
    The202806 = "2028-06",
}
export enum Plan {
    TierOne = "TIER_ONE",
}

export enum Type {
    Cup = "CUP",
    League = "LEAGUE",
}

export interface Filters {
    client: string;
}