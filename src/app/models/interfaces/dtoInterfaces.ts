import { Team } from "./competitioniterfaces";

export interface DropdownItem{
    image:string,
    name:string
}



export interface TeamDto{
        area?:                AreaDto;
        id?:                  number;
        name?:                string;
        shortName?:           string;
        tla?:                 string;
        logo?:                string;
        coach?:               CoachDto;
        squad?:               Squad[];
}

export interface MatchDto{
        area?:        AreaDto,
        season?:      SeasonDto,
        id?:          number,
        utcDate?:     string,
        matchday?:    number,
        homeTeam?:    TeamDto,
        awayTeam?:    TeamDto,
}

export interface ApiFootballDataFilters{
   season?:string | null,
   matchDay?:number | null
}

export interface Positions{
    [Defence:string]:Squad[],
  }

export interface PlayerDto {
    id:          number;
    name:        string;
    position:    string;
    dateOfBirth: string;
    nationality: string;
}
//-------------------------------------------
export interface Competitions {
    count:        number;
    filters:      Filters;
    competitions: CompetitionDto[];
    season?:      SeasonDto;
    teams?:       TeamDto[];
}

export interface CompetitionDto {
    id:                       number;
    area?:                     AreaDto;
    name:                     string;
    code:                     string;
    logo:                     string;
    currentSeason?:           CurrentSeason;
}

export interface AreaDto {
    id:   number;
    name: string;
    code: string;
    flag: null | string;
}

export interface CurrentSeason {
    id:              number;
    startDate:       string;
    endDate:         string;
    currentMatchday: number;
    winner:          WinnerDto | null;
}

export interface WinnerDto {
    id:          number;
    name:        string;
    shortName:   string;
    tla:         string;
    crest:       string;
}

export interface SeasonDto {
    id:              number;
    startDate:       string;
    endDate:         string;
    currentMatchday: number;
    winner:          null;
}

export interface CoachDto{
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

export interface Filters {
    client: string;
}