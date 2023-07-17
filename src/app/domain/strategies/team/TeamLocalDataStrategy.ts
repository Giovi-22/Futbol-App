import { TeamSearchStrategy } from "./teamStrategy";
import { Observable } from 'rxjs';
import { TeamEntity } from "../../entities/TeamEntity";
import { TeamRepositoryNgrxStoreService } from "src/app/data/repositories/team/team-repository-ngrx-store.service";

export class TeamLocalDataStrategy implements TeamSearchStrategy{

    #dataRepository: TeamRepositoryNgrxStoreService;
    
    constructor(private dataRepository: TeamRepositoryNgrxStoreService){
        this.#dataRepository = this.dataRepository;
    }

    getTeam(teamId:number):Observable<TeamEntity>{
        return this.#dataRepository.getCurrent();
    }

    getTeams(): Observable<TeamEntity[]> {
        return this.#dataRepository.getTeams();
    }
}