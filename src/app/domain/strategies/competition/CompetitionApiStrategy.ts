import { Observable } from 'rxjs';

import { FetchDataService } from "src/app/services/fetch-data.service";
import { competitionStrategy } from "src/app/models/interfaces/strategiesInterfaces";
import { CompetitionEntity } from "../../entities/CompetitionEntity";

export class CompetitionFootballDataApiStrategy implements competitionStrategy{

    #apiClient: FetchDataService;
    
    constructor(private apiClient: FetchDataService){
        this.#apiClient = this.apiClient;
    }

    getCompetition(competitionCode:string):Observable<CompetitionEntity>{
        return this.#apiClient.getCompetition(competitionCode);
    }

    getCompetitions(): Observable<CompetitionEntity[]> {
        return this.#apiClient.getCompetitions();
    }
}