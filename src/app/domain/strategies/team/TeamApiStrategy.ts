import { FetchDataService } from "src/app/services/fetch-data.service";
import { TeamApiStrategy } from "./teamStrategies";
import { Observable } from 'rxjs';
import { TeamEntity } from "../../entities/TeamEntity";

export class TeamFootballDataApiStrategy implements TeamApiStrategy{

    #apiClient: FetchDataService;
    
    constructor(private apiClient: FetchDataService){
        this.#apiClient = this.apiClient;
    }

    getTeam(teamId:number):Observable<TeamEntity>{
        return this.#apiClient.getTeam(teamId);
    }

    getTeams(competitionCode: string): Observable<TeamEntity[]> {
        return this.#apiClient.getTeams(competitionCode);
    }
}