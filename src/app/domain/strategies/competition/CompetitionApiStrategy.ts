import { Observable } from 'rxjs';

import { FetchDataService } from "src/app/services/fetch-data.service";
import { competitionStrategy } from "src/app/models/interfaces/strategiesInterfaces";
import { CompetitionEntity } from "../../entities/CompetitionEntity";
import { Standing } from 'src/app/models/interfaces/competitioniterfaces';
import { MatchEntity } from '../../entities/MatchEntity';
import { ApiFootballDataFilters } from 'src/app/models/interfaces/dtoInterfaces';

export class CompetitionFootballDataApiStrategy implements competitionStrategy{

    #apiClient: FetchDataService;
    
    constructor(private apiClient: FetchDataService){
        this.#apiClient = this.apiClient;
    }

    getCompetition(competitionCode:string,filter?:ApiFootballDataFilters):Observable<CompetitionEntity>{
        return this.#apiClient.getCompetition(competitionCode,filter);
    }

    getCompetitions(): Observable<CompetitionEntity[]> {
        return this.#apiClient.getCompetitions();
    }

    getStandings(competitionCode:string,filter?:ApiFootballDataFilters):Observable<Standing[]>{
        return this.#apiClient.getStandings(competitionCode,filter);
    }

    getMatches(competitionCode:string):Observable<MatchEntity[]>{
        return this.#apiClient.getCompetitionMatches(competitionCode);
    }
}